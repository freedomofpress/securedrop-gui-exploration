use anyhow::anyhow;
use serde::{Deserialize, Serialize};
use std::{collections::HashMap, process::Stdio};
use tokio::{io::AsyncWriteExt, process::Command};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Serialize, Deserialize, Clone, Debug)]
struct ProxyRequest {
    method: String,
    path_query: String,
    stream: bool,
    body: String,
    headers: HashMap<String, String>,
}

#[derive(Serialize, Clone, Debug)]
struct ProxyResponse {
    stdout: String,
    stderr: String,
    code: i32,
}

#[tauri::command]
async fn request(request: ProxyRequest) -> Result<ProxyResponse, String> {
    inner_request(request).await.map_err(|e| e.to_string())
}

// workaround in that the Err() type should be serializable, and anyhow's isn't (straightforward to fix in real code).
async fn inner_request(request: ProxyRequest) -> anyhow::Result<ProxyResponse> {
    let mut child = Command::new("/home/user/.cargo/target/debug/securedrop-proxy")
        .env("SD_PROXY_ORIGIN", "https://demo-journalist.securedrop.org/")
        .stdout(Stdio::piped())
        .stderr(Stdio::piped())
        .stdin(Stdio::piped())
        .spawn()?;
    let mut stdin = child
        .stdin
        .take()
        .ok_or_else(|| anyhow!("uhoh failed to open stdin"))?;
    stdin
        .write_all(serde_json::to_string(&request)?.as_bytes())
        .await?;
    stdin.write_all(b"\n").await?;
    drop(stdin); // send EOF
    let output = child.wait_with_output().await?;
    Ok(ProxyResponse {
        stdout: String::from_utf8(output.stdout)?,
        stderr: String::from_utf8(output.stderr)?,
        code: output.status.code().unwrap_or(-1),
    })
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, request])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

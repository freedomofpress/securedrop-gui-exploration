import { app, BrowserWindow, ipcMain, session } from 'electron';
import path from 'node:path';
import child_process from 'node:child_process';
import { ProxyRequest } from '../ipc/types';

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    let csp = ["default-src 'none'", "script-src 'self' 'unsafe-inline'"];
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
      const viteURL = MAIN_WINDOW_VITE_DEV_SERVER_URL.replace('http://', 'ws://')
      csp.push(`connect-src ${viteURL}`);
      // TODO: figure out how to use vite without inline styles
      csp.push("style-src 'self' 'unsafe-inline'");
    } else {
      csp.push("style-src 'self'");
    }
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [csp.join('; ')]
      }
    })
  });
};



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

ipcMain.handle('ping', (event) => {
  console.log('ping');
  return 'pong';
});

ipcMain.handle('request', async (event, request: ProxyRequest) => {
  console.log('incoming request: ', request);
  const result = await runProxy(request);
  console.log('outgoing response: ', result);
  return result;
});

async function runProxy(request: ProxyRequest) {
  return new Promise((resolve, reject) => {
    const process = child_process.spawn('/home/user/.cargo/target/debug/securedrop-proxy', [], {
      env: {"SD_PROXY_ORIGIN": "https://demo-journalist.securedrop.org/"}
    });

    let stdout = '';
    let stderr = '';

    process.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    process.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    process.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr, code });
      } else {
        reject(new Error(`Process exited with code ${code}: ${stderr}`));
      }
    });

    // Handle process errors
    process.on('error', (error) => {
      reject(error);
    });

    // Write input and close stdin
    process.stdin.write(JSON.stringify(request) + '\n');
    process.stdin.end();
  });
}

/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';
import { ProxyRequest } from './types';

console.log('👋 This message is being logged by "renderer.ts", included via Vite');

document.getElementById('ping')?.addEventListener('click', async () => {
  const response = await window.electronAPI.ping();

  console.log("response: ", response);
});

document.getElementById('xss')?.addEventListener('click', async () => {
  const script = document.createElement('script');
  script.innerHTML = 'alert("XSS"); console.log(window.electronAPI);';
  document.body.appendChild(script);
});

document.getElementById('framed-xss')?.addEventListener('click', async () => {
  const iframe = document.createElement('iframe');
  // Disable sandboxing to further verify window.electronAPI doesn't exist in the frame
  iframe.sandbox = '';
  iframe.srcdoc = '<script>console.log(window.electronAPI);</script>';
  document.body.appendChild(iframe);
});

document.getElementById('login-button')?.addEventListener('click', async () => {
  const totp = (document.getElementById('totp') as HTMLInputElement).value;
  await login(totp);
});

async function login(totp: string) {
  const resp = await window.electronAPI.request({
    method: 'POST',
    path_query: '/api/v1/token',
    stream: false,
    body: JSON.stringify({
      username: 'journalist',
      passphrase: 'correct horse battery staple profanity oil chewy',
      one_time_code: totp
    }),
    headers: {}
  } as ProxyRequest);

  console.log(resp);
}

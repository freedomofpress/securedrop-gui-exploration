import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy the Journalist API to bypass CORS restrictions.  This is unlikely
    // to be necessary in production via the securedrop-proxy, but we'll need
    // either this or a server-side CORS accommodation in the development
    // environment.
    proxy: {
      "/api": "https://demo-journalist.securedrop.org",
    },
  },
});

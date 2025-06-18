import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
//import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "@radix-ui/themes/styles.css";
import App from "./App.js";
import { Theme } from "@radix-ui/themes";
import { setupStore } from "./store.js";

const store = setupStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Theme accentColor="blue" grayColor="gray" panelBackground="solid" radius="none">
        <App />
      </Theme>
    </Provider>
  </StrictMode>
);

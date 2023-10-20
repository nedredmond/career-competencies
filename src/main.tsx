import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Router from "./router.tsx";
import "./index.css";
import { DataProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <Router />
    </DataProvider>
  </React.StrictMode>
);

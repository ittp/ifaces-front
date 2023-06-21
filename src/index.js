import { createRoot } from "react-dom/client";

import App from "./App";
import Content from "./Drawer";
import "antd/dist/antd.css";
import interfaces from "./demo.json";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <App />
    <Content data={interfaces} />
  </>
);

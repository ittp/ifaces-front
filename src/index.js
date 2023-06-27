import { createRoot } from "react-dom/client";

import App from "./App";
import Content from "./Drawer";
import "antd/dist/antd.css";
import interfaces from "./demo.json";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <App
      users={[
        { id: 1, user: "tpa", group: "tpa" },
        { id: 2, user: "admin", group: "admin" },
        { id: 3, user: "view", group: "view" },
        { id: 4, user: "disabled", disabled: true, group: "disabled" },
      ]}
    />
  </>
);

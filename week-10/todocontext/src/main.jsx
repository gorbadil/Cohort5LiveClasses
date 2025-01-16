import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToDoProvider } from "./context/ToDoProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ToDoProvider>
    <App />
  </ToDoProvider>
);

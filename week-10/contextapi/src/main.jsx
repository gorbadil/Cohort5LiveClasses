import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // <ThemeContext.Provider value={"dark"}>
  //   <App />
  // </ThemeContext.Provider>
  // 1. syntx
  // <ThemeProvider children={<App />} />
  // 2. syntx
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

// state lazım
// state kullanmak için component içinde olması gerekiyor

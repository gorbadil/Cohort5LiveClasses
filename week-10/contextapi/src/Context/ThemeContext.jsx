// createContext => context component üretmek için
// useContext => context'i çağırmak

import { createContext, useState } from "react";

export const ThemeContext = createContext();

// ThemeContext.Provider

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const data = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

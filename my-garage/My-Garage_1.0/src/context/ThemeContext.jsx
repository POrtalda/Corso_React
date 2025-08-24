import { createContext } from "react";

// Valori di default per evitare errori se manca il Provider
const ThemeContext = createContext({
  isDarkMode: false,
  setIsDarkMode: () => {}
});

export default ThemeContext;

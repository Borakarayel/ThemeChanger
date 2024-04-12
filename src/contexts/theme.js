import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//basically shorter version "Themecontext.provider"

export const ThemeProvider = ThemeContext.Provider;

//the custom hook for using the context
export default function useTheme() {
  return useContext(ThemeContext);
}

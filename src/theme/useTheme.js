// src/theme/useTheme.js
import { useContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./Theme";

export const useTheme = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, toggleTheme };
};

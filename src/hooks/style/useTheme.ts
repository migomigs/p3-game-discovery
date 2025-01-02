import { useEffect, useState } from "react";

export enum AppTheme {
  dark = "dark",
  light = "light",
}

const useTheme = () => {
  const [theme, setTheme] = useState<AppTheme>(AppTheme.light);

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === AppTheme.light) {
      setTheme(AppTheme.dark);
    } else {
      setTheme(AppTheme.light);
    }
  };

  return { theme, setTheme, toggleTheme };
};

export default useTheme;

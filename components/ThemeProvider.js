"use client";

import { createContext, useContext, useState, useEffect } from "react";

const THEMES = [
  { id: "midnight", label: "🌙 Midnight", emoji: "🌙" },
  { id: "ocean", label: "🌊 Ocean", emoji: "🌊" },
  { id: "forest", label: "🌿 Forest", emoji: "🌿" },
  { id: "sunset", label: "🌅 Sunset", emoji: "🌅" },
  { id: "light", label: "☀️ Light", emoji: "☀️" },
];

const ThemeContext = createContext({
  theme: "midnight",
  setTheme: () => {},
  themes: THEMES,
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("midnight");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("prabas-theme");
    if (saved && THEMES.find((t) => t.id === saved)) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("prabas-theme", theme);
    }
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

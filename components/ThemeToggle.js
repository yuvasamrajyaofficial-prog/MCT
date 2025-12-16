"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={styles.toggleButton}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className={styles.iconSun} />
      ) : (
        <Moon size={20} className={styles.iconMoon} />
      )}
    </button>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Palette } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blog" },
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const { theme, setTheme, themes } = useTheme();
  const pathname = usePathname();
  const themeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (themeRef.current && !themeRef.current.contains(e.target)) {
        setThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>P</span>
          <span className={styles.logoText}>PraBaS Digital</span>
        </Link>

        {/* Desktop nav */}
        <div className={styles.rightSection}>
          <ul className={styles.desktopLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <div className={styles.themeWrapper} ref={themeRef}>
            <button
              className={styles.themeBtn}
              onClick={() => setThemeOpen(!themeOpen)}
              aria-label="Change theme"
            >
              <Palette size={18} />
            </button>
            <AnimatePresence>
              {themeOpen && (
                <motion.div
                  className={styles.themeDropdown}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      className={`${styles.themeOption} ${theme === t.id ? styles.themeActive : ""}`}
                      onClick={() => { setTheme(t.id); setThemeOpen(false); }}
                    >
                      <span>{t.emoji}</span>
                      <span>{t.label.split(" ").slice(1).join(" ")}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile toggle */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className={styles.mobileLinks}>
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile theme options */}
            <div className={styles.mobileThemes}>
              {themes.map((t) => (
                <button
                  key={t.id}
                  className={`${styles.mobileThemeBtn} ${theme === t.id ? styles.themeActive : ""}`}
                  onClick={() => { setTheme(t.id); setMenuOpen(false); }}
                >
                  {t.emoji}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

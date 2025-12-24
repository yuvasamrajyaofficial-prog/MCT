"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import styles from "./BackButton.module.css";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Only show on sub-pages (not home page)
  const isHome = pathname === "/";

  return (
    <AnimatePresence>
      {!isHome && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push("/")}
          className={styles.backBtn}
          aria-label="Back to Home"
        >
          <ArrowLeft size={24} />
          <span className={styles.text}>Home</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>MCT</h3>
            <p className={styles.quote}>&quot;Malola Cosmic Technologies - Transcending through Technology.&quot;</p>
          </div>

          <div className={styles.links}>
            <div className={styles.column}>
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/team">Team</Link>
              <Link href="/careers">Careers (Remote First)</Link>
              <Link href="/sitemap.xml">Sitemap</Link>
            </div>
            <div className={styles.column}>
              <h4>Connect</h4>
              <div className={styles.socials}>
                <a href="https://github.com/prashant13-bh" target="_blank" aria-label="Personal GitHub"><Github size={20} /></a>
                <a href="https://github.com/yuvasamrajyaofficial-prog" target="_blank" aria-label="Organization GitHub"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/prashant-hiremath-13pbh" target="_blank" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="mailto:ph293815@gmail.com" aria-label="Email"><Mail size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2025 MCT - Malola Cosmic Technologies | Established in India.</p>
        </div>
      </div>
    </footer>
  );
}

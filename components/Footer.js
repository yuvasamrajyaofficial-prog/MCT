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
            <h3 className={styles.logo}>PraBaS & Co.</h3>
            <p className={styles.quote}>&quot;Guided by Paramananda. Driven by Logic.&quot;</p>
          </div>

          <div className={styles.links}>
            <div className={styles.column}>
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/careers">Careers (Remote First)</Link>
              <Link href="/investors">Investors</Link>
            </div>
            <div className={styles.column}>
              <h4>Connect</h4>
              <div className={styles.socials}>
                <a href="#" aria-label="GitHub"><Github size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="mailto:contact@prabas.co" aria-label="Email"><Mail size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2025 PraBaS & Co. | Established in India.</p>
        </div>
      </div>
    </footer>
  );
}

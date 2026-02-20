"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Prabas Digital</h3>
            <p className={styles.quote}>&quot;Empowering businesses to thrive in the digital ecosystem through creative strategy and technical excellence.&quot;</p>
          </div>

          <div className={styles.links}>
            <div className={styles.column}>
              <h4>Company</h4>
              <Link href="/about">About Us</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/team">Team</Link>
              <Link href="/careers">Careers</Link>
            </div>
            <div className={styles.column}>
              <h4>Legal</h4>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-service">Terms of Service</Link>
              <Link href="/refund-policy">Refund Policy</Link>
            </div>
            <div className={styles.column}>
              <h4>Connect</h4>
              <div className={styles.socials}>
                <a href="https://github.com/prashant13-bh" target="_blank" aria-label="Personal GitHub"><Github size={18} /></a>
                <a href="https://github.com/yuvasamrajyaofficial-prog" target="_blank" aria-label="Organization GitHub"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/prashant-hiremath-13pbh" target="_blank" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="mailto:ph293815@gmail.com" aria-label="Email"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Prabas Digital | Established in India.</p>
        </div>
      </div>
    </footer>
  );
}

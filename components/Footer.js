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
            <h3 className={styles.logo}>Malola Cosmic Tech</h3>
            <p className={styles.quote}>&quot;Transcending the frontiers of enterprise commerce, spatial 3D systems, and intelligent AI ecosystems.&quot;</p>
          </div>

          <div className={styles.links}>
            <div className={styles.column}>
              <h4>Ventures & Tech</h4>
              <Link href="/products/mct-retail">MCT Retail OS</Link>
              <Link href="/investors" style={{ color: "#38bdf8", fontWeight: 700 }}>Seed Round ⚡</Link>
              <Link href="/products">Tech Portfolio</Link>
              <Link href="/products/malola">Malola AI</Link>
              <Link href="https://mct-retail-production.up.railway.app/" target="_blank">Live POS Demo ↗</Link>
            </div>
            <div className={styles.column}>
              <h4>Company</h4>
              <Link href="/about">About MCT</Link>
              <Link href="/team">Leadership & Team</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/blogs">Insights & Blog</Link>
              <Link href="/admin" style={{ opacity: 0.75, fontSize: "0.85rem" }}>Admin Console 🔒</Link>
            </div>
            <div className={styles.column}>
              <h4>Legal & Policy</h4>
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
                <a href="mailto:contact@malolacosmictech.com" aria-label="Email"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Malola Cosmic Tech (MCT) | Founded by Prashant Hiremath | Made with pride in India.</p>
        </div>
      </div>
    </footer>
  );
}

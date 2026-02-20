"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./Legal.module.css";

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.lastUpdated}
          >
            Last updated: February 20, 2026
          </motion.p>
        </div>
      </section>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.paragraph}>
            Prabas Digital (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <p className={styles.paragraph}>We may collect the following types of information:</p>
          <ul className={styles.list}>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and business details provided through our contact form.</li>
            <li><strong>Service Preferences:</strong> Selected service package and custom requirements shared during enquiry.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on site, browser type, device information, and IP address collected via analytics tools.</li>
            <li><strong>Cookies:</strong> We use essential cookies to enhance your browsing experience and analytics cookies (via Vercel Analytics) for performance insights.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          <ul className={styles.list}>
            <li>To respond to your enquiries and provide requested services.</li>
            <li>To communicate project updates, milestones, and deliverables.</li>
            <li>To improve our website, services, and user experience.</li>
            <li>To send relevant marketing communications (only with your consent).</li>
            <li>To comply with legal obligations under Indian law.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Storage & Security</h2>
          <p className={styles.paragraph}>
            Your contact form submissions are stored securely via Google Sheets with restricted access. We implement industry-standard security measures including HTTPS encryption, secure hosting on Vercel, and access controls to protect your data.
          </p>
          <p className={styles.paragraph}>
            While we strive to protect your personal information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Third-Party Services</h2>
          <p className={styles.paragraph}>We use the following third-party services:</p>
          <ul className={styles.list}>
            <li><strong>Vercel:</strong> Website hosting and analytics.</li>
            <li><strong>Google Apps Script:</strong> Form submission processing.</li>
            <li><strong>WhatsApp Business:</strong> Direct customer communication.</li>
          </ul>
          <p className={styles.paragraph}>
            These services have their own privacy policies. We encourage you to review them.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Rights</h2>
          <p className={styles.paragraph}>Under the Digital Personal Data Protection Act, 2023 (India), you have the right to:</p>
          <ul className={styles.list}>
            <li>Access, correct, or delete your personal data.</li>
            <li>Withdraw consent for data processing at any time.</li>
            <li>File a complaint with the Data Protection Board of India.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Children&apos;s Privacy</h2>
          <p className={styles.paragraph}>
            Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
          <p className={styles.paragraph}>
            We may update this privacy policy from time to time. Changes will be posted on this page with a revised &quot;Last updated&quot; date. Continued use of our website constitutes acceptance of the updated policy.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.paragraph}>
            If you have any questions about this Privacy Policy, please reach out:
          </p>
          <div className={styles.contactInfo}>
            <p><strong>Prabas Digital</strong></p>
            <p>Email: <a href="mailto:ph293815@gmail.com">ph293815@gmail.com</a></p>
            <p>WhatsApp: <a href="https://wa.me/919902857694">+91 99028 57694</a></p>
            <p>Location: Karnataka, India</p>
          </div>
        </div>

        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </motion.div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "../privacy-policy/Legal.module.css";

export default function TermsOfServicePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Terms of Service
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
          <h2 className={styles.sectionTitle}>Agreement to Terms</h2>
          <p className={styles.paragraph}>
            By engaging Prabas Digital (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) for any services or by accessing our website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Services Offered</h2>
          <p className={styles.paragraph}>Prabas Digital provides the following digital services:</p>
          <ul className={styles.list}>
            <li>Website Design &amp; Development (Static, Dynamic, E-Commerce)</li>
            <li>Search Engine Optimization (SEO) &amp; Search Engine Marketing (SEM)</li>
            <li>Social Media Marketing &amp; Management</li>
            <li>Content Creation &amp; Brand Strategy</li>
            <li>Mobile App Development (React Native / Flutter)</li>
            <li>AI Chatbot &amp; Automation Solutions</li>
            <li>WhatsApp Business API Integration</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Scope of Work</h2>
          <p className={styles.paragraph}>
            The exact scope, deliverables, timeline, and pricing for each project will be defined in a separate proposal or agreement shared before work begins. Any work outside the agreed scope may be subject to additional charges.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Payment Terms</h2>
          <ul className={styles.list}>
            <li><strong>One-time projects:</strong> 50% advance before work begins, 50% upon completion and delivery.</li>
            <li><strong>Monthly retainer services:</strong> Payment due within 5 days of invoicing at the start of each billing cycle.</li>
            <li><strong>Accepted methods:</strong> UPI, Bank Transfer (NEFT/IMPS), or other methods agreed in writing.</li>
            <li>All prices are in Indian Rupees (₹) and exclusive of applicable taxes unless stated otherwise.</li>
            <li>Late payments beyond 7 days may result in service suspension.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Intellectual Property</h2>
          <p className={styles.paragraph}>
            Upon full payment, all final deliverables (website code, design files, content) become the property of the client. Prabas Digital retains the right to showcase completed work in our portfolio unless specifically requested otherwise in writing.
          </p>
          <p className={styles.paragraph}>
            Third-party assets (stock images, fonts, plugins) used in your project may be subject to their own licensing terms.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Client Responsibilities</h2>
          <ul className={styles.list}>
            <li>Provide timely and accurate content, branding materials, and feedback.</li>
            <li>Review and approve deliverables within the agreed timeline.</li>
            <li>Ensure any content you provide does not infringe third-party rights.</li>
            <li>Maintain credentials and access to domain registrars, hosting accounts, and social media profiles.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Revisions &amp; Modifications</h2>
          <p className={styles.paragraph}>
            Each service package includes a defined number of revision rounds (typically 2–3). Additional revisions beyond the included rounds will be billed separately at our standard hourly rate.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
          <p className={styles.paragraph}>
            Prabas Digital shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, including but not limited to loss of revenue, data, or business opportunities. Our total liability shall not exceed the total fees paid by the client for the specific service in question.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Termination</h2>
          <p className={styles.paragraph}>
            Either party may terminate the engagement with 15 days written notice. Upon termination, the client shall pay for all work completed up to the termination date. Any advance payments for undelivered work will be handled as per our Refund Policy.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Confidentiality</h2>
          <p className={styles.paragraph}>
            Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the engagement. This obligation survives the termination of the agreement.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Governing Law</h2>
          <p className={styles.paragraph}>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Karnataka, India.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.paragraph}>For any questions regarding these terms:</p>
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

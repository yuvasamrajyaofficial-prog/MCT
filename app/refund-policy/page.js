"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "../privacy-policy/Legal.module.css";

export default function RefundPolicyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Refund &amp; Cancellation Policy
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
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.paragraph}>
            At Prabas Digital, we are committed to delivering quality work. We understand that circumstances may change, and we have structured our refund policy to be fair to both parties. Please read this policy carefully before engaging our services.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>One-Time Project Services</h2>
          <p className={styles.paragraph}>
            For website design, development, and setup services (e.g., Business Starter, E-Commerce Pro, WhatsApp API Setup):
          </p>
          <ul className={styles.list}>
            <li><strong>Before work begins:</strong> Full refund of the advance payment (50%) if cancelled within 48 hours of payment.</li>
            <li><strong>After work has started:</strong> No refund on the advance. We will provide all work completed up to the point of cancellation.</li>
            <li><strong>After first milestone delivery:</strong> No refund is applicable. The remaining 50% is due upon project completion.</li>
            <li><strong>Post-delivery:</strong> No refunds once the final deliverables have been approved and handed over.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Monthly Retainer Services</h2>
          <p className={styles.paragraph}>
            For ongoing services such as SEO, Social Media Marketing, and AI Sales Agent:
          </p>
          <ul className={styles.list}>
            <li>Monthly services are billed at the beginning of each cycle and are <strong>non-refundable</strong> for the current billing period.</li>
            <li>You may cancel the service with 15 days written notice before the next billing cycle. The service will continue until the end of the current paid period.</li>
            <li>If we are unable to deliver the agreed-upon deliverables for a month, a pro-rata credit will be issued towards the next billing cycle.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Domain &amp; Hosting</h2>
          <p className={styles.paragraph}>
            Domain registration and hosting charges (included in some packages) are <strong>non-refundable</strong> once the domain has been registered or hosting has been activated, as these involve third-party costs.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>How to Request a Refund</h2>
          <p className={styles.paragraph}>
            To initiate a refund or cancellation request, please contact us via:
          </p>
          <ul className={styles.list}>
            <li>Email with your project details and reason for cancellation.</li>
            <li>WhatsApp with your registered name and service details.</li>
          </ul>
          <p className={styles.paragraph}>
            We will acknowledge your request within 24 hours and process eligible refunds within 7–10 business days via the original payment method.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Exceptions</h2>
          <ul className={styles.list}>
            <li>Refunds will not be issued for delays caused by the client (e.g., delayed content, feedback, or approvals).</li>
            <li>Custom development work that has been completed and demonstrated is non-refundable.</li>
            <li>If the project scope changes significantly after agreement, revised terms and pricing will apply.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Dispute Resolution</h2>
          <p className={styles.paragraph}>
            If you are unsatisfied with our services, we encourage you to reach out to us first. We believe in resolving disputes amicably. If an agreement cannot be reached, disputes will be subject to the jurisdiction of courts in Karnataka, India.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.paragraph}>For refund requests or questions about this policy:</p>
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

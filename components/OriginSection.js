"use client";

import styles from "./OriginSection.module.css";

export default function OriginSection() {
  return (
    <section className={styles.origin}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          {/* Placeholder for Father's Photo */}
          <div className={styles.placeholderImage}>
            <span className={styles.placeholderText}>Legacy Image</span>
          </div>
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>The Origin</h2>
          <p className={styles.text}>
            &quot;PraBaS is not just a company; it is a promise. Founded by Prashant Hiremath, it carries the resilient DNA of Basayya and the vision of Neelaganga Agro. We combine the hard work of the past with the smart strategy of the future.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import styles from "./OriginSection.module.css";

export default function OriginSection() {
  return (
    <section className={styles.origin}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          <Image 
            src="/images/legacy-image.png" 
            alt="Legacy of Basayya - The Origin" 
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
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

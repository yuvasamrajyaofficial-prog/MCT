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
            alt="Legacy of Basayya" 
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>The Origin</h2>
          <p className={styles.text}>
            &quot;MCT is not just a company; it is a cosmic mission. Founded by Prashant Hiremath, Malola Cosmic Technologies transcends traditional boundaries to merge ancient wisdom with cutting-edge AI, creating pathways to mental wellness and human potential.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}

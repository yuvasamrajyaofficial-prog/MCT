"use client";

import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.contact}>
      <div className="container">
        <h2 className={styles.heading}>Connect with Us</h2>
        <div className={styles.wrapper}>
          <form className={styles.form}>
            <div className={styles.group}>
              <input type="text" placeholder="Your Name" className={styles.input} required />
            </div>
            <div className={styles.group}>
              <input type="email" placeholder="Your Email" className={styles.input} required />
            </div>
            <div className={styles.group}>
              <textarea placeholder="Your Message" rows="5" className={styles.textarea} required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

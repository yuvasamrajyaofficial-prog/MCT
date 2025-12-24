"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // User will need to replace this

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <h2 className={styles.heading}>Connect with Us</h2>
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.group}>
              <input type="text" name="name" placeholder="Your Name" className={styles.input} required />
            </div>
            <div className={styles.group}>
              <input type="email" name="email" placeholder="Your Email" className={styles.input} required />
            </div>
            <div className={styles.group}>
              <textarea name="message" placeholder="Your Message" rows="5" className={styles.textarea} required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
            
            {status === "success" && (
              <p className={styles.successMsg}>Thank you! Your message has been sent.</p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg}>Oops! Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

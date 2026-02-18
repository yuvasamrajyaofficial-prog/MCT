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

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycby0H7QhKhqCpu-ZMTO0q7kC77SiuurbE5feLgY0QQtrgneCw2JizOIRiVCMYY4HEPlJ0w/exec", {
        method: "POST",
        body: formData,
        mode: "no-cors" // Apps Script requires no-cors for simple POST redirects
      });

      // Since no-cors doesn't return a readable response, we assume success if no error is thrown
      setStatus("success");
      e.target.reset();
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.heading}>Connect with Us</h2>
        <div className={styles.wrapper}>
          <div className={styles.contactInfo} style={{ marginBottom: "2rem", textAlign: "center", color: "#cbd5e1" }}>
            <p>Ready to grow? Chat with us directly.</p>
            <a 
              href="https://wa.me/919902857694" 
              target="_blank" 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "0.5rem", 
                color: "#22c55e", 
                fontWeight: "bold", 
                fontSize: "1.1rem",
                marginTop: "0.5rem",
                textDecoration: "none"
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>📱</span> +91 99028 57694
            </a>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.group}>
              <input type="text" name="name" placeholder="Your Name" className={styles.input} required />
            </div>
            <div className={styles.group}>
              <input type="email" name="email" placeholder="Your Email" className={styles.input} required />
            </div>
            <div className={styles.group}>
              <input type="tel" name="phone" placeholder="Phone Number" className={styles.input} required />
            </div>
            <div className={styles.group}>
              <select name="service" className={styles.input} required defaultValue="">
                <option value="" disabled>Select a Service Package</option>
                <option value="Business Starter Website (₹14,999)">Business Starter Website (₹14,999)</option>
                <option value="E-Commerce Website (₹29,999)">E-Commerce Website (₹29,999)</option>
                <option value="Local SEO Lite (₹7,999/mo)">Local SEO Lite (₹7,999/mo)</option>
                <option value="Social Growth Pro (₹12,999/mo)">Social Growth Pro (₹12,999/mo)</option>
                <option value="Market Dominator (₹19,999/mo)">Market Dominator (₹19,999/mo)</option>
                <option value="WhatsApp API Setup (₹4,999)">WhatsApp API Setup (₹4,999)</option>
                <option value="AI Sales Agent (₹9,999/mo)">AI Sales Agent (₹9,999/mo)</option>
                <option value="Custom Requirement">Custom Requirement</option>
              </select>
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

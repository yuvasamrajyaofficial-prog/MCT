"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";

const SERVICES = [
  { label: "Business Starter Website", price: "₹14,999", type: "one-time" },
  { label: "E-Commerce Website", price: "₹29,999", type: "one-time" },
  { label: "Local SEO Lite", price: "₹7,999/mo", type: "monthly" },
  { label: "Social Growth Pro", price: "₹12,999/mo", type: "monthly" },
  { label: "Market Dominator", price: "₹19,999/mo", type: "monthly" },
  { label: "WhatsApp API Setup", price: "₹4,999", type: "one-time" },
  { label: "AI Sales Agent", price: "₹9,999/mo", type: "monthly" },
  { label: "Custom Requirement", price: "Let's Talk", type: "custom" },
];

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    // Only allow digits, max 10
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedService) {
      alert("Please select a service package.");
      return;
    }
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    formData.set("phone", "+91" + phone);
    formData.set("service", selectedService);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby0H7QhKhqCpu-ZMTO0q7kC77SiuurbE5feLgY0QQtrgneCw2JizOIRiVCMYY4HEPlJ0w/exec",
        { method: "POST", body: formData, mode: "no-cors" }
      );
      setStatus("success");
      e.target.reset();
      setPhone("");
      setSelectedService("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.subheading}>
          Choose a service and we&apos;ll reach out within 24 hours.
        </p>

        <div className={styles.wrapper}>
          {/* WhatsApp CTA */}
          <div className={styles.waBar}>
            <span>💬 Prefer instant reply?</span>
            <a
              href="https://wa.me/919902857694"
              target="_blank"
              className={styles.waLink}
            >
              Chat on WhatsApp &rarr; +91 99028 57694
            </a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Name + Email row */}
            <div className={styles.row}>
              <div className={styles.group}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.group}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  className={styles.input}
                  required
                />
              </div>
            </div>

            {/* Phone with +91 prefix */}
            <div className={styles.group}>
              <div className={styles.phoneWrapper}>
                <span className={styles.phonePrefix}>🇮🇳 +91</span>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="10-digit Mobile Number *"
                  className={styles.phoneInput}
                  required
                  maxLength={10}
                  pattern="\d{10}"
                />
              </div>
              {phone.length > 0 && phone.length < 10 && (
                <p className={styles.fieldHint}>
                  {10 - phone.length} more digits needed
                </p>
              )}
            </div>

            {/* Service Selector — Visual Cards */}
            <div className={styles.group}>
              <p className={styles.serviceLabel}>Select a Service *</p>
              <div className={styles.serviceGrid}>
                {SERVICES.map((svc) => {
                  const val = `${svc.label} (${svc.price})`;
                  return (
                    <button
                      type="button"
                      key={svc.label}
                      onClick={() => setSelectedService(val)}
                      className={`${styles.serviceCard} ${
                        selectedService === val ? styles.serviceCardActive : ""
                      }`}
                    >
                      <span className={styles.serviceName}>{svc.label}</span>
                      <span className={styles.servicePrice}>{svc.price}</span>
                    </button>
                  );
                })}
              </div>
              {/* Hidden input to carry selected service in FormData */}
              <input type="hidden" name="service" value={selectedService} readOnly />
            </div>

            {/* Message */}
            <div className={styles.group}>
              <textarea
                name="message"
                placeholder="Tell us about your business (optional)"
                rows="4"
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Sending..." : "🚀 Send My Enquiry"}
            </button>

            {status === "success" && (
              <p className={styles.successMsg}>
                ✅ Thank you! We&apos;ll contact you within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg}>
                ❌ Something went wrong. Please WhatsApp us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

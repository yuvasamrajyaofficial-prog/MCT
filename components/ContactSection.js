"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";

const SERVICES = [
  { label: "MCT Retail — Seed Round / Investor Inquiry", price: "Seed Round ($350K)", type: "investment" },
  { label: "MCT Retail — Merchant POS Pilot Demo", price: "Complimentary Pilot", type: "retail" },
  { label: "MCT Retail — Single Store Deployment", price: "₹1,999/mo", type: "retail" },
  { label: "MCT Retail — Multi-Store Pro Outlets", price: "₹4,999/mo", type: "retail" },
  { label: "Applied AI & Malola Platform Partnership", price: "Strategic", type: "ai" },
  { label: "Custom Deep Tech / Enterprise R&D", price: "Custom Scope", type: "custom" },
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
    const fullPhone = "+91" + phone;
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message") || "";

    formData.set("phone", fullPhone);
    formData.set("service", selectedService);

    try {
      // 1. Save to internal database so it appears in Admin Dashboard
      await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: fullPhone,
          service: selectedService,
          message,
        }),
      });

      // 2. Also forward to Google Apps Script backup
      fetch(
        "https://script.google.com/macros/s/AKfycby0H7QhKhqCpu-ZMTO0q7kC77SiuurbE5feLgY0QQtrgneCw2JizOIRiVCMYY4HEPlJ0w/exec",
        { method: "POST", body: formData, mode: "no-cors" }
      ).catch((err) => console.warn("Google Script sync warning:", err));

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
        <h2 className={styles.heading}>Connect with Malola Cosmic Tech</h2>
        <p className={styles.subheading}>
          Whether you are an angel investor exploring our Seed Round or a merchant seeking zero-downtime 3D POS infrastructure, let&apos;s build the future together.
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

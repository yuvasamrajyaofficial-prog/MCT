"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, CheckCircle2, Sparkles, Briefcase, Mail, Phone, User, Globe, FileText } from "lucide-react";
import styles from "./Careers.module.css";

const JOBS = [
  {
    id: "ai-researcher",
    title: "AI Research Scientist",
    type: "Remote • Full-time",
    desc: "Lead our research initiatives in generative AI and neural networks. Build AI solutions for real-world business problems.",
  },
  {
    id: "fullstack-eng",
    title: "Senior Full Stack Engineer",
    type: "Remote • Full-time",
    desc: "Build scalable web applications using Next.js, React, and modern cloud infrastructure for our client projects.",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Specialist",
    type: "Remote • Full-time",
    desc: "Drive growth through SEO, social media, and paid advertising campaigns for businesses across multiple industries.",
  },
  {
    id: "uiux-designer",
    title: "UI/UX Designer",
    type: "Remote • Contract",
    desc: "Craft intuitive and beautiful interfaces for web and mobile apps. Experience with Figma and design systems required.",
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "1-3 years",
    portfolio: "",
    skills: "",
    resumeNote: "",
  });

  const handleOpenModal = (jobTitle) => {
    setSelectedJob(jobTitle);
    setSubmitted(false);
    setErrorMsg("");
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setSubmitted(false);
    setErrorMsg("");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      experience: "1-3 years",
      portfolio: "",
      skills: "",
      resumeNote: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: selectedJob,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone ? `+91${formData.phone.replace(/\D/g, "").slice(0, 10)}` : "",
          experience: formData.experience,
          portfolio: formData.portfolio,
          skills: formData.skills,
          resumeNote: formData.resumeNote,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }

      setSubmitted(true);
    } catch (err) {
      setErrorMsg(err.message || "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className={styles.main}>
      <section className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.content}
        >
          <h1 className={styles.title}>Join the <span className="text-gradient">Revolution</span></h1>
          <p className={styles.subtitle}>
            We&apos;re a remote-first team building the future with AI. We value passion, creativity, and the drive to create meaningful impact for businesses across India.
          </p>

          {/* Perks */}
          <div className={styles.perksGrid}>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>🏠</div>
              <div className={styles.perkTitle}>Remote First</div>
              <div className={styles.perkDescription}>Work from anywhere in India</div>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>🚀</div>
              <div className={styles.perkTitle}>Fast Growth</div>
              <div className={styles.perkDescription}>Learn cutting-edge AI tools</div>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>💰</div>
              <div className={styles.perkTitle}>Fair Pay</div>
              <div className={styles.perkDescription}>Competitive compensation</div>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>🎯</div>
              <div className={styles.perkTitle}>Real Impact</div>
              <div className={styles.perkDescription}>Work on live client projects</div>
            </div>
          </div>
          
          {/* Jobs */}
          <div className={styles.jobsGrid}>
            {JOBS.map((job, idx) => (
              <motion.div 
                key={job.id}
                className={styles.jobCard} 
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <p className={styles.jobType}>{job.type}</p>
                <p className={styles.jobDesc}>{job.desc}</p>
                <button 
                  className={styles.applyBtn}
                  onClick={() => handleOpenModal(job.title)}
                >
                  Apply Now &rarr;
                </button>
              </motion.div>
            ))}
          </div>

          <div className={styles.cta}>
            <p>
              Don&apos;t see a role that fits? We&apos;re always scouting exceptional talent.{" "}
              <button 
                type="button"
                onClick={() => handleOpenModal("General Open Application")}
                className={styles.contactLink}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1rem" }}
              >
                Apply as General Talent &rarr;
              </button>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className={styles.modalBackdrop} onClick={handleCloseModal}>
            <motion.div 
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.modalClose} onClick={handleCloseModal} aria-label="Close modal">
                <X size={18} />
              </button>

              {!submitted ? (
                <>
                  <div className={styles.modalHeader}>
                    <span className={styles.modalRoleTag}>
                      <Briefcase size={12} style={{ display: "inline", marginRight: "4px" }} />
                      {selectedJob}
                    </span>
                    <h2 className={styles.modalTitle}>Join PraBaS Digital</h2>
                    <p className={styles.modalSubtitle}>
                      Submit your profile below. Our engineering & leadership team reviews every application.
                    </p>
                  </div>

                  <form className={styles.formGrid} onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          className={styles.input}
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="rahul@domain.com"
                          className={styles.input}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Phone Number</label>
                        <div className={styles.phoneGroup}>
                          <span className={styles.phonePrefix}>🇮🇳 +91</span>
                          <input
                            type="tel"
                            placeholder="10-digit number"
                            className={styles.phoneInput}
                            maxLength={10}
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                          />
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label}>Experience Level *</label>
                        <select
                          className={styles.select}
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        >
                          <option value="Fresher / Student">Fresher / Student (0 yrs)</option>
                          <option value="1-3 years">Junior / Mid (1 - 3 yrs)</option>
                          <option value="3-5 years">Senior (3 - 5 yrs)</option>
                          <option value="5+ years">Lead / Principal (5+ yrs)</option>
                        </select>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Portfolio / GitHub / LinkedIn URL</label>
                      <input
                        type="url"
                        placeholder="https://github.com/your-username or portfolio URL"
                        className={styles.input}
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Core Skills & Technologies</label>
                      <input
                        type="text"
                        placeholder="e.g. Next.js, PyTorch, Figma, SEO, TypeScript"
                        className={styles.input}
                        value={formData.skills}
                        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>Brief Pitch / Highlights</label>
                      <textarea
                        rows="3"
                        placeholder="Tell us what you've built, open-source work, or why you want to build with us..."
                        className={styles.textarea}
                        value={formData.resumeNote}
                        onChange={(e) => setFormData({ ...formData, resumeNote: e.target.value })}
                      />
                    </div>

                    {errorMsg && (
                      <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "4px" }}>
                        ⚠️ {errorMsg}
                      </p>
                    )}

                    <button type="submit" className={styles.submitBtn} disabled={submitting}>
                      {submitting ? "Submitting Application..." : "🚀 Submit Application"}
                    </button>
                  </form>
                </>
              ) : (
                <div className={styles.successBox}>
                  <div className={styles.successIcon}>🎉</div>
                  <h3 className={styles.successTitle}>Application Received!</h3>
                  <p className={styles.successDesc}>
                    Thank you, <strong>{formData.fullName}</strong>. Your profile for{" "}
                    <strong>{selectedJob}</strong> has been logged directly into our recruitment pipeline.
                    We will be in touch shortly!
                  </p>
                  <button className={styles.submitBtn} onClick={handleCloseModal} style={{ width: "auto", padding: "10px 28px" }}>
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SanctumInterface.module.css";

const guides = ["Krishna", "Jesus", "Quranic Wisdom", "Buddha", "Guru Nanak", "Torah Wisdom", "Marcus Aurelius", "Shiva"];

const responses = {
  Krishna: "Set thy heart upon thy work, but never on its reward. (Gita 2.47)",
  Jesus: "Peace I leave with you; my peace I give you. (John 14:27)",
  "Quranic Wisdom": "Allah does not burden a soul beyond that it can bear. (Surah Al-Baqarah 2:286)",
  Buddha: "Peace comes from within. Do not seek it without.",
  "Guru Nanak": "He who regards all men as equals is religious. (Guru Granth Sahib)",
  "Torah Wisdom": "A soft answer turns away wrath, but a harsh word stirs up anger. (Proverbs 15:1)",
  "Marcus Aurelius": "You have power over your mind - not outside events. Realize this, and you will find strength.",
  Shiva: "When you understand the temporary nature of all things, you will find peace.",
};

export default function SanctumInterface() {
  const [selectedGuide, setSelectedGuide] = useState("Krishna");
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input) return;
    const userMsg = { role: "user", text: input };
    setChat((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const guideMsg = { role: "guide", text: responses[selectedGuide] || "Peace be with you." };
      setChat((prev) => [...prev, guideMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className={styles.sanctum}>
      <div className={styles.overlay}></div>
      <div className="container">
        <h2 className={styles.heading}>The Sanctum</h2>
        
        <div className={styles.guideSelector}>
          <p className={styles.label}>Select your Guide:</p>
          <div className={styles.guides}>
            {guides.map((guide) => (
              <button
                key={guide}
                className={`${styles.guideBtn} ${selectedGuide === guide ? styles.activeGuide : ""}`}
                onClick={() => setSelectedGuide(guide)}
              >
                {guide}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.interface}>
          <div className={styles.scrollContent}>
            <AnimatePresence>
              {chat.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${styles.message} ${msg.role === "user" ? styles.userMsg : styles.guideMsg}`}
                >
                  <span className={styles.role}>{msg.role === "user" ? "You" : selectedGuide}:</span>
                  <p>{msg.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
            {isTyping && <div className={styles.typingIndicator}>The Divine is contemplating...</div>}
            {chat.length === 0 && (
              <div className={styles.emptyState}>
                <p>Seek guidance. Type &quot;I am feeling lost today.&quot;</p>
              </div>
            )}
          </div>

          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pour your heart out..."
              className={styles.input}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className={styles.sendBtn}>
              Pray
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

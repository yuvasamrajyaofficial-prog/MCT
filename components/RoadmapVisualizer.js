"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./RoadmapVisualizer.module.css";

const tabs = ["Students", "Colleges", "Employers"];

const roadmapSteps = [
  { id: 1, label: "Learn Python", x: 0, y: 0 },
  { id: 2, label: "Learn SQL", x: 200, y: 50 },
  { id: 3, label: "Build Portfolio", x: 400, y: 0 },
  { id: 4, label: "Internship", x: 600, y: 50 },
];

export default function RoadmapVisualizer() {
  const [activeTab, setActiveTab] = useState("Students");
  const [query, setQuery] = useState("");
  const [showRoadmap, setShowRoadmap] = useState(false);

  const handleSimulate = () => {
    if (!query) return;
    setShowRoadmap(false);
    setTimeout(() => setShowRoadmap(true), 100);
  };

  return (
    <section className={styles.visualizer}>
      <div className="container">
        <h2 className={styles.heading}>AI Roadmap Visualizer</h2>
        
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              For {tab}
            </button>
          ))}
        </div>

        <div className={styles.demoArea}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="e.g., I want to be a Data Scientist"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.input}
            />
            <button onClick={handleSimulate} className={styles.generateBtn}>
              Generate Path
            </button>
          </div>

          {showRoadmap && (
            <div className={styles.roadmapContainer}>
              <svg className={styles.svgOverlay}>
                <motion.path
                  d="M 50 50 C 150 50, 150 100, 250 100 S 350 50, 450 50 S 550 100, 650 100"
                  fill="transparent"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
              
              {roadmapSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={styles.stepNode}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.5, duration: 0.5 }}
                  style={{ left: `${index * 25}%`, top: index % 2 === 0 ? '20%' : '60%' }}
                >
                  <div className={styles.nodeCircle}></div>
                  <span className={styles.nodeLabel}>{step.label}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

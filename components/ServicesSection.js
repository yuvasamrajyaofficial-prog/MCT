"use client";

import { motion } from "framer-motion";
import { 
  Store,
  Box,
  BrainCircuit, 
  Cpu,
  Layers,
  ShieldCheck
} from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: <Store size={36} color="#06b6d4" />,
    title: "MCT Retail OS & 3D POS",
    description: "Our flagship retail infrastructure. 100% offline-operable POS, sub-50ms barcode checkout, multi-store stock sync, and GST compliance."
  },
  {
    icon: <Box size={36} color="#8b5cf6" />,
    title: "Spatial WebGL & 3D Commerce",
    description: "Hardware-accelerated 3D floor planning, interactive spatial aisle navigation, and visual merchandising telemetry."
  },
  {
    icon: <BrainCircuit size={36} color="#ec4899" />,
    title: "Cognitive AI & Cultural Tech",
    description: "Proprietary conversational AI models integrating cultural wisdom (Malola AI) and voice-first companion intelligence (LOLA AI)."
  },
  {
    icon: <Cpu size={36} color="#f59e0b" />,
    title: "Resilient Offline-First Systems",
    description: "Mission-critical architectures engineered with Service Workers, CacheStorage, and background sync to eliminate cloud outage downtime."
  },
  {
    icon: <Layers size={36} color="#10b981" />,
    title: "High-Throughput Cloud & APIs",
    description: "Distributed microservices, real-time inventory event streaming, and high-concurrency relational data pipelines."
  },
  {
    icon: <ShieldCheck size={36} color="#3b82f6" />,
    title: "Biometric Security & Hardware Interop",
    description: "Plug-and-play terminal hardware integration (scanners, thermal printers) paired with zero-knowledge biometric verification (VaultCam)."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span style={{
            fontSize: "0.75rem",
            color: "#38bdf8",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase"
          }}>
            ENGINEERING CAPABILITIES
          </span>
          <h2 className={styles.title} style={{ marginTop: "6px" }}>Core Technology Pillars</h2>
          <p className={styles.subtitle}>
            From high-resilience retail operating systems to spatial 3D interfaces and applied AI, we engineer technology that performs under real-world pressure.
          </p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} className={styles.card} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

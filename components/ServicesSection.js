"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Code, 
  PenTool, 
  Smartphone, 
  BrainCircuit, 
  Megaphone,
  Users,
  Mail,
  Palette
} from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: <Search size={40} />,
    title: "SEO & SEM",
    description: "Dominate Google rankings with data-driven SEO and targeted PPC campaigns."
  },
  {
    icon: <Megaphone size={40} />,
    title: "Social Media Marketing",
    description: "End-to-end management for Instagram, Facebook, and Twitter to build loyal communities."
  },
  {
    icon: <Users size={40} />, // Need to import Users
    title: "LinkedIn Personal Branding",
    description: "Position yourself as an industry thought leader with optimized profiles and ghostwriting."
  },
  {
    icon: <Code size={40} />,
    title: "Web Design & Dev",
    description: "Stunning, high-performance websites built with Next.js and React for maximum conversion."
  },
  {
    icon: <PenTool size={40} />,
    title: "Content Writing",
    description: "SEO-optimized blogs, convincing copy, and whitepapers that drive authority and sales."
  },
  {
    icon: <Smartphone size={40} />,
    title: "App Development",
    description: "Native and cross-platform mobile apps (React Native/Flutter) for iOS and Android."
  },
  {
    icon: <BrainCircuit size={40} />,
    title: "AI Automation",
    description: "Custom chatbots and workflow automations to save time and reduce operational costs."
  },
  {
    icon: <Mail size={40} />, // Need to import Mail
    title: "Email Marketing",
    description: "High-converting newsletters and automated drip campaigns to nurture your leads."
  },
  {
    icon: <Palette size={40} />, // Need to import Palette
    title: "Creative Design",
    description: "Logo design, branding kits, and social media graphics that make your brand reference."
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
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Comprehensive digital solutions to help your business grow and thrive in the modern age.
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

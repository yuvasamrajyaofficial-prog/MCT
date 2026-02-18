"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Code, 
  PenTool, 
  Smartphone, 
  BrainCircuit, 
  Megaphone
} from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: <Search size={40} />,
    title: "SEO & SEM",
    description: "Boost your visibility on Google with data-driven SEO strategies and targeted ad campaigns."
  },
  {
    icon: <Megaphone size={40} />,
    title: "Social Media Marketing",
    description: "Engage your audience and build brand loyalty across Instagram, LinkedIn, and Facebook."
  },
  {
    icon: <Code size={40} />,
    title: "Web Development",
    description: "Custom websites built with Next.js and React for speed, improved SEO, and scalability."
  },
  {
    icon: <PenTool size={40} />,
    title: "Content & Branding",
    description: "Compelling storytelling and visual identity design that resonates with your target market."
  },
  {
    icon: <Smartphone size={40} />,
    title: "App Development",
    description: "Native and cross-platform mobile apps (React Native/Flutter) for iOS and Android."
  },
  {
    icon: <BrainCircuit size={40} />,
    title: "AI Solutions",
    description: "Integrate AI chatbots and automation to streamline customer service and operations."
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

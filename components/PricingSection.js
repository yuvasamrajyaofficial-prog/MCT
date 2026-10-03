"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Smartphone, Globe, BarChart3, Bot, MessageCircle, PenTool, Linkedin, Mail } from "lucide-react";
import styles from "./PricingSection.module.css";

const categories = [
  { id: "retail", label: "MCT Retail OS", icon: <Globe size={18} /> },
  { id: "custom", label: "Enterprise POS & Cloud", icon: <BarChart3 size={18} /> },
  { id: "ai", label: "Applied AI & Custom Dev", icon: <Bot size={18} /> },
];

const pricingData = {
  retail: [
    {
      title: "Starter Store",
      price: "₹1,999",
      period: "/month",
      description: "Ideal for single-location retail shops, boutiques, and pharmacies.",
      popular: false,
      features: [
        "Single Terminal POS (Offline-First PWA)",
        "Sub-50ms Barcode Checkout Latency",
        "Up to 5,000 SKUs Managed",
        "Instant GST Digital & Thermal Invoices",
        "UPI, Card & Cash Split Tenders",
        "Automated Cloud Sync on Reconnect"
      ],
      cta: "Deploy Starter Store",
      message: "Hi, I am interested in deploying MCT Retail Starter Store for my shop."
    },
    {
      title: "Multi-Store Pro",
      price: "₹4,999",
      period: "/month",
      popular: true,
      description: "Designed for high-traffic supermarkets and multi-branch retail outlets.",
      features: [
        "Up to 5 Synchronized Terminals",
        "Interactive 3D Floor Plan Store Map",
        "Multi-Location Stock Transfer & Heatmaps",
        "Unlimited SKUs & Automated Reordering Alerts",
        "Live Executive Margin & Cashier Telemetry",
        "Priority 24/7 Deployment & Hardware Support"
      ],
      cta: "Launch Multi-Store Pro",
      message: "Hi, I want to upgrade to MCT Retail Multi-Store Pro for my outlets."
    },
    {
      title: "Enterprise Chain",
      price: "₹14,999",
      period: "/month",
      description: "For regional supermarket chains and enterprise retail franchises.",
      popular: false,
      features: [
        "Unlimited Terminals & Warehouse Clusters",
        "Dedicated Private Cloud / Railway Instance",
        "Custom ERP, SAP & Tally API Connectors",
        "Custom Hardware Integration (Weighing Scales, RFID)",
        "Zero-Downtime High-Concurrency Engine",
        "Dedicated Solution Architect & SLA"
      ],
      cta: "Inquire Enterprise",
      message: "Hi, I represent an enterprise retail chain and want to discuss custom MCT Retail licensing."
    }
  ],
  custom: [
    {
      title: "POS Migration & Setup",
      price: "₹19,999",
      period: "one-time",
      description: "Complete migration from legacy POS systems to MCT Retail.",
      popular: false,
      features: [
        "Legacy SKU & Catalog Data Import",
        "Barcode System Setup & Printer Testing",
        "Staff Training (Cashiers & Store Managers)",
        "Local Network & PWA Offline Configuration",
        "GST Profile & HSN Code Setup",
        "30 Days Dedicated Launch Support"
      ],
      cta: "Book Migration",
      message: "Hi, I want help migrating my store's legacy POS to MCT Retail."
    },
    {
      title: "3D Floor Map Digitization",
      price: "₹29,999",
      period: "per facility",
      popular: true,
      description: "Convert your physical store floor plan into an interactive 3D WebGL map.",
      features: [
        "3D Architectural Shelf & Aisle Modeling",
        "WebGL Hardware-Accelerated Rendering",
        "Zone-Based Cashier Navigation",
        "Stock Depletion Visual Heatmap",
        "Mobile & Desktop Tablet Responsive",
        "Periodic Layout Update Support"
      ],
      cta: "Digitize Store Map",
      message: "Hi, I want a 3D floor map modeled for my store in MCT Retail."
    },
    {
      title: "Custom Cloud Infrastructure",
      price: "₹49,999",
      period: "starts from",
      description: "Enterprise private cloud cluster with zero-trust security and SLA.",
      popular: false,
      features: [
        "Dedicated Multi-Region Database Cluster",
        "Real-Time WebSocket Transaction Stream",
        "Automated Hourly Cloud Backups",
        "99.99% Uptime Service Level Agreement",
        "Enterprise Role-Based Access Controls",
        "Custom Security Audits & Compliance"
      ],
      cta: "Consult Infrastructure",
      message: "Hi, I want to discuss custom cloud infrastructure for enterprise retail."
    }
  ],
  ai: [
    {
      title: "Retail Demand AI",
      price: "₹9,999",
      period: "/month",
      description: "AI-driven stock replenishment and consumer purchase prediction.",
      popular: false,
      features: [
        "Automated Stock Depletion Prediction",
        "Seasonal Demand Trend Forecasting",
        "Dead Stock & Wastage Reduction Alerts",
        "Supplier Purchase Order Generation",
        "Weekly Profit Optimization Insights",
        "Integration with MCT Retail Database"
      ],
      cta: "Add Demand AI",
      message: "Hi, I want to integrate Retail Demand AI with my store."
    },
    {
      title: "Cognitive AI Assistant",
      price: "₹24,999",
      period: "/month",
      popular: true,
      description: "Custom conversational AI assistant powered by fine-tuned models.",
      features: [
        "Culturally-Contextualized Knowledge Base",
        "24/7 Automated WhatsApp / Web Support",
        "Order Status & Inventory Tracking AI",
        "Multi-Lingual (English, Hindi, Kannada, Tamil)",
        "Zero Human Intervention for 80% Queries",
        "Continuous Model Retraining"
      ],
      cta: "Deploy AI Assistant",
      message: "Hi, I am interested in deploying a Cognitive AI Assistant for my brand."
    },
    {
      title: "Custom Deep Tech R&D",
      price: "Custom",
      period: "milestone based",
      description: "Tailored deep-tech, computer vision, or biometric systems for your business.",
      popular: false,
      features: [
        "Computer Vision & Pose Estimation Systems",
        "Zero-Knowledge Biometric Identity Platforms",
        "Custom Generative AI Architecture",
        "Patentable IP & Full Source Code Handover",
        "High-Speed Edge Device Optimization",
        "Direct Collaboration with Founder Prashant"
      ],
      cta: "Propose R&D Project",
      message: "Hi Prashant, I want to discuss a custom Deep Tech / R&D project with Malola Cosmic Tech."
    }
  ]
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("retail");

  const handleWhatsAppClick = (message) => {
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/919902857694?text=${text}`, "_blank");
  };

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span style={{
            fontSize: "0.75rem",
            color: "#38bdf8",
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase"
          }}>
            COMMERCIAL & SUBSCRIPTION PLANS
          </span>
          <h2 className={styles.title} style={{ marginTop: "6px" }}>Enterprise & SaaS Licensing</h2>
          <p className={styles.subtitle}>
            High-margin software subscription models powering zero-downtime offline retail storefronts and deep-tech innovation.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`${styles.tab} ${activeTab === cat.id ? styles.activeTab : ""}`}
              >
                {cat.icon}
                <span>{cat.label}</span>
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={styles.activeTabIndicator}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          <AnimatePresence mode="wait">
            {pricingData[activeTab].map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`${styles.card} ${plan.popular ? styles.popularCard : ""}`}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )}
                <div className={styles.cardHeader}>
                  <h3 className={styles.planTitle}>{plan.title}</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </div>
                  <p className={styles.description}>{plan.description}</p>
                </div>

                <ul className={styles.features}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <div className={styles.checkIcon}>
                        <Check size={16} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleWhatsAppClick(plan.message)}
                  className={styles.ctaButton}
                >
                  <MessageCircle size={18} />
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className={styles.customQuote}>
          <p>Need something custom?</p>
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className={styles.contactLink}
          >
            Get a Custom Quote &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Smartphone, Globe, BarChart3, Bot, MessageCircle } from "lucide-react";
import styles from "./PricingSection.module.css";

const categories = [
  { id: "web", label: "Website Design", icon: <Globe size={18} /> },
  { id: "marketing", label: "Digital Marketing", icon: <BarChart3 size={18} /> },
  { id: "automation", label: "AI & Automation", icon: <Bot size={18} /> },
];

const pricingData = {
  web: [
    {
      title: "Business Starter",
      price: "₹14,999",
      period: "one-time",
      description: "Perfect for local businesses needing a professional online presence.",
      features: [
        "5-Page Custom Website (Next.js)",
        "Mobile Responsive Design",
        "WhatsApp Chat Integration",
        "Free Domain & Hosting (1 Year)",
        "Contact Form with Email Alerts",
        "Google Maps Integration"
      ],
      notIncluded: ["E-commerce Functionality", "Admin Dashboard"],
      cta: "Book this Package",
      message: "Hi, I am interested in the Business Starter Website package for ₹14,999."
    },
    {
      title: "E-Commerce Pro",
      price: "₹29,999",
      period: "one-time",
      popular: true,
      description: "Start selling your products online with a secure store.",
      features: [
        "Complete Online Store Setup",
        "Product Listing (up to 50)",
        "Payment Gateway (UPI/Cards)",
        "Admin Dashboard for Orders",
        "1 Year Priority Support",
        "Basic SEO Optimization"
      ],
      notIncluded: [],
      cta: "Start Selling Now",
      message: "Hi, I want to build an E-Commerce Website. Please guide me."
    }
  ],
  marketing: [
    {
      title: "Local SEO Lite",
      price: "₹7,999",
      period: "/month",
      description: "Get found on Google by customers in your area.",
      features: [
        "Google My Business Optimization",
        "2 SEO Blog Posts/Month",
        "Local Keyword Ranking",
        "Monthly Traffic Report",
        "Review Management Strategy"
      ],
      notIncluded: ["Social Media Management", "Video Editing"],
      cta: "Boost My Ranking",
      message: "Hi, I need help with Local SEO for my business."
    },
    {
      title: "Social Growth Pro",
      price: "₹12,999",
      period: "/month",
      popular: true,
      description: "Build a loyal community on Instagram & LinkedIn.",
      features: [
        "12 Creative Posts (Insta/FB)",
        "4 Professional Reels/Shorts",
        "Content Strategy & Hashtags",
        "Community Engagement",
        "Monthly Performance Analytics",
        "WhatsApp Support"
      ],
      notIncluded: [],
      cta: "Grow My Brand",
      message: "Hi, I am interested in the Social Growth Pro marketing package."
    }
  ],
  automation: [
    {
      title: "WhatsApp API Setup",
      price: "₹4,999",
      period: "one-time",
      description: "Never miss a customer query with auto-replies.",
      features: [
        "Official WhatsApp Business API",
        "Welcome Message Automation",
        "FAQ Auto-Replies",
        "Catalog Integration",
        "Link to Website/Socials"
      ],
      notIncluded: ["AI Chatbot Intelligence"],
      cta: "Automate WhatsApp",
      message: "Hi, I want to set up WhatsApp Business API for my number."
    },
    {
      title: "AI Sales Agent",
      price: "₹9,999",
      period: "/month",
      popular: true,
      description: "Your 24/7 employee that answers and sells.",
      features: [
        "Custom AI Chatbot on Website",
        "Trained on Your Data",
        "Lead Qualification",
        "Appointment Booking",
        "24/7 Customer Support",
        "Monthly Conversation Logs"
      ],
      notIncluded: [],
      cta: "Hire AI Agent",
      message: "Hi, I want to install an AI Sales Agent on my website."
    }
  ]
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState("web");

  const handleWhatsAppClick = (message) => {
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/919902857694?text=${text}`, "_blank");
  };

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Transparent Pricing</h2>
          <p className={styles.subtitle}>
            Choose the perfect plan to scale your business. No hidden fees.
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
                  <div className={styles.popularBadge}>Best Value</div>
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
                  {plan.notIncluded && plan.notIncluded.map((feature, i) => (
                    <li key={i} className={`${styles.featureItem} ${styles.disabled}`}>
                      <div className={styles.xIcon}>
                        <X size={16} />
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
          <p>Need a custom solution?</p>
          <button 
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className={styles.contactLink}
          >
            Book a Free Consultation &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

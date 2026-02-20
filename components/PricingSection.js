"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Smartphone, Globe, BarChart3, Bot, MessageCircle, PenTool, Linkedin, Mail } from "lucide-react";
import styles from "./PricingSection.module.css";

const categories = [
  { id: "web", label: "Web & App", icon: <Globe size={18} /> },
  { id: "social", label: "Social & Brand", icon: <Linkedin size={18} /> },
  { id: "content", label: "Content & SEO", icon: <PenTool size={18} /> },
];

const pricingData = {
  web: [
    {
      title: "Business Starter",
      price: "₹14,999",
      period: "one-time",
      description: "Professional website to establish your digital presence.",
      popular: false,
      features: [
        "5-Page Custom Website",
        "Mobile Responsive Design",
        "WhatsApp Chat Integration",
        "Free Domain & Hosting (1 Year)",
        "Contact Form with Email Alerts",
        "Basic SEO Setup"
      ],
      cta: "Book this Package",
      message: "Hi, I am interested in the Business Starter Website package."
    },
    {
      title: "E-Commerce Pro",
      price: "₹29,999",
      period: "one-time",
      popular: true,
      description: "Full-featured online store with payment gateway.",
      features: [
        "Complete Online Store (50 Products)",
        "Payment Gateway (UPI/Cards)",
        "Admin Dashboard for Orders",
        "Cart & Checkout System",
        "1 Year Priority Support",
        "User Login & Profiles"
      ],
      cta: "Start Selling Now",
      message: "Hi, I want to build an E-Commerce Website."
    },
    {
      title: "Custom App Dev",
      price: "₹49,999",
      period: "starts from",
      description: "Native Android/iOS app for your business.",
      popular: false,
      features: [
        "Android & iOS App (Flutter/React Native)",
        "Push Notifications",
        "User Authentication",
        "Real-time Database",
        "Google Maps / Location Services",
        "App Store & Play Store Submission"
      ],
      cta: "Discuss App Idea",
      message: "Hi, I have an app idea and want to discuss development."
    }
  ],
  social: [
    {
      title: "Social Starter",
      price: "₹9,999",
      period: "/month",
      description: "Consistent presence on Instagram & Facebook.",
      popular: false,
      features: [
        "12 Creative Posts/Month",
        "4 Reels/Shorts",
        "Content Strategy & Hashtags",
        "Community Engagement",
        "Monthly Performance Report",
        "WhatsApp Support"
      ],
      cta: "Start Growing",
      message: "Hi, I need help with Social Media Marketing (Starter)."
    },
    {
      title: "LinkedIn Personal Brand",
      price: "₹19,999",
      period: "/month",
      popular: true,
      description: "Build authority and generate leads on LinkedIn.",
      features: [
        "Profile Optimization & Revamp",
        "3 High-Quality Posts/Week",
        "Ghostwriting (Articles/Stories)",
        "Network Growth Strategy",
        "Lead Generation Tactics",
        "Weekly Analytics Review"
      ],
      cta: "Build My Brand",
      message: "Hi, I want to build my Personal Brand on LinkedIn."
    },
    {
      title: "360° Brand Growth",
      price: "₹34,999",
      period: "/month",
      description: "Complete domination across all platforms.",
      popular: false,
      features: [
        "Manage Insta, FB, LinkedIn, Twitter",
        "Daily Posting Schedule",
        "8 Professional Reels/Month",
        "Ad Campaign Management",
        "Influencer Outreach Strategy",
        "Dedicated Account Manager"
      ],
      cta: "Go Viral",
      message: "Hi, I am interested in the 360° Brand Growth package."
    }
  ],
  content: [
    {
      title: "Blogger Package",
      price: "₹6,999",
      period: "/month",
      description: "Keep your website fresh and rank higher.",
      popular: false,
      features: [
        "4 SEO-Optimized Blogs (Weekly)",
        "Keyword Research & Strategy",
        "Plagiarism-Free Content",
        "Stock Images Included",
        "Uploaded to Your Grid/CMS",
        "Internal Linking Strategy"
      ],
      cta: "Start Blogging",
      message: "Hi, I need weekly blog writing services."
    },
    {
      title: "SEO Authority",
      price: "₹14,999",
      period: "/month",
      popular: true,
      description: "Aggressive SEO to capture #1 rankings.",
      features: [
        "8 High-Intent Blogs/Month",
        "Technical SEO Audit & Fixes",
        "Backlink Building Strategy",
        "Competitor Analysis",
        "Google My Business Optimization",
        "Conversion Rate Optimization"
      ],
      cta: "Rank #1",
      message: "Hi, I want to aggressively improve my SEO rankings."
    },
    {
      title: "Email & Copy",
      price: "₹9,999",
      period: "/month",
      description: "Nurture leads and close sales with words.",
      popular: false,
      features: [
        "Weekly Newsletter Campaigns",
        "Automated Drip Sequences",
        "Landing Page Copywriting",
        "Sales Email Scripts",
        "A/B Testing Subject Lines",
        "List Segmentation"
      ],
      cta: "Boost Sales",
      message: "Hi, I need Email Marketing and Copywriting services."
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
            Scalable packages for businesses of all sizes. No hidden costs.
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

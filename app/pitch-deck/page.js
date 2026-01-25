"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  Globe, 
  DollarSign,
  Brain,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";
import styles from "./PitchDeck.module.css";

export default function PitchDeckPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={styles.heroContent}
          >
            <div className={styles.badge}>
              <Sparkles size={16} />
              <span>Google for Startups Application</span>
            </div>
            <h1 className={styles.heroTitle}>
              MALOLA
              <span className={styles.gradient}>AI Wellness Platform</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Harmonizing Modern Mental Health Support with Traditional Cultural Wisdom
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <strong>$537B</strong>
                <span>Global Market</span>
              </div>
              <div className={styles.statItem}>
                <strong>450M</strong>
                <span>People Affected</span>
              </div>
              <div className={styles.statItem}>
                <strong>10x</strong>
                <span>More Affordable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.section}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <Target className={styles.icon} />
              The Problem
            </h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemNumber}>450M</div>
                <h3>Mental Health Crisis</h3>
                <p>People worldwide suffer from mental health issues</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemNumber}>75%</div>
                <h3>Untreated Cases</h3>
                <p>In developing countries go without treatment</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemNumber}>$300</div>
                <h3>Expensive Therapy</h3>
                <p>Per session, inaccessible to billions</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemNumber}>0</div>
                <h3>Cultural Context</h3>
                <p>Traditional apps lack cultural awareness</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={`${styles.section} ${styles.solutionSection}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <Zap className={styles.icon} />
              The Solution
            </h2>
            <div className={styles.solutionContent}>
              <div className={styles.solutionText}>
                <h3>Malola/Soulink: AI-Powered Holistic Wellness</h3>
                <p className={styles.subtitle}>
                  The first AI wellness platform that harmonizes modern mental health 
                  support with traditional cultural wisdom
                </p>
                <div className={styles.featureList}>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span>24/7 AI-driven mental health assistant</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span>Vedic astrology-based compatibility matching</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span>Culturally contextualized wellness insights</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span>Personalized daily guidance & affirmations</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span>Secure, private, judgment-free space</span>
                  </div>
                </div>
              </div>
              <div className={styles.solutionVisual}>
                <div className={styles.productShowcase}>
                  <img 
                    src="/images/malola-product-showcase.jpg" 
                    alt="Malola Product Showcase - AI Wellness Platform" 
                    className={styles.productImage}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className={styles.section}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <TrendingUp className={styles.icon} />
              Market Opportunity
            </h2>
            <div className={styles.marketGrid}>
              <div className={styles.marketCard}>
                <div className={styles.marketLabel}>TAM</div>
                <div className={styles.marketValue}>$537B</div>
                <p>Global Mental Health Market by 2030</p>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className={styles.marketCard}>
                <div className={styles.marketLabel}>SAM</div>
                <div className={styles.marketValue}>$20.4B</div>
                <p>Digital Mental Health Market by 2028</p>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className={styles.marketCard}>
                <div className={styles.marketLabel}>SOM</div>
                <div className={styles.marketValue}>$2.8B</div>
                <p>India Mental Wellness Market</p>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Model */}
      <section className={`${styles.section} ${styles.businessSection}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <DollarSign className={styles.icon} />
              Business Model
            </h2>
            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <h3>Free</h3>
                <div className={styles.price}>$0<span>/month</span></div>
                <ul className={styles.pricingFeatures}>
                  <li>Basic AI chat</li>
                  <li>Daily horoscope</li>
                  <li>Mood tracking</li>
                  <li>Limited features</li>
                </ul>
              </div>
              <div className={`${styles.pricingCard} ${styles.featured}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <h3>Premium</h3>
                <div className={styles.price}>$9.99<span>/month</span></div>
                <ul className={styles.pricingFeatures}>
                  <li>Unlimited AI sessions</li>
                  <li>Full astrology reports</li>
                  <li>Compatibility matching</li>
                  <li>Priority support</li>
                </ul>
              </div>
              <div className={styles.pricingCard}>
                <h3>Premium Plus</h3>
                <div className={styles.price}>$19.99<span>/month</span></div>
                <ul className={styles.pricingFeatures}>
                  <li>1-on-1 expert calls</li>
                  <li>Custom birth chart</li>
                  <li>Personalized remedies</li>
                  <li>All Premium features</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.unitEconomics}>
              <h3>Unit Economics</h3>
              <div className={styles.metricsGrid}>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>$15-25</div>
                  <div className={styles.metricLabel}>CAC</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>$180-240</div>
                  <div className={styles.metricLabel}>LTV</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>7-12x</div>
                  <div className={styles.metricLabel}>LTV:CAC</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>85%+</div>
                  <div className={styles.metricLabel}>Gross Margin</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className={styles.section}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <TrendingUp className={styles.icon} />
              3-Year Financial Projections
            </h2>
            <div className={styles.financialTable}>
              <div className={styles.tableRow}>
                <div className={styles.tableHeader}>Year</div>
                <div className={styles.tableHeader}>Users</div>
                <div className={styles.tableHeader}>Conversion</div>
                <div className={styles.tableHeader}>ARR</div>
                <div className={styles.tableHeader}>Net</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>2026</strong></div>
                <div className={styles.tableCell}>10,000</div>
                <div className={styles.tableCell}>5%</div>
                <div className={styles.tableCell}>$60K</div>
                <div className={styles.tableCell} style={{color: '#ef4444'}}>-$90K</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>2027</strong></div>
                <div className={styles.tableCell}>100,000</div>
                <div className={styles.tableCell}>8%</div>
                <div className={styles.tableCell}>$960K</div>
                <div className={styles.tableCell} style={{color: '#22c55e'}}>$460K</div>
              </div>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}><strong>2028</strong></div>
                <div className={styles.tableCell}>500,000</div>
                <div className={styles.tableCell}>10%</div>
                <div className={styles.tableCell}>$6M</div>
                <div className={styles.tableCell} style={{color: '#22c55e'}}>$4M</div>
              </div>
            </div>

            <div className={styles.growthChart}>
              <h3>Revenue Growth Trajectory</h3>
              <div className={styles.chartBars}>
                <div className={styles.barContainer}>
                  <div className={styles.bar} style={{height: '10%'}}>
                    <span className={styles.barLabel}>$60K</span>
                  </div>
                  <div className={styles.barYear}>2026</div>
                </div>
                <div className={styles.barContainer}>
                  <div className={styles.bar} style={{height: '40%'}}>
                    <span className={styles.barLabel}>$960K</span>
                  </div>
                  <div className={styles.barYear}>2027</div>
                </div>
                <div className={styles.barContainer}>
                  <div className={styles.bar} style={{height: '100%'}}>
                    <span className={styles.barLabel}>$6M</span>
                  </div>
                  <div className={styles.barYear}>2028</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className={`${styles.section} ${styles.competitiveSection}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <Globe className={styles.icon} />
              Competitive Advantage
            </h2>
            <div className={styles.competitiveGrid}>
              <div className={styles.advantageCard}>
                <CheckCircle2 size={32} className={styles.advantageIcon} />
                <h3>Only Platform</h3>
                <p>Combining AI therapy + Vedic astrology</p>
              </div>
              <div className={styles.advantageCard}>
                <CheckCircle2 size={32} className={styles.advantageIcon} />
                <h3>Cultural Intelligence</h3>
                <p>Built into every conversation</p>
              </div>
              <div className={styles.advantageCard}>
                <CheckCircle2 size={32} className={styles.advantageIcon} />
                <h3>10x Affordable</h3>
                <p>Compared to traditional therapy</p>
              </div>
              <div className={styles.advantageCard}>
                <CheckCircle2 size={32} className={styles.advantageIcon} />
                <h3>Holistic Approach</h3>
                <p>Mind, body, and spirit</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Ask */}
      <section className={styles.section}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <Users className={styles.icon} />
              What We Need from Google for Startups
            </h2>
            <div className={styles.askGrid}>
              <div className={styles.askCard}>
                <h3>Google Cloud Credits</h3>
                <p>For AI/ML infrastructure and scaling</p>
              </div>
              <div className={styles.askCard}>
                <h3>Technical Mentorship</h3>
                <p>Firebase optimization, Android development</p>
              </div>
              <div className={styles.askCard}>
                <h3>Marketing Support</h3>
                <p>User acquisition best practices</p>
              </div>
              <div className={styles.askCard}>
                <h3>Network Access</h3>
                <p>Healthcare and wellness partners</p>
              </div>
            </div>

            <div className={styles.fundingBox}>
              <h3>Current Fundraising</h3>
              <div className={styles.fundingDetails}>
                <div className={styles.fundingItem}>
                  <strong>Stage:</strong> Pre-seed
                </div>
                <div className={styles.fundingItem}>
                  <strong>Target:</strong> $250K
                </div>
                <div className={styles.fundingItem}>
                  <strong>Use:</strong> Product development, user acquisition, team building
                </div>
                <div className={styles.fundingItem}>
                  <strong>Timeline:</strong> Next 6 months
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Impact */}
      <section className={`${styles.section} ${styles.visionSection}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.visionContent}
          >
            <h2 className={styles.sectionTitle}>
              <Sparkles className={styles.icon} />
              Vision & Impact
            </h2>
            <blockquote className={styles.mission}>
              "To make mental wellness accessible, affordable, and culturally relevant for every soul on Earth"
            </blockquote>
            
            <div className={styles.impactGrid}>
              <div className={styles.impactCard}>
                <div className={styles.impactNumber}>10M</div>
                <p>Users supported globally</p>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactNumber}>50%</div>
                <p>Reduction in therapy costs</p>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactNumber}>100+</div>
                <p>Languages & cultures</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={styles.ctaContent}
          >
            <h2>Ready to Transcend Through Technology?</h2>
            <p>Join us in revolutionizing mental wellness for billions</p>
            <div className={styles.ctaButtons}>
              <a href="https://studio-mocha-tau-22.vercel.app/" className={styles.primaryBtn} target="_blank" rel="noopener noreferrer">
                View Live Demo <ArrowRight size={20} />
              </a>
              <a href="mailto:contact@malolacosmictech.com" className={styles.secondaryBtn}>
                Contact Us
              </a>
            </div>
            <div className={styles.contactInfo}>
              <p><strong>MCT (Malola Cosmic Technologies)</strong></p>
              <p>contact@malolacosmictech.com | malolacosmictech.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

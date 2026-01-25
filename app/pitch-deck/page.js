"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  Globe, 
  DollarSign,
  BookOpen,
  Mic,
  Star,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Code,
  Smartphone,
  Database,
  PieChart,
  BarChart3
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
              <span>Pre-Launch - Seeking Developers & Investment</span>
            </div>
            <h1 className={styles.heroTitle}>
              MALOLA
              <span className={styles.gradient}>Complete Cultural AI Ecosystem</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Scriptures • Audio • AI Chat • Astrology • Soul Matching • Book Store<br/>
              Everything For Your Spiritual Journey, In One Platform
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <strong>$256B</strong>
                <span>Total Market (TAM)</span>
              </div>
              <div className={styles.statItem}>
                <strong>700M+</strong>
                <span>Indian Smartphones</span>
              </div>
              <div className={styles.statItem}>
                <strong>49.19%</strong>
                <span>Astrology CAGR</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={`${styles.section} ${styles.visionSection}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <Target className={styles.icon} />
              Our Vision
            </h2>
            <div className={styles.visionContent}>
              <p className={styles.visionText}>
                We are building a <strong>complete cultural AI ecosystem</strong> that unifies 7 essential features: digital scripture library, audio content, AI voice & text chat, astrology insights, soul matching for marriage, physical book ordering, and e-commerce—all in one platform designed for Indian households and expanding globally.
              </p>
              <p className={styles.visionText}>
                Users can <strong>read scriptures, listen to mantras, chat with AI, consult astrology, find soul mates, and order physical books</strong>—all while receiving personalized guidance in their native language, making ancient wisdom accessible and practical for modern life.
              </p>
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
              The Problem: Fragmented Solutions
            </h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <BookOpen size={48} className={styles.problemIcon} />
                <h3>Static Scripture Apps</h3>
                <p>Non-interactive, no Q&A, just reading</p>
              </div>
              <div className={styles.problemCard}>
                <Star size={48} className={styles.problemIcon} />
                <h3>Manual Astrology</h3>
                <p>Inconsistent, expensive, no personalization</p>
              </div>
              <div className={styles.problemCard}>
                <Mic size={48} className={styles.problemIcon} />
                <h3>Generic Audio Platforms</h3>
                <p>No cultural context or personalization</p>
              </div>
              <div className={styles.problemCard}>
                <Globe size={48} className={styles.problemIcon} />
                <h3>Global AI Lacks Context</h3>
                <p>No spiritual, cultural, or regional understanding</p>
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
              The Solution: Unified AI Ecosystem
            </h2>
            <div className={styles.solutionContent}>
              <div className={styles.solutionText}>
                <h3>7-in-1 Complete Ecosystem</h3>
                <p className={styles.subtitle}>
                  Everything users need for their spiritual journey, unified in one platform
                </p>
                <div className={styles.featureList}>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>📖 Digital Scripture Library:</strong> Read sacred texts anytime, anywhere</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>🎧 Audio Library:</strong> Listen to mantras, stories, wisdom during commute</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>🤖 AI Voice & Text Chat:</strong> Ask spiritual questions, get personalized guidance</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>⭐ Astrology Insights:</strong> Birth chart, daily predictions, life guidance</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>💕 Soul Matching:</strong> Astrology-based compatibility for marriage</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>📚 Physical Book Store:</strong> Order authentic scriptures delivered home</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>🗣️ Vernacular-First:</strong> Hindi, Tamil, Telugu, Bengali & 10+ languages</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>🔮 Future Hardware:</strong> AI talking clocks, home assistants (2027)</span>
                  </div>
                </div>
              </div>
              <div className={styles.solutionVisual}>
                <div className={styles.productShowcase}>
                  <img 
                    src="/images/mal ola-full-showcase.jpg" 
                    alt="Malola Platform Showcase" 
                    className={styles.productImage}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Market */}
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
              Target Market
            </h2>
            <div className={styles.marketGrid}>
              <div className={styles.targetCard}>
                <h3>Primary Customers</h3>
                <ul>
                  <li>Indian middle-class families</li>
                  <li>Individuals seeking spiritual clarity</li>
                  <li>Astrology users</li>
                  <li>Audio-first learners</li>
                  <li>Tier-2, Tier-3 city residents</li>
                  <li>Vernacular language speakers</li>
                </ul>
              </div>
              <div className={styles.targetCard}>
                <h3>Future Expansion</h3>
                <ul>
                  <li>Indian diaspora globally</li>
                  <li>International spiritual seekers</li>
                  <li>Cultural learning enthusiasts</li>
                  <li>Religious institutions (B2B)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className={`${styles.section} ${styles.marketSection}`}>
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
            {/* Market Visualization */}
            <div className={styles.chartContainer}>
              <img 
                src="/images/market-opportunity-funnel.png" 
                alt="Market Opportunity"
                style={{maxWidth: '700px', width: '100%', margin: '2rem auto', display: 'block', borderRadius: '12px'}}
              />
            </div>
            <div className={styles.marketOpportunityGrid}>
              <div className={styles.marketCard}>
                <div className={styles.marketLabel}>TAM</div>
                <div className={styles.marketValue}>$256B</div>
                <p>Global Mental Wellness ($186B) + Spiritual Market ($70B) - 2025</p>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className={styles.marketCard}>
                <div className={styles.marketLabel}>SAM</div>
                <div className={styles.marketValue}>$72B</div>
                <p>Indian Wellness + Digital Spiritual Market - 2025</p>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className={styles.marketCard}>
                <div className={styles.marketLabel}>SOM</div>
                <div className={styles.marketValue}>$8.1B</div>
                <p>Astrology Apps ($1.8B) + AI Companions + Vernacular Platforms</p>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>

            <div className={styles.marketInsights}>
              <h3>Market Insights</h3>
              <div className={styles.insightsGrid}>
                <div className={styles.insightCard}>
                  <strong>500M+</strong>
                  <p>Potential Tier 2/3 digital users in India</p>
                </div>
                <div className={styles.insightCard}>
                  <strong>$12.8B</strong>
                  <p>Global astrology app market</p>
                </div>
                <div className={styles.insightCard}>
                  <strong>$5B</strong>
                  <p>Audio content market in India</p>
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
              Why We Win
            </h2>
            <div className={styles.competitiveGrid}>
              <div className={styles.advantageCard}>
                <CheckCircle2 size={32} className={styles.advantageIcon} />
                <h3>Unified Platform</h3>
                <p>Only solution combining scriptures, audio, astrology & AI in one app</p>
              </div>
              <div className={styles.advantageCard}>
                <CheckCircle2 size={32} className={styles.advantageIcon} />
                <h3>Cultural Context</h3>
                <p>Deep understanding of Indian traditions, festivals, and spiritual practices</p>
              </div>
              <div className={styles.advantageCard}>
                <CheckCircle2 size={32} className={styles.advantageIcon} />
                <h3>Vernacular-First</h3>
                <p>Voice-first design for Hindi, Tamil, Telugu, Bengali & 10+ languages</p>
              </div>
              <div className={styles.advantageCard}>
                <CheckCircle2 size={32} className={styles.advantageIcon} />
                <h3>Personalization</h3>
                <p>AI learns user preferences, life events, and spiritual journey</p>
              </div>
              <div className={styles.advantageCard}>
                <CheckCircle2 size={32} className={styles.advantageIcon} />
                <h3>Hardware Roadmap</h3>
                <p>Beyond app: AI talking clocks & home assistants for daily rituals</p>
              </div>
              <div className={styles.advantageCard}>
                <CheckCircle2 size={32} className={styles.advantageIcon} />
                <h3>Trust & Authenticity</h3>
                <p>Verified content from religious scholars and institutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPETITIVE ANALYSIS TABLE */}
      <section className={styles.section}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <Globe className={styles.icon} />
              Competitive Analysis
            </h2>
            
            <div style={{overflowX: 'auto', marginTop: '2rem'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', background: 'rgba(255,255,255,0.03)', borderRadius: '12px'}}>
                <thead>
                  <tr style={{background: 'rgba(124, 58, 237, 0.2)'}}>
                    <th style={{padding: '1rem', textAlign: 'left', border: '1px solid rgba(255,255,255,0.1)'}}>Feature</th>
                    <th style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>Scripture Apps</th>
                    <th style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>Astrology</th>
                    <th style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>Generic AI</th>
                    <th style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(124, 58, 237, 0.3)'}}>MALOLA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{padding: '1rem', border: '1px solid rgba(255,255,255,0.1)'}}>Digital Scriptures</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>✅</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(124, 58, 237, 0.2)', fontWeight: 700}}>✅</td></tr>
                  <tr><td style={{padding: '1rem', border: '1px solid rgba(255,255,255,0.1)'}}>Audio Library</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>Partial</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(124, 58, 237, 0.2)', fontWeight: 700}}>✅</td></tr>
                  <tr><td style={{padding: '1rem', border: '1px solid rgba(255,255,255,0.1)'}}>AI Chatbot</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>Generic</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(124, 58, 237, 0.2)', fontWeight: 700}}>✅ Cultural</td></tr>
                  <tr><td style={{padding: '1rem', border: '1px solid rgba(255,255,255,0.1)'}}>Voice AI</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>Partial</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(124, 58, 237, 0.2)', fontWeight: 700}}>✅</td></tr>
                  <tr><td style={{padding: '1rem', border: '1px solid rgba(255,255,255,0.1)'}}>Astrology</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>Manual</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(124, 58, 237, 0.2)', fontWeight: 700}}>✅ AI</td></tr>
                  <tr><td style={{padding: '1rem', border: '1px solid rgba(255,255,255,0.1)'}}>Soul Matching</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(124, 58, 237, 0.2)', fontWeight: 700}}>✅ Unique</td></tr>
                  <tr><td style={{padding: '1rem', border: '1px solid rgba(255,255,255,0.1)'}}>Physical Books</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)'}}>❌</td><td style={{padding: '1rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(124, 58, 237, 0.2)', fontWeight: 700}}>✅ Unique</td></tr>
                </tbody>
              </table>
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
                <h3>Free with Ads</h3>
                <div className={styles.price}>$0<span>/month</span></div>
                <ul className={styles.pricingFeatures}>
                  <li>✅ Basic scripture library (100 pages/month)</li>
                  <li>✅ Limited audio content (10 hours/month)</li>
                  <li>✅ AI chat (10 messages/day)</li>
                  <li>✅ Daily horoscope only</li>
                  <li>🎯 <strong>Ads displayed between content</strong></li>
                  <li>❌ No voice AI assistant</li>
                  <li>❌ No soul matching</li>
                  <li>❌ No physical book ordering</li>
                  <li>❌ No offline access</li>
                </ul>
              </div>
              <div className={`${styles.pricingCard} ${styles.featured}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <h3>Premium</h3>
                <div className={styles.price}>$4.99<span>/month</span></div>
                <ul className={styles.pricingFeatures}>
                  <li>✅ Unlimited scripture library</li>
                  <li>✅ Unlimited audio content</li>
                  <li>✅ Unlimited AI conversations (text + voice)</li>
                  <li>✅ Full astrology insights & birth chart</li>
                  <li>✅ Soul matching for marriage</li>
                  <li>✅ <strong>Ad-free experience</strong></li>
                  <li>✅ Physical book ordering</li>
                  <li>✅ Offline downloads</li>
                  <li>✅ Priority customer support</li>
                </ul>
              </div>
              <div className={styles.pricingCard}>
                <h3>Family Plan</h3>
                <div className={styles.price}>$9.99<span>/month</span></div>
                <ul className={styles.pricingFeatures}>
                  <li>All Premium features</li>
                  <li>Up to 5 family members</li>
                  <li>Personalized for each member</li>
                  <li>Family astrology insights</li>
                  <li>Priority support</li>
                </ul>
              </div>
            </div>

            <div className={styles.revenueStreams}>
              <h3>Additional Revenue Streams</h3>
              <div className={styles.streamsGrid}>
                <div className={styles.streamCard}>
                  <h4>📢 Ad Revenue (Free Users)</h4>
                  <p>$2-5 per user/year from display ads shown to free tier users</p>
                </div>
                <div className={styles.streamCard}>
                  <h4>📚 Physical Book Sales</h4>
                  <p>10-20% margin on authentic scripture books delivered to homes</p>
                </div>
                <div className={styles.streamCard}>
                  <h4>🏢 Enterprise/B2B</h4>
                  <p>Partnerships with temples, religious institutions, and cultural organizations</p>
                </div>
                <div className={styles.streamCard}>
                  <h4>🔮 Hardware Devices</h4>
                  <p>AI-powered talking clocks, home assistants (launching 2027)</p>
                </div>
                <div className={styles.streamCard}>
                  <h4>⭐ Astrology Consultations</h4>
                  <p>One-time reports, live consultations, soul matching services</p>
                </div>
                <div className={styles.streamCard}>
                  <h4>🔌 Platform Integrations</h4>
                  <p>API access for third-party apps and smart devices</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UNIT ECONOMICS */}
      <section className={styles.section} style={{background: 'rgba(124, 58, 237, 0.05)'}}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <BarChart3 className={styles.icon} />
              Unit Economics - Proven Model
            </h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem'}}>
              <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2rem', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 800, background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem'}}>$15-25</div>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>CAC</h4>
                <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>Customer Acquisition Cost</p>
              </div>
              <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2rem', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 800, background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem'}}>$180-240</div>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>LTV</h4>
                <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>Lifetime Value (3 years)</p>
              </div>
              <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2rem', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 800, background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem'}}>7-12x</div>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>LTV:CAC</h4>
                <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>World-class ratio</p>
              </div>
              <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2rem', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 800, background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem'}}>85%</div>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Margin</h4>
                <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>Gross margin</p>
              </div>
              <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2rem', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 800, background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem'}}>5-8%</div>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Conversion</h4>
                <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>Free → Premium</p>
              </div>
              <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '2rem', textAlign: 'center'}}>
                <div style={{fontSize: '3rem', fontWeight: 800, background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem'}}>18mo</div>
                <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Retention</h4>
                <p style={{color: '#94a3b8', fontSize: '0.9rem'}}>Average customer stay</p>
              </div>
            </div>

            {/* Revenue Pie Chart */}
            <div style={{marginTop: '4rem'}}>
              <h3 style={{textAlign: 'center', fontSize: '2rem', marginBottom: '2rem'}}>Revenue Breakdown</h3>
              <img 
                src="/images/revenue-pie-chart.png" 
                alt="Revenue Streams"
                style={{maxWidth: '600px', width: '100%', margin: '0 auto', display: 'block', borderRadius: '12px'}}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projections */}
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
              Growth Projections (3 Years)
            </h2>
            
            <div className={styles.projectionsContainer}>
              <div className={styles.growthChart}>
                <h3>User Growth Trajectory</h3>
                <div className={styles.chartBars}>
                  <div className={styles.barContainer}>
                    <div className={styles.bar} style={{height: '10%'}}>
                      <span className={styles.barLabel}>10K</span>
                    </div>
                    <div className={styles.barYear}>2026 Beta</div>
                  </div>
                  <div className={styles.barContainer}>
                    <div className={styles.bar} style={{height: '40%'}}>
                      <span className={styles.barLabel}>100K</span>
                    </div>
                    <div className={styles.barYear}>2027</div>
                  </div>
                  <div className={styles.barContainer}>
                    <div className={styles.bar} style={{height: '100%'}}>
                      <span className={styles.barLabel}>500K</span>
                    </div>
                    <div className={styles.barYear}>2028</div>
                  </div>
                </div>
              </div>

              <div className={styles.revenueChart}>
                <h3>Revenue Projections</h3>
                <div className={styles.chartBars}>
                  <div className={styles.barContainer}>
                    <div className={styles.bar} style={{height: '8%', background: 'linear-gradient(180deg, #22c55e, #16a34a)'}}>
                      <span className={styles.barLabel}>$50K</span>
                    </div>
                    <div className={styles.barYear}>2026</div>
                  </div>
                  <div className={styles.barContainer}>
                    <div className={styles.bar} style={{height: '35%', background: 'linear-gradient(180deg, #22c55e, #16a34a)'}}>
                      <span className={styles.barLabel}>$500K</span>
                    </div>
                    <div className={styles.barYear}>2027</div>
                  </div>
                  <div className={styles.barContainer}>
                    <div className={styles.bar} style={{height: '100%', background: 'linear-gradient(180deg, #22c55e, #16a34a)'}}>
                      <span className={styles.barLabel}>$3M</span>
                    </div>
                    <div className={styles.barYear}>2028</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.assumptions}>
              <p><strong>Assumptions:</strong> 5% conversion in Year 1, 8% in Year 2, 10% in Year 3 | Avg. ARPU $5/month</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className={`${styles.section} ${styles.roadmapSection}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <ArrowRight className={styles.icon} />
              Product Roadmap
            </h2>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineBadge}>Q1 2026</div>
                <div className={styles.timelineContent}>
                  <h3>Phase 1: Development</h3>
                  <ul>
                    <li>Complete mobile app development (React Native)</li>
                    <li>Scripture library + Audio player</li>
                    <li>Basic AI chat (text)</li>
                    <li>Astrology integration</li>
                  </ul>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineBadge}>Q2 2026</div>
                <div className={styles.timelineContent}>
                  <h3>Phase 2: Beta Launch</h3>
                  <ul>
                    <li>Beta launch in 3 Indian cities</li>
                    <li>Voice AI integration</li>
                    <li>Hindi + English support</li>
                    <li>Target: 10,000 users</li>
                  </ul>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineBadge}>Q3-Q4 2026</div>
                <div className={styles.timelineContent}>
                  <h3>Phase 3: Public Launch</h3>
                  <ul>
                    <li>Full product launch</li>
                    <li>5+ regional languages</li>
                    <li>Advanced personalization</li>
                    <li>Target: 100,000 users</li>
                  </ul>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineBadge}>2027</div>
                <div className={styles.timelineContent}>
                  <h3>Phase 4: Scale & Hardware</h3>
                  <ul>
                    <li>10+ languages, pan-India expansion</li>
                    <li>Hardware prototypes (talking clocks)</li>
                    <li>B2B partnerships with temples</li>
                    <li>Target: 500,000 users</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Ask - Seeking Developers */}
      <section className={`${styles.section} ${styles.askSection}`}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <Code className={styles.icon} />
              We're Seeking Professional Developers
            </h2>
            <div className={styles.developersNeeded}>
              <p className={styles.hiringText}>
                We are in <strong>pre-launch phase</strong> and actively seeking skilled developers to build this platform with <strong>all features perfectly integrated</strong>. This is an opportunity to build something meaningful that impacts millions of lives.
              </p>
            </div>

            <div className={styles.rolesGrid}>
              <div className={styles.roleCard}>
                <Smartphone size={32} />
                <h3>Mobile Developers</h3>
                <p>React Native or Flutter experts to build cross-platform app with offline-first architecture</p>
              </div>
              <div className={styles.roleCard}>
                <Code size={32} />
                <h3>Full-Stack Engineers</h3>
                <p>Node.js/Python backend, React frontend, experience with scalable microservices</p>
              </div>
              <div className={styles.roleCard}>
                <MessageCircle size={32} />
                <h3>AI/ML Engineers</h3>
                <p>NLP, LLM fine-tuning, multilingual AI, voice recognition & synthesis</p>
              </div>
              <div className={styles.roleCard}>
                <Database size={32} />
                <h3>Backend & DevOps</h3>
                <p>Cloud infrastructure (AWS/GCP), databases, API design, CI/CD pipelines</p>
              </div>
            </div>

            <div className={styles.fundingBox}>
              <h3>Investment & Partnership Opportunities</h3>
              <div className={styles.fundingDetails}>
                <div className={styles.fundingItem}>
                  <strong>Stage:</strong> Pre-seed
                </div>
                <div className={styles.fundingItem}>
                  <strong>Seeking:</strong> $250K for development & team
                </div>
                <div className={styles.fundingItem}>
                  <strong>Use of Funds:</strong> Hiring developers, product development, beta launch
                </div>
                <div className={styles.fundingItem}>
                  <strong>Timeline:</strong> 6-month runway to beta launch
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Impact */}
      <section className={`${styles.section} ${styles.finalVisionSection}`}>
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
              Long-Term Vision
            </h2>
            <blockquote className={styles.mission}>
              "To become the default AI companion for spiritual understanding, cultural learning, and life guidance—trusted, accessible, and available to every household."
            </blockquote>
            
            <div className={styles.impactGrid}>
              <div className={styles.impactCard}>
                <div className={styles.impactNumber}>10M+</div>
                <p>Households served by 2030</p>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactNumber}>20+</div>
                <p>Languages supported</p>
              </div>
              <div className={styles.impactCard}>
                <div className={styles.impactNumber}>100%</div>
                <p>Cultural authenticity</p>
              </div>
            </div>

            <div className={styles.futurePlans}>
              <h3>Beyond Software</h3>
              <p>We're not just building an app—we're creating a <strong>daily companion embedded into users' routines</strong> through dedicated AI-powered hardware like talking clocks and home assistants that provide morning mantras, daily guidance, and spiritual reminders.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DEVELOPER RECRUITMENT */}
      <section className={`${styles.section} ${styles.recruitmentSection}`} style={{background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.8), rgba(26, 11, 46, 0.8))'}}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              <Code className={styles.icon} />
              The Ask - Join Our Pre-Launch Team
            </h2>
            
            <div className={styles.askContent} style={{marginTop: '3rem'}}>
              <div className={styles.askText} style={{textAlign: 'center', marginBottom: '3rem'}}>
                <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>We're Pre-Launch & Seeking Professional Developers</h3>
                <p style={{fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto'}}>Malola is in active development. We're looking for talented engineers who are passionate about cultural AI and want to build something meaningful that impacts millions.</p>
              </div>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
                <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2.5rem', textAlign: 'center'}}>
                  <Smartphone size={48} style={{color: '#7c3aed', marginBottom: '1rem'}} />
                  <h4 style={{fontSize: '1.4rem', marginBottom: '0.5rem'}}>Mobile Developers</h4>
                  <p style={{color: '#3b82f6', fontWeight: 600}}>React Native or Flutter</p>
                </div>
                <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2.5rem', textAlign: 'center'}}>
                  <Database size={48} style={{color: '#7c3aed', marginBottom: '1rem'}} />
                  <h4 style={{fontSize: '1.4rem', marginBottom: '0.5rem'}}>Backend Engineers</h4>
                  <p style={{color: '#3b82f6', fontWeight: 600}}>Node.js / Python</p>
                </div>
                <div style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '2.5rem', textAlign: 'center'}}>
                  <Code size={48} style={{color: '#7c3aed', marginBottom: '1rem'}} />
                  <h4 style={{fontSize: '1.4rem', marginBottom: '0.5rem'}}>AI/ML Engineers</h4>
                  <p style={{color: '#3b82f6', fontWeight: 600}}>NLP, LLM fine-tuning</p>
                </div>
              </div>

              <div style={{background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(59, 130, 246, 0.2))', border: '2px solid rgba(124, 58, 237, 0.5)', borderRadius: '20px', padding: '3rem', textAlign: 'center'}}>
                <h3 style={{fontSize: '2rem', marginBottom: '2rem'}}>💰 Funding Request: $250K Seed Round</h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem'}}>
                  <div style={{background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px'}}>
                    <strong style={{display: 'block', fontSize: '1.3rem', color: '#7c3aed'}}>$150K</strong> Development
                  </div>
                  <div style={{background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px'}}>
                    <strong style={{display: 'block', fontSize: '1.3rem', color: '#7c3aed'}}>$50K</strong> AI Infra
                  </div>
                  <div style={{background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px'}}>
                    <strong style={{display: 'block', fontSize: '1.3rem', color: '#7c3aed'}}>$30K</strong> Marketing
                  </div>
                </div>
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
            <h2>Ready to Build the Future of Cultural AI?</h2>
            <p>Join us in making ancient wisdom accessible to millions</p>
            <div className={styles.ctaButtons}>
              <a href="https://studio-mocha-tau-22.vercel.app/" className={styles.primaryBtn} target="_blank" rel="noopener noreferrer">
                View Product Demo <ArrowRight size={20} />
              </a>
              <a href="mailto:ph293815@gmail.com" className={styles.primaryBtn}>
                Join as Developer
              </a>
              <a href="mailto:ph293815@gmail.com" className={styles.secondaryBtn}>
                Investment Inquiry
              </a>
            </div>
            <div className={styles.contactInfo}>
              <p><strong>MCT (Malola Cosmic Technologies)</strong></p>
              <p>ph293815@gmail.com | malolacosmictech.com</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

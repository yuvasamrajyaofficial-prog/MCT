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
  Database
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
              <span>Pre-Launch - Seeking Developers</span>
            </div>
            <h1 className={styles.heroTitle}>
              MALOLA
              <span className={styles.gradient}>Culturally-Rooted AI Platform</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Ancient Wisdom Meets Modern Technology - Your Daily AI Companion for Spiritual & Cultural Guidance
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <strong>$50B</strong>
                <span>Global Market</span>
              </div>
              <div className={styles.statItem}>
                <strong>500M+</strong>
                <span>Potential Users</span>
              </div>
              <div className={styles.statItem}>
                <strong>4-in-1</strong>
                <span>Unified Platform</span>
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
                We are building a <strong>culturally rooted, AI-powered knowledge and guidance platform</strong> designed to serve everyday users—starting with Indian households and expanding globally. Our core product combines digital scriptures, audio libraries, astrology, and conversational AI into a single personalized experience.
              </p>
              <p className={styles.visionText}>
                Users can <strong>read, listen, ask questions, and receive guidance</strong> about life, spirituality, traditions, and daily decisions in their preferred language, making ancient and cultural knowledge accessible, conversational, and practical for modern life.
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
                <h3>4-in-1 Intelligent Platform</h3>
                <p className={styles.subtitle}>
                  All the features users need in one unified, personalized AI companion
                </p>
                <div className={styles.featureList}>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>Digital Scripture Library:</strong> Read & listen to sacred texts</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>Personalized Audio:</strong> Cultural stories, mantras, wisdom</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>AI Astrology:</strong> Personalized life guidance & predictions</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>Conversational AI:</strong> Text & voice assistant in your language</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>Vernacular-First:</strong> Hindi, Tamil, Telugu, Bengali & more</span>
                  </div>
                  <div className={styles.feature}>
                    <CheckCircle2 size={20} />
                    <span><strong>Future Hardware:</strong> AI talking clocks, home assistants</span>
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
            <div className={styles.marketOpportunityGrid}>
              <div className={styles.marketCard}>
                <div className={styles.marketLabel}>TAM</div>
                <div className={styles.marketValue}>$50B</div>
                <p>Global Wellness + Spiritual Guidance Market</p>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className={styles.marketCard}>
                <div className={styles.marketLabel}>SAM</div>
                <div className={styles.marketValue}>$30B</div>
                <p>Indian Spiritual & Wellness Market by 2028</p>
                <div className={styles.progressBar}>
                  <div className={styles.progress} style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className={styles.marketCard}>
                <div className={styles.marketLabel}>SOM</div>
                <div className={styles.marketValue}>$5B</div>
                <p>Our Target Segment (Tier 2/3 + Vernacular)</p>
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
                  <li>Basic scripture library</li>
                  <li>Limited audio content</li>
                  <li>Basic AI chat (10 msgs/day)</li>
                  <li>Daily horoscope</li>
                </ul>
              </div>
              <div className={`${styles.pricingCard} ${styles.featured}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <h3>Premium</h3>
                <div className={styles.price}>$4.99<span>/month</span></div>
                <ul className={styles.pricingFeatures}>
                  <li>Full scripture library</li>
                  <li>Unlimited audio content</li>
                  <li>Unlimited AI conversations</li>
                  <li>Personalized astrology</li>
                  <li>Voice assistant</li>
                  <li>Offline access</li>
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
                  <h4>Enterprise/B2B</h4>
                  <p>Partnerships with temples, religious institutions, and cultural organizations</p>
                </div>
                <div className={styles.streamCard}>
                  <h4>Hardware Devices</h4>
                  <p>AI-powered talking clocks, home assistants (launching 2027)</p>
                </div>
                <div className={styles.streamCard}>
                  <h4>Platform Integrations</h4>
                  <p>API access for third-party apps and smart devices</p>
                </div>
              </div>
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

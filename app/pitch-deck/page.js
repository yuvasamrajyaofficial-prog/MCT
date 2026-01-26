"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, Users, Target, Zap, Globe, DollarSign, BookOpen, Mic, Star, 
  MessageCircle, Sparkles, ArrowRight, CheckCircle2, Code, Smartphone, Database, 
  PieChart, BarChart3, Server
} from "lucide-react";
import styles from "./PitchDeck.module.css";

export default function PitchDeckPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className={styles.main}>
      
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className={styles.badge}>
              <Sparkles size={16} />
              <span>Pre-Launch - Seeking Developers & Investment</span>
            </div>
            <h1 className={styles.heroTitle}>
              MALOLA
              <span className={styles.gradient}>Complete Cultural AI Ecosystem</span>
            </h1>
            <p style={{fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '2rem'}}>
              Scriptures • Audio • AI Chat • Astrology • Soul Matching • Book Store
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}><strong>$256B</strong><span>Total Market (TAM)</span></div>
              <div className={styles.statItem}><strong>700M+</strong><span>Indian Smartphones</span></div>
              <div className={styles.statItem}><strong>49%</strong><span>Astrology CAGR</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VISION SECTION */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}><Target className={styles.icon} /> Our Vision</h2>
          <p style={{fontSize: '1.5rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6'}}>
            We are building the <strong>first unified cultural AI ecosystem</strong> that combines digital scriptures, audio wisdom, personalized astrology, and soul matching into a single, daily-use platform for the modern Indian household.
          </p>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}><Users className={styles.icon} /> The Problem: Fragmentation</h2>
          <div className={styles.grid4}>
            <div className={styles.card}>
              <BookOpen size={40} className={styles.cardIcon} />
              <h3>Static Apps</h3>
              <p>Existing scripture apps are just PDFs. No interaction, no audio, no AI guidance.</p>
            </div>
            <div className={styles.card}>
              <Star size={40} className={styles.cardIcon} />
              <h3>Manual Astrology</h3>
              <p>Expensive consultations ($20+), waiting days for reports, generic daily horoscopes.</p>
            </div>
            <div className={styles.card}>
              <Mic size={40} className={styles.cardIcon} />
              <h3>Generic Audio</h3>
              <p>Spotify/YouTube lack cultural context and personalized spiritual playlists.</p>
            </div>
            <div className={styles.card}>
              <Globe size={40} className={styles.cardIcon} />
              <h3>Western AI</h3>
              <p>ChatGPT/Gemini lack deep understanding of Indian traditions and vernacular nuances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION SECTION */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}><Zap className={styles.icon} /> The Solution: 7-in-1 Ecosystem</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center'}}>
            <div style={{flex: 1, minWidth: '300px'}}>
              <ul className={styles.featureList}>
                <li><strong>📖 Digital Scriptures:</strong> Searchable, interactive sacred texts.</li>
                <li><strong>🎧 Audio Library:</strong> Mantras, stories, and wisdom on the go.</li>
                <li><strong>🤖 AI Chat (Text/Voice):</strong> "What does the Gita say about anxiety?"</li>
                <li><strong>⭐ AI Astrology:</strong> Instant birth charts and daily insights.</li>
                <li><strong>💕 Soul Matching:</strong> Compatibility checks for marriage.</li>
                <li><strong>📚 Physical Books:</strong> E-commerce for sacred texts.</li>
                <li><strong>🗣️ Vernacular First:</strong> 10+ Indian languages supported.</li>
              </ul>
            </div>
            <div style={{flex: 1, minWidth: '300px'}}>
              <img src="/images/malola-full-showcase.jpg" alt="App Showcase" className={styles.chartImage} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. MARKET OPPORTUNITY */}
      <section className={`${styles.section} ${styles.marketSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}><TrendingUp className={styles.icon} /> Market Opportunity</h2>
          
          <img src="/images/market-opportunity-funnel.png" alt="Market Funnel" className={styles.chartImage} />
          
          <div className={styles.marketGrid}>
            <div className={styles.marketCard}>
              <div className={styles.marketValue}>$256B</div>
              <h3>TAM</h3>
              <p>Global Mental Wellness + Spiritual Market</p>
            </div>
            <div className={styles.marketCard}>
              <div className={styles.marketValue}>$72B</div>
              <h3>SAM</h3>
              <p>Indian Wellness + Digital Spiritual Market</p>
            </div>
            <div className={styles.marketCard}>
              <div className={styles.marketValue}>$8.1B</div>
              <h3>SOM</h3>
              <p>Astrology Apps + Vernacular AI Platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPETITIVE ANALYSIS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}><Globe className={styles.icon} /> Competitive Analysis</h2>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Scripture Apps</th>
                  <th>Astrology Apps</th>
                  <th>Generic AI</th>
                  <th className={styles.highlight}>MALOLA</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Digital Scriptures</td><td>✅</td><td>❌</td><td>❌</td><td className={styles.highlight}>✅</td></tr>
                <tr><td>AI Chatbot</td><td>❌</td><td>❌</td><td>Generic</td><td className={styles.highlight}>✅ Cultural</td></tr>
                <tr><td>Astrology</td><td>❌</td><td>Manual</td><td>❌</td><td className={styles.highlight}>✅ AI-Driven</td></tr>
                <tr><td>Soul Matching</td><td>❌</td><td>❌</td><td>❌</td><td className={styles.highlight}>✅ Unique</td></tr>
                <tr><td>Physical Books</td><td>❌</td><td>❌</td><td>❌</td><td className={styles.highlight}>✅ Unique</td></tr>
                <tr><td>Vernacular Voice</td><td>❌</td><td>❌</td><td>Partial</td><td className={styles.highlight}>✅ Native</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. BUSINESS MODEL */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}><DollarSign className={styles.icon} /> Business Model</h2>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3>Free Tier</h3>
              <div className={styles.price}>$0<span>/mo</span></div>
              <ul className={styles.featureList}>
                <li>✅ Basic Scriptures</li>
                <li>✅ Daily Horoscope</li>
                <li>🎯 <strong>Ad-Supported</strong></li>
                <li>❌ No AI Voice / Soul Match</li>
              </ul>
            </div>
            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div style={{position:'absolute', top:0, right:0, background:'#7c3aed', padding:'5px 15px', borderRadius:'0 20px 0 20px', fontSize:'0.8rem'}}>POPULAR</div>
              <h3>Premium</h3>
              <div className={styles.price}>$4.99<span>/mo</span></div>
              <ul className={styles.featureList}>
                <li>✅ <strong>Ad-Free</strong></li>
                <li>✅ Unlimited AI Chat</li>
                <li>✅ Full Astrology Reports</li>
                <li>✅ Soul Matching</li>
              </ul>
            </div>
            <div className={styles.pricingCard}>
              <h3>Family</h3>
              <div className={styles.price}>$9.99<span>/mo</span></div>
              <ul className={styles.featureList}>
                <li>✅ 5 Accounts</li>
                <li>✅ Family Astrology</li>
                <li>✅ Priority Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. REVENUE STREAMS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}><PieChart className={styles.icon} /> Revenue Streams</h2>
          <img src="/images/revenue-pie-chart.png" alt="Revenue Pie" className={styles.chartImage} style={{maxWidth:'600px'}} />
          <div className={styles.grid4} style={{marginTop:'3rem'}}>
            <div className={styles.card}><h4>📢 Ads</h4><p>$2-5/user/yr</p></div>
            <div className={styles.card}><h4>📚 Books</h4><p>10-20% Margin</p></div>
            <div className={styles.card}><h4>⭐ Consults</h4><p>Premium Astrology</p></div>
            <div className={styles.card}><h4>🏢 B2B</h4><p>Temple Partners</p></div>
          </div>
        </div>
      </section>

      {/* 9. UNIT ECONOMICS */}
      <section className={`${styles.section} ${styles.economicsSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}><BarChart3 className={styles.icon} /> Unit Economics</h2>
          <div className={styles.economicsGrid}>
            <div className={styles.econCard}><div className={styles.econValue}>$15</div><p>CAC</p></div>
            <div className={styles.econCard}><div className={styles.econValue}>$180</div><p>LTV (3yr)</p></div>
            <div className={styles.econCard}><div className={styles.econValue}>12x</div><p>LTV:CAC</p></div>
            <div className={styles.econCard}><div className={styles.econValue}>85%</div><p>Gross Margin</p></div>
            <div className={styles.econCard}><div className={styles.econValue}>8%</div><p>Conversion</p></div>
            <div className={styles.econCard}><div className={styles.econValue}>18mo</div><p>Retention</p></div>
          </div>
        </div>
      </section>

      {/* 10. DEVELOPER RECRUITMENT */}
      <section className={`${styles.section} ${styles.recruitmentSection}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}><Code className={styles.icon} /> We Are Hiring</h2>
          <p style={{textAlign:'center', fontSize:'1.2rem', marginBottom:'3rem'}}>
            Join our pre-launch team to build the future of cultural AI.
          </p>
          
          <div className={styles.rolesGrid}>
            <div className={styles.roleCard}>
              <Smartphone size={32} style={{color:'#7c3aed', marginBottom:'1rem'}}/>
              <h3>Mobile Devs</h3>
              <p>React Native / Flutter</p>
            </div>
            <div className={styles.roleCard}>
              <Server size={32} style={{color:'#7c3aed', marginBottom:'1rem'}}/>
              <h3>Backend</h3>
              <p>Node.js / Python / AWS</p>
            </div>
            <div className={styles.roleCard}>
              <Sparkles size={32} style={{color:'#7c3aed', marginBottom:'1rem'}}/>
              <h3>AI Engineers</h3>
              <p>NLP / LLM Fine-tuning</p>
            </div>
          </div>

          <div className={styles.fundingBox}>
            <h3 style={{fontSize:'2rem', marginBottom:'1rem'}}>💰 Seeking $250K Seed</h3>
            <p>To fund development, AI infrastructure, and initial marketing for beta launch.</p>
          </div>
        </div>
      </section>

      {/* 11. CTA */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <h2 style={{fontSize:'3rem', marginBottom:'2rem'}}>Ready to Build the Future?</h2>
          <button className={styles.ctaButton}>
            Join the Team <ArrowRight size={20} />
          </button>
        </div>
      </section>

    </main>
  );
}

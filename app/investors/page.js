"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe2,
  Cpu,
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import styles from "./Investors.module.css";

const SLIDES = [
  {
    id: "overview",
    number: "01",
    title: "Executive Summary",
    subtitle: "MCT Retail: The Offline-First 3D Retail Operating System",
    content: (
      <div>
        <p className={styles.deckPara}>
          <strong>Malola Cosmic Tech (MCT)</strong> is raising a <strong>$350,000 Seed / Pre-Seed Round</strong> to scale <strong>MCT Retail</strong> — a next-generation Enterprise Retail OS and 3D Point of Sale suite engineered for modern merchants.
        </p>
        <div className={styles.deckGrid2}>
          <div className={styles.deckCard}>
            <span className={styles.deckTag}>Problem</span>
            <h4>$1.3T Retail Downtime Crisis</h4>
            <p>Cloud-dependent POS systems freeze during network dropouts, proprietary hardware locks merchants into costly traps, and clunky UI slows checkout lines.</p>
          </div>
          <div className={styles.deckCardHighlight}>
            <span className={styles.deckTagActive}>Solution</span>
            <h4>MCT Retail OS</h4>
            <p>100% offline-operable PWA, 3D spatial store mapping, sub-50ms barcode scanning latency, and automated multi-store cloud inventory sync.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "problem",
    number: "02",
    title: "The Market Problem",
    subtitle: "Why Traditional Point of Sale Systems are Broken",
    content: (
      <div>
        <p className={styles.deckPara}>
          Brick-and-mortar retail accounts for over 80% of global retail commerce, yet 92% of independent and mid-tier retail businesses run on legacy, fragile software:
        </p>
        <div className={styles.deckGrid3}>
          <div className={styles.problemCard}>
            <div className={styles.probNum}>01</div>
            <h4>Cloud Outage Vulnerability</h4>
            <p>When the internet flickers or drops, cloud-only POS systems crash. Cashiers cannot bill customers, leading to abandoned carts and lost revenue.</p>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.probNum}>02</div>
            <h4>Hardware Monopolies</h4>
            <p>Legacy vendors force merchants into proprietary, overpriced terminals ($2,500 - $5,000 upfront) with expensive annual maintenance contracts.</p>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.probNum}>03</div>
            <h4>Siloed Inventory Chaos</h4>
            <p>Multi-location retail chains suffer from delayed inventory counts, manual reconciliation, and zero real-time visibility into SKU depletion rates.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "solution",
    number: "03",
    title: "The MCT Retail Solution",
    subtitle: "Built from Ground Up for Speed, Resilience, and Elegance",
    content: (
      <div>
        <div className={styles.solutionList}>
          <div className={styles.solRow}>
            <div className={styles.solIcon}><ShieldCheck size={28} color="#06B6D4" /></div>
            <div>
              <h4>100% Offline-First Architecture (Zero Downtime)</h4>
              <p>Powered by Service Workers, IndexedDB, and CacheStorage. Cashiers can continue billing, issuing digital and thermal receipts, and taking tenders even during prolonged internet blackouts.</p>
            </div>
          </div>
          <div className={styles.solRow}>
            <div className={styles.solIcon}><Zap size={28} color="#F59E0B" /></div>
            <div>
              <h4>Sub-50ms Barcode Recognition & 3D Spatial Navigation</h4>
              <p>Cashiers navigate store aisles visually through hardware-accelerated 3D floor maps, searching and scanning 50,000+ SKUs with instantaneous response time.</p>
            </div>
          </div>
          <div className={styles.solRow}>
            <div className={styles.solIcon}><Cpu size={28} color="#8B5CF6" /></div>
            <div>
              <h4>Hardware Agnostic — Zero Proprietary Lock-In</h4>
              <p>Runs seamlessly on any browser, iPad, Android tablet, touchscreen terminal, or legacy PC. Plug-and-play with any standard USB/Bluetooth barcode scanner and thermal receipt printer.</p>
            </div>
          </div>
          <div className={styles.solRow}>
            <div className={styles.solIcon}><Globe2 size={28} color="#10B981" /></div>
            <div>
              <h4>Real-Time Multi-Warehouse Cloud Sync</h4>
              <p>Automatic background synchronization with conflict-free replication algorithms when connectivity is restored. Live executive margin telemetry and GST tax breakdown.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "market",
    number: "04",
    title: "Market Opportunity",
    subtitle: "$40+ Billion Global Retail POS Addressable Market",
    content: (
      <div>
        <div className={styles.tamGrid}>
          <div className={styles.tamCard}>
            <div className={styles.tamTier}>TAM</div>
            <div className={styles.tamVal}>$40.2 Billion</div>
            <div className={styles.tamLabel}>Global Retail POS Software Market by 2030 (13.9% CAGR)</div>
          </div>
          <div className={styles.tamCard}>
            <div className={styles.tamTier}>SAM</div>
            <div className={styles.tamVal}>$7.8 Billion</div>
            <div className={styles.tamLabel}>SMB & Mid-Market Retail in India & Emerging Asia-Pacific</div>
          </div>
          <div className={styles.tamCard}>
            <div className={styles.tamTier}>SOM (Year 3)</div>
            <div className={styles.tamVal}>$48 Million</div>
            <div className={styles.tamLabel}>20,000+ Stores across high-density Indian urban retail hubs</div>
          </div>
        </div>
        <p className={styles.deckPara} style={{ marginTop: "1.5rem" }}>
          In India alone, over <strong>30 Million unorganized and semi-organized retail storefronts</strong> are actively digitizing their billing, GST compliance, and omnichannel inventory management.
        </p>
      </div>
    )
  },
  {
    id: "business",
    number: "05",
    title: "Business Model & Economics",
    subtitle: "Predictable High-Margin SaaS + Payments Take Rate",
    content: (
      <div>
        <div className={styles.deckGrid3}>
          <div className={styles.pricingTier}>
            <div className={styles.ptName}>Starter Store</div>
            <div className={styles.ptPrice}>₹1,999 <span>/ mo</span></div>
            <p>Single terminal, offline PWA POS, UPI/card billing, inventory management up to 5,000 SKUs.</p>
          </div>
          <div className={styles.pricingTierHighlight}>
            <span className={styles.popularBadge}>Most Scalable</span>
            <div className={styles.ptName}>Multi-Store Pro</div>
            <div className={styles.ptPrice}>₹4,999 <span>/ mo</span></div>
            <p>Up to 5 terminals, 3D store mapping, multi-store stock transfer, automated GST invoices & live analytics.</p>
          </div>
          <div className={styles.pricingTier}>
            <div className={styles.ptName}>Enterprise Chain</div>
            <div className={styles.ptPrice}>₹14,999+ <span>/ mo</span></div>
            <p>Unlimited terminals, dedicated cloud cluster, ERP/SAP integration, custom loyalty and warehouse APIs.</p>
          </div>
        </div>
        <div className={styles.unitMetrics}>
          <div className={styles.uMetric}>
            <strong>85%+</strong>
            <span>Software Gross Margin</span>
          </div>
          <div className={styles.uMetric}>
            <strong>8.5x</strong>
            <span>Target LTV : CAC Ratio</span>
          </div>
          <div className={styles.uMetric}>
            <strong>0.20% - 0.35%</strong>
            <span>Payment Processing Take Rate</span>
          </div>
          <div className={styles.uMetric}>
            <strong>&lt; 5%</strong>
            <span>Target Annual Merchant Churn</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "traction",
    number: "06",
    title: "Traction & Product Status",
    subtitle: "Working Production MVP Live on Cloud",
    content: (
      <div>
        <div className={styles.tractionHero}>
          <div className={styles.thBadge}>LIVE DEPLOYMENT TESTED</div>
          <h3>MCT Retail is already built & running in production</h3>
          <p>
            Unlike theoretical pitch decks, our engineering is live, functional, and ready for merchant onboarding. Experience the actual point of sale terminal right in your browser.
          </p>
          <div className={styles.thActions}>
            <a
              href="https://mct-retail-production.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.thBtn}
            >
              Test Live Demo at Railway Cloud <ExternalLink size={16} />
            </a>
          </div>
        </div>
        <div className={styles.milestonesGrid}>
          <div className={styles.mStone}>
            <span className={styles.mDate}>Q1 2026</span>
            <h5>MVP & Core Offline Engine</h5>
            <p>Completed PWA architecture, 3D floor map navigator, and sub-50ms barcode checkout.</p>
          </div>
          <div className={styles.mStone}>
            <span className={styles.mDate}>Q2 2026</span>
            <h5>Pilot Rollout (50 Stores)</h5>
            <p>Deploying pilots in Bangalore and Karnataka retail clusters, native Android wrapper for thermal POS terminals.</p>
          </div>
          <div className={styles.mStone}>
            <span className={styles.mDate}>Q3-Q4 2026</span>
            <h5>500 Stores & $50K MRR</h5>
            <p>Direct merchant sales force, integration with quick-commerce fulfillment and distributor inventory APIs.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "funds",
    number: "07",
    title: "Use of Funds ($350K)",
    subtitle: "18-Month Runway to 500+ Active Retail Stores",
    content: (
      <div>
        <div className={styles.deckGrid2}>
          <div className={styles.fundsCard}>
            <h4>Capital Allocation</h4>
            <ul className={styles.fundsList}>
              <li>
                <div className={styles.fundHeader}>
                  <span>Product Engineering & 3D Spatial R&D</span>
                  <strong>40% ($140K)</strong>
                </div>
                <div className={styles.fundBar}><div style={{ width: "40%", background: "#8B5CF6" }} /></div>
              </li>
              <li>
                <div className={styles.fundHeader}>
                  <span>Merchant Acquisition & Regional Pilots</span>
                  <strong>30% ($105K)</strong>
                </div>
                <div className={styles.fundBar}><div style={{ width: "30%", background: "#06B6D4" }} /></div>
              </li>
              <li>
                <div className={styles.fundHeader}>
                  <span>Key Technical & Field Hires</span>
                  <strong>15% ($52.5K)</strong>
                </div>
                <div className={styles.fundBar}><div style={{ width: "15%", background: "#10B981" }} /></div>
              </li>
              <li>
                <div className={styles.fundHeader}>
                  <span>Infrastructure, Hardware Testing & Legal</span>
                  <strong>15% ($52.5K)</strong>
                </div>
                <div className={styles.fundBar}><div style={{ width: "15%", background: "#F59E0B" }} /></div>
              </li>
            </ul>
          </div>
          <div className={styles.fundsTargetCard}>
            <h4>18-Month Target Outcomes</h4>
            <div className={styles.targetItem}>
              <CheckCircle2 size={20} color="#10B981" />
              <span><strong>500+ Paid Retail Outlets</strong> across Tier 1 & 2 cities</span>
            </div>
            <div className={styles.targetItem}>
              <CheckCircle2 size={20} color="#10B981" />
              <span><strong>$50,000+ Monthly Recurring Revenue ($600K ARR run-rate)</strong></span>
            </div>
            <div className={styles.targetItem}>
              <CheckCircle2 size={20} color="#10B981" />
              <span><strong>Series A Readiness</strong> with institutional venture backing</span>
            </div>
            <div className={styles.targetItem}>
              <CheckCircle2 size={20} color="#10B981" />
              <span>Integrated hardware ecosystem (scanners, weighing scales, split billing)</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "founder",
    number: "08",
    title: "The Founder & Leadership",
    subtitle: "Engineering-First Vision with High Execution Velocity",
    content: (
      <div>
        <div className={styles.founderBox}>
          <div className={styles.fInfo}>
            <h3>Prashant Hiremath</h3>
            <span className={styles.fRole}>Founder & Chief Architect — Malola Cosmic Tech</span>
            <p>
              Full-stack software architect and product builder with hands-on mastery of Next.js, WebGL, real-time distributed sync, and scalable cloud architectures. Creator of MCT Retail, Lola AI, Zekkers, and GovtNaukri4U.
            </p>
            <div className={styles.fHighlights}>
              <div className={styles.fhItem}>
                <strong>Location</strong>
                <span>India (Karnataka & Bangalore Tech Corridor)</span>
              </div>
              <div className={styles.fhItem}>
                <strong>Philosophy</strong>
                <span>Ancient Dedication Meets High-Performance Deep Tech</span>
              </div>
              <div className={styles.fhItem}>
                <strong>Direct Founder WhatsApp</strong>
                <a href="https://wa.me/919902857694" target="_blank" rel="noopener noreferrer">
                  +91 99028 57694
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function InvestorsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [ticketSize, setTicketSize] = useState("$25,000 - $50,000");

  const handleInvestorSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const firm = formData.get("firm") || "Angel Investor";
    const notes = formData.get("notes") || "";

    const messageContent = `[INVESTOR SEED INQUIRY]\nFirm/Entity: ${firm}\nTarget Ticket: ${ticketSize}\nPhone: ${phone}\nNotes: ${notes}`;

    try {
      await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${name} (${firm})`,
          email,
          phone: phone || "Not provided",
          service: `Investor Seed Round: ${ticketSize}`,
          message: messageContent,
        }),
      });

      setStatus("success");
      e.target.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={styles.pulseDot} />
            <span>MALOLA COSMIC TECH — SEED CAPITAL INITIATIVE</span>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Back the Future of <br />
            <span className="text-gradient">Enterprise Retail OS & 3D POS</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            MCT Retail is solving the $1.3 Trillion brick-and-mortar checkout & inventory failure crisis. Raising a <strong>$350,000 Seed / Pre-Seed Round</strong> to onboard 500+ retail merchants across high-volume retail categories.
          </motion.p>

          <motion.div
            className={styles.heroMetrics}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.hMetric}>
              <span className={styles.hmLabel}>TARGET RAISE</span>
              <span className={styles.hmValue}>$350,000</span>
              <span className={styles.hmSub}>Pre-Seed / Seed SAFE</span>
            </div>
            <div className={styles.hMetric}>
              <span className={styles.hmLabel}>PRODUCT STATUS</span>
              <span className={styles.hmValue} style={{ color: "#10b981" }}>Live Production</span>
              <span className={styles.hmSub}>Tested on Railway</span>
            </div>
            <div className={styles.hMetric}>
              <span className={styles.hmLabel}>GLOBAL TAM</span>
              <span className={styles.hmValue}>$40.2B</span>
              <span className={styles.hmSub}>Retail POS Industry</span>
            </div>
            <div className={styles.hMetric}>
              <span className={styles.hmLabel}>GROSS MARGIN</span>
              <span className={styles.hmValue}>85%+</span>
              <span className={styles.hmSub}>SaaS Software Tier</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#deck" className={styles.primaryAction}>
              Explore Pitch Deck ↓
            </a>
            <a
              href="https://mct-retail-production.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoAction}
            >
              Launch Live 3D POS Demo ↗
            </a>
            <a href="#invest-form" className={styles.termAction}>
              Request Term Sheet & Data Room
            </a>
          </motion.div>
        </div>
      </section>

      {/* Interactive Deck Viewer */}
      <section id="deck" className={styles.deckSection}>
        <div className="container">
          <div className={styles.deckHeader}>
            <div>
              <span className={styles.deckCategory}>INVESTOR PRESENTATION</span>
              <h2 className={styles.deckTitle}>MCT Retail — Pitch Deck</h2>
            </div>
            <div className={styles.deckControls}>
              <a
                href="https://wa.me/919902857694?text=Hi%20Prashant,%20I%20reviewed%20the%20MCT%20Retail%20deck%20and%20would%20like%20to%20schedule%20a%20founder%20call."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappDirect}
              >
                <MessageSquare size={16} /> Chat with Founder
              </a>
            </div>
          </div>

          <div className={styles.deckContainer}>
            {/* Slide Navigation Tabs */}
            <div className={styles.slideTabs}>
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`${styles.slideTab} ${activeSlide === idx ? styles.slideTabActive : ""}`}
                >
                  <span className={styles.tabNumber}>{slide.number}</span>
                  <span className={styles.tabTitle}>{slide.title}</span>
                </button>
              ))}
            </div>

            {/* Slide Content Display */}
            <div className={styles.slideCard}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.slideTop}>
                    <span className={styles.slideIndex}>SLIDE {SLIDES[activeSlide].number} OF {SLIDES.length}</span>
                    <h3 className={styles.slideHeading}>{SLIDES[activeSlide].title}</h3>
                    <p className={styles.slideSub}>{SLIDES[activeSlide].subtitle}</p>
                  </div>

                  <div className={styles.slideBody}>
                    {SLIDES[activeSlide].content}
                  </div>

                  <div className={styles.slideFooter}>
                    <button
                      disabled={activeSlide === 0}
                      onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
                      className={styles.navBtn}
                    >
                      ← Previous Slide
                    </button>
                    <div className={styles.dotIndicators}>
                      {SLIDES.map((_, i) => (
                        <span
                          key={i}
                          onClick={() => setActiveSlide(i)}
                          className={`${styles.dot} ${activeSlide === i ? styles.dotActive : ""}`}
                        />
                      ))}
                    </div>
                    <button
                      disabled={activeSlide === SLIDES.length - 1}
                      onClick={() => setActiveSlide((prev) => Math.min(SLIDES.length - 1, prev + 1))}
                      className={styles.navBtn}
                    >
                      Next Slide →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Callout Banner */}
      <section className={styles.demoBannerSection}>
        <div className="container">
          <div className={styles.demoBanner}>
            <div className={styles.demoBannerText}>
              <span className={styles.demoBadge}>LIVE PRODUCT DEMONSTRATION</span>
              <h3>Don&apos;t just read our pitch deck. Test the actual software right now.</h3>
              <p>
                Experience the lightning-fast scan-to-cart latency, offline caching resilience, 3D store mapping, and real-time inventory management.
              </p>
            </div>
            <a
              href="https://mct-retail-production.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.demoBannerBtn}
            >
              Launch Live MCT Retail Terminal <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Investment Inquiry / Term Sheet Form */}
      <section id="invest-form" className={styles.formSection}>
        <div className="container">
          <div className={styles.formWrapper}>
            <div className={styles.formInfo}>
              <span className={styles.formTag}>SYNDICATE & ANGEL REGISTRATION</span>
              <h2>Request Seed Term Sheet & Data Room Access</h2>
              <p>
                Whether you are an angel investor, family office, or early-stage venture fund, we welcome strategic partners who believe in the future of offline-first retail infrastructure.
              </p>

              <div className={styles.dealTerms}>
                <div className={styles.termRow}>
                  <span>Entity:</span>
                  <strong>Malola Cosmic Tech (MCT)</strong>
                </div>
                <div className={styles.termRow}>
                  <span>Target Project:</span>
                  <strong>MCT Retail</strong>
                </div>
                <div className={styles.termRow}>
                  <span>Round Structure:</span>
                  <strong>Pre-Seed / Seed ($350,000 Target)</strong>
                </div>
                <div className={styles.termRow}>
                  <span>Standard Ticket Size:</span>
                  <strong>$5,000 to $100,000+</strong>
                </div>
                <div className={styles.termRow}>
                  <span>Founder Contact:</span>
                  <strong>Prashant Hiremath (CEO)</strong>
                </div>
              </div>

              <div className={styles.directContactBar}>
                <span>Need quick clarification?</span>
                <a
                  href="https://wa.me/919902857694?text=Hi%20Prashant,%20I'd%20like%20to%20discuss%20investing%20in%20MCT%20Retail."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.founderWa}
                >
                  WhatsApp Prashant directly (+91 99028 57694) →
                </a>
              </div>
            </div>

            <div className={styles.formCard}>
              <h3>Investor Interest Form</h3>
              <p className={styles.fcSub}>Submit your details to receive our financial projections, cap table overview, and term sheet.</p>

              {status === "success" ? (
                <div className={styles.successState}>
                  <CheckCircle2 size={48} color="#10B981" />
                  <h4>Inquiry Successfully Received</h4>
                  <p>Thank you for your interest in MCT Retail. Prashant Hiremath will review your profile and reach out within 12 hours with our investor data room link.</p>
                  <button onClick={() => setStatus("")} className={styles.resetBtn}>Submit Another Response</button>
                </div>
              ) : (
                <form onSubmit={handleInvestorSubmit} className={styles.investorForm}>
                  <div className={styles.inputGroup}>
                    <label>Full Name *</label>
                    <input type="text" name="name" required placeholder="e.g. Rahul Sharma" />
                  </div>

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label>Work Email *</label>
                      <input type="email" name="email" required placeholder="name@fund.com" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>WhatsApp / Phone *</label>
                      <input type="tel" name="phone" required placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Firm / Syndicate / Angel Affiliation</label>
                    <input type="text" name="firm" placeholder="e.g. Angel Investor / Venture Capital" />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Intended Investment Ticket Range</label>
                    <div className={styles.ticketPills}>
                      {[
                        "$5,000 - $10,000",
                        "$10,000 - $25,000",
                        "$25,000 - $50,000",
                        "$50,000 - $100,000",
                        "Lead Check ($100K+)"
                      ].map((tier) => (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setTicketSize(tier)}
                          className={`${styles.ticketBtn} ${ticketSize === tier ? styles.ticketBtnActive : ""}`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Questions or Notes for Founder</label>
                    <textarea name="notes" rows={3} placeholder="Tell us about your background or specific questions regarding MCT Retail's pilot metrics..." />
                  </div>

                  <button type="submit" disabled={loading} className={styles.submitBtn}>
                    {loading ? "Transmitting Information..." : "Request Data Room & Term Sheet 🚀"}
                  </button>

                  <p className={styles.disclaimer}>
                    Confidentiality guaranteed. All information provided is kept strictly private between you and Malola Cosmic Tech.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

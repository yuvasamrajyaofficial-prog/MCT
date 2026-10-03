import ProductLayout from "@/components/ProductLayout";

export const metadata = {
  title: "MCT Retail — Enterprise Retail OS & 3D POS | Malola Cosmic Tech",
  description: "Enterprise Retail Operating System & 3D Point of Sale Suite engineered by Prashant Hiremath at Malola Cosmic Tech (MCT). Currently raising a $350K Seed Round.",
};

export default function MCTRetailPage() {
  const features = [
    "Enterprise 3D Point of Sale (POS) checkout interface with lightning-fast scan-to-cart latency",
    "Offline-first Progressive Web App (PWA) architecture with automatic background cache sync",
    "Real-time multi-location inventory synchronization with automated replenishment alerts",
    "Comprehensive billing engine with GST compliance, tax breakdown, and instant digital receipt issuance",
    "Live executive dashboard monitoring sales velocity, profit margins, and cashier throughput",
    "Hardware-agnostic design supporting barcode scanners, thermal printers, and cash drawers",
  ];

  const techStack = [
    "React",
    "Next.js",
    "PWA / Service Worker",
    "WebGL / Three.js",
    "PostgreSQL",
    "Railway Cloud",
  ];

  const caseStudy = {
    problem: "The Challenge",
    solution: "Traditional legacy POS systems lock merchants into expensive proprietary hardware, charge exorbitant annual maintenance fees, and fail completely during internet outages. MCT Retail provides a cloud-native, 3D-accelerated POS operating seamlessly offline and auto-syncing with cloud servers upon reconnection.",
    stats: [
      { value: "100%", label: "Offline Operable" },
      { value: "<50ms", label: "Barcode Scan Latency" },
      { value: "$350K", label: "Seed Round Open" },
    ],
  };

  return (
    <ProductLayout
      title="MCT Retail"
      description="Enterprise Retail Operating System & 3D Point of Sale Suite engineered by Prashant Hiremath at Malola Cosmic Tech (MCT). Combining lightning-fast offline-first checkout speeds with cloud-scale inventory management, rich 3D spatial analytics, and universal hardware support."
      features={features}
      techStack={techStack}
      liveLink="https://mct-retail-production.up.railway.app/"
      image="/images/mct-retail-screenshot.png"
      caseStudy={caseStudy}
    >
      <div style={{
        background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))",
        border: "1px solid rgba(56, 189, 248, 0.35)",
        borderRadius: "16px",
        padding: "24px",
        marginBottom: "32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px"
      }}>
        <div>
          <span style={{
            background: "#10b981",
            color: "#0f172a",
            fontWeight: 800,
            fontSize: "0.7rem",
            padding: "3px 8px",
            borderRadius: "9999px",
            letterSpacing: "0.08em"
          }}>
            NOW RAISING SEED CAPITAL
          </span>
          <h4 style={{ color: "#fff", fontSize: "1.3rem", marginTop: "8px", marginBottom: "4px" }}>
            Invest in the Future of Offline-First Retail OS
          </h4>
          <p style={{ color: "#94a3b8", fontSize: "0.9rem", margin: 0 }}>
            Malola Cosmic Tech is raising $350K Pre-Seed / Seed to onboard 500+ retail storefronts.
          </p>
        </div>
        <a
          href="/investors"
          style={{
            background: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "50px",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "0.9rem",
            boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)"
          }}
        >
          View Pitch Deck & Data Room →
        </a>
      </div>

      <p>
        MCT Retail transforms modern brick-and-mortar storefronts into ultra-efficient retail powerhouses. Engineered with zero compromises on reliability, the platform runs fluidly on any web browser, tablet, or existing desktop terminal.
      </p>

      <h3>What We Built</h3>
      <ul>
        <li>Engineered an offline-first transactional engine using CacheStorage and Service Workers to prevent downtime during network drops</li>
        <li>Implemented high-concurrency stock tracking capable of managing tens of thousands of SKUs across multiple warehouses</li>
        <li>Integrated instant barcode scanning and interactive 3D store mapping for rapid cashier navigation</li>
        <li>Built dynamic payment processing supporting UPI, credit cards, split-tenders, and credit ledger systems</li>
        <li>Architected an analytics pipeline generating hourly sales velocity breakdowns and stock depletion heatmaps</li>
      </ul>

      <h3>The Architectural Advantage</h3>
      <div className="infoGrid">
        <div className="infoCard">
          <h4>Offline-First Resilience</h4>
          <p>
            Cashiers can complete transactions, print receipts, and manage sales even without an internet connection. The system automatically syncs every batch once connectivity resumes.
          </p>
        </div>
        <div className="infoCard">
          <h4>3D & High-Speed POS</h4>
          <p>
            Modern graphical acceleration allows cashiers to navigate spatial floor maps, select shelves visually, and search thousands of inventory items in sub-millisecond speeds.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}

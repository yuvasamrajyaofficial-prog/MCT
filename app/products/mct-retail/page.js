import ProductLayout from "@/components/ProductLayout";

export const metadata = {
  title: "MCT Retail — Enterprise Retail OS & 3D POS | PraBaS Digital",
  description: "Enterprise Retail Operating System & 3D Point of Sale Suite designed and developed by Prashant Hiremath, featuring offline-first PWA caching and inventory synchronization.",
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
      { value: "3D", label: "POS Experience" },
    ],
  };

  return (
    <ProductLayout
      title="MCT Retail"
      description="Enterprise Retail Operating System & 3D Point of Sale Suite engineered by Prashant Hiremath. Combining lightning-fast offline-first checkout speeds with cloud-scale inventory management and rich real-time visual analytics."
      features={features}
      techStack={techStack}
      liveLink="https://mct-retail-production.up.railway.app/"
      image="/images/mct-retail-screenshot.png"
      caseStudy={caseStudy}
    >
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

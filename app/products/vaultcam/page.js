import ProductLayout from "@/components/ProductLayout";

export const metadata = {
  title: "VaultCam (VaultID) — Biometric Security Platform | PraBaS Digital",
  description: "Privacy-first biometric camera verification and encrypted locker application built with React Native Web and Expo.",
};

export default function VaultCamPage() {
  const features = [
    "Real-time camera viewfinder with precision biometric face detection and mesh targeting",
    "Zero-knowledge on-device verification: biometrics and hashes are never transmitted to cloud servers",
    "Encrypted personal file vault with instant cryptographic decryption upon successful unlock",
    "Emergency PIN keypad backup with high-entropy lockouts to prevent brute-force attacks",
    "Cross-platform responsive architecture running identically across native mobile and web environments",
    "Automatic tamper protection and privacy blackout when switching apps or losing window focus",
  ];

  const techStack = [
    "React Native Web",
    "Expo",
    "MediaDevices Camera API",
    "Web Cryptography API",
    "Local Vault Encryption",
    "Vercel",
  ];

  const caseStudy = {
    problem: "The Challenge",
    solution: "Traditional security tools either force users into clunky physical dongles or send biometric identifiers to central cloud servers, creating severe surveillance and breach risks. VaultCam delivers bank-grade biometric locking directly within the client browser without external exposure.",
    stats: [
      { value: "100%", label: "On-Device Processing" },
      { value: "Zero", label: "Cloud Data Footprint" },
      { value: "<200ms", label: "Unlock Speed" },
    ],
  };

  return (
    <ProductLayout
      title="VaultCam / VaultID"
      description="Next-generation biometric security and encrypted personal storage. Unlocking sensitive digital assets using instant on-device camera verification and zero-knowledge cryptography."
      features={features}
      techStack={techStack}
      liveLink="https://vaultcam-silk.vercel.app/unlock"
      image="/images/vaultcam-screenshot.png"
      caseStudy={caseStudy}
    >
      <p>
        VaultCam (VaultID) redefines personal digital privacy. By combining device camera feeds with client-side biometric matching and cryptographic key derivation, it creates a secure fortress for sensitive files right inside the browser.
      </p>

      <h3>What We Built</h3>
      <ul>
        <li>Developed an Expo and React Native Web interface that launches instantly on any camera-equipped device</li>
        <li>Implemented on-device face mesh target analysis for instant verification and anti-spoofing</li>
        <li>Built AES-GCM encrypted local vault storage accessible exclusively following biometric authorization</li>
        <li>Integrated an alternative PIN authentication keypad with progressive backoff penalties to thwart attacks</li>
        <li>Architected automatic lock mechanisms that terminate unlocked sessions when the browser tab goes into the background</li>
      </ul>

      <h3>Privacy-First Architecture</h3>
      <div className="infoGrid">
        <div className="infoCard">
          <h4>Zero-Knowledge Security</h4>
          <p>
            No passwords, video feeds, or facial templates are ever uploaded or stored on any server. Your biometric key exists solely in your browser&apos;s isolated memory space.
          </p>
        </div>
        <div className="infoCard">
          <h4>Cross-Platform Portability</h4>
          <p>
            Powered by React Native Web, VaultCam provides the tactile feel and performance of a native mobile security app with the convenience of a modern web application.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}

import SanctumInterface from "@/components/SanctumInterface";
import AmbientSound from "@/components/AmbientSound";
import CosmicBackground from "@/components/CosmicBackground";

export default function MentalTechPage() {
  return (
    <main>
      <CosmicBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <SanctumInterface />
      </div>
      <AmbientSound />
    </main>
  );
}

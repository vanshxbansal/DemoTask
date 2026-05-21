import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import PillarGrid from "../components/PillarGrid";
import LeaderSpotlight from "../components/LeaderSpotlight";
import ImpactStats from "../components/ImpactStats";
import Initiatives from "../components/Initiatives";
import CtaBand from "../components/CtaBand";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <PillarGrid />
        <LeaderSpotlight />
        <ImpactStats />
        <Initiatives />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import CompanyMarquee from "../components/home/CompanyMarquee";
import FloatingActions from "../components/home/FloatingActions";
import SelectedProjects from "../components/home/SelectedProjects";
import Services from "../components/home/Services";
import ClientPortal from "../components/home/ClientPortal";
import Process from "../components/home/Process";
import Techstack from "../components/home/Techstack";
import FAQ from "../components/home/FAQ";
import SelectedProjects2 from "../components/home/SelectedProjects2";
import Footer from "../components/home/Footer";
import FinalCTA from "../components/home/FinalCTA";
import WhyCopperStudio from "../components/home/WhyCopperStudio";
import CustomerReviews from "../components/home/CustomerReviews";
import LongPage from "../components/home/LongPage";


function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/10" />

      <Navbar />

     <Hero />

<CompanyMarquee />

<SelectedProjects />

<Services />

<CustomerReviews/>

<ClientPortal />

<LongPage/>


<FAQ/>

<SelectedProjects2 />

<FinalCTA/>

<Footer/>


<FloatingActions />

    </div>
  );
}

export default Home;
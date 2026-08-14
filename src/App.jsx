import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CompanyMarquee from "./components/CompanyMarquee";
import FloatingActions from "./components/FloatingActions";
import SelectedProjects from "./components/SelectedProjects";
import Services from "./components/Services";
import ClientPortal from "./components/ClientPortal";
import Process from "./components/Process";
import Techstack from "./components/Techstack";
import FAQ from "./components/FAQ";
import SelectedProjects2 from "./components/SelectedProjects2";
import Footer from "./components/Footer";
import FinalCTA from "./components/FinalCTA";
import WhyCopperStudio from "./components/WhyCopperStudio";
import CustomerReviews from "./components/CustomerReviews";


function App() {
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

<Process />

<Techstack />

<WhyCopperStudio/>

<FAQ/>

<SelectedProjects2 />

<FinalCTA/>

<Footer/>


<FloatingActions />

    </div>
  );
}

export default App;
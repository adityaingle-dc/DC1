import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingActions from "./components/FloatingActions";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/cpbg.png')",
        }}
      />

      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-white/20 backdrop-blur-[1px]" />

      {/* Page */}
      <Navbar />
      <Hero />

      {/* Floating Actions */}
      <FloatingActions />

    </div>
  );
}

export default App;
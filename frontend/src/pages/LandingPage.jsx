import Navbar from "../components/landing-page/Navbar";
import Hero from "../components/home/Hero";
import FloatingActions from "../components/home/FloatingActions";

const LandingPage = () => {
  return (
    <main className="min-h-screen w-full bg-white">

      <Navbar />

      {/* =====================================
          LANDING PAGE CONTENT
      ====================================== */}

      <section className="w-full">
        {/* New landing page components will go here */}
      </section>

      <Hero/>
      <FloatingActions/>

     <div
  className="
    mt-15
    ml-0
    flex
    h-[214px]
    w-full
    max-w-[1140px]
    items-center
    justify-start
    bg-white
    px-15
    text-left
  "
>
  <p
    className="
      max-w-[900px]
      font-['DM_Sans']
      text-xl
      font-medium
      leading-relaxed
      tracking-tight
      text-black
      sm:text-2xl
      md:text-3xl
    "
  >
    <span className="text-black/40">
     We build strategic brand identities that give your business a clear point of view. 
    </span>{" "}
    <span className="text-black">
      From logo design and visual language to typography, colour, and brand guidelines, every element works together to create a brand that 
    </span>{" "}
    <span className="text-black/40">
      feels distinct, consistent, and built to grow.
    </span>
  </p>
</div>

<div
  className="
    mt-16
    ml-0
    flex
    h-[123px]
    w-full
    max-w-[749px]
    flex-col
    justify-center
  "
>
  {/* Heading — 418 × 52 */}

  <div
    className="
      flex
      h-[52px]
      w-[418px]
      items-center
    "
  >
    <h2
      className="
        font-['DM_Sans']
        text-3xl
        font-semibold
        leading-[1]
        tracking-tight
        text-black
        sm:text-4xl
      "
    >
      Your digital journey starts here.
    </h2>
  </div>


  {/* Paragraph — 747 × 47 */}

  <div
    className="
      mt-3
      flex
      h-[47px]
      w-[747px]
      max-w-full
      items-start
    "
  >
    <p
      className="
        font-['DM_Sans']
        text-sm
        leading-6
        text-black/50
        sm:text-base
      "
    >
      Tell us what you are looking to build, improve, or transform and we'll help
      you find the right direction for your business.
    </p>
  </div>
</div>

    </main>
  );
};

export default LandingPage;
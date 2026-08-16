import Navbar from "../components/landing-page/Navbar";
import Hero from "../components/home/Hero";
import FloatingActions from "../components/home/FloatingActions";



import LandingFeatureCard from "../components/landing-page/Cards";

const features = [
  {
    image: "/landing/image1.png",
    heading: "Brand Identity",
    description:
      "Develop a strategic brand identity with custom logo design, visual systems, typography, and brand guidelines that create a lasting impression across every touchpoint.",
    tags: ["Logo Design", "Visual Identity", "Brand Guidelines"],
  },
  {
    image: "/landing/image2.png",
    heading: "Web Design & Development",
    description:
      "Create a modern digital experience with thoughtful design, responsive development, and a structure built around your business goals.",
    tags: ["UI/UX", "Development", "CMS"],
  },
  {
    image: "/landing/image3.png",
    heading: "Custom Company Portals",
    description:
      "Build secure digital portals that centralize communication, files, approvals, workflows, and project information in one place.",
    tags: ["Client Portal", "CRM", "Automation"],
  },
  {
    image: "/landing/image4.png",
    heading: "Digital Growth",
    description:
      "Create scalable digital systems that help your business improve operations, strengthen its presence, and grow with confidence.",
    tags: ["Strategy", "Optimization", "Support"],
  },
];

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

      <Hero />

      <FloatingActions />

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
          px-20
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
            We build strategic brand identities that give your business a clear
            point of view.
          </span>{" "}
          <span className="text-black">
            From logo design and visual language to typography, colour, and
            brand guidelines, every element works together to create a brand
            that
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
        {/* Heading */}

        <div
          className="
            flex
            h-[52px]
            w-full
            items-center
            px-20
          "
        >
          <h2
            className="
              whitespace-nowrap
              font-['DM_Sans']
              text-3xl
              font-semibold
              leading-[1]
              tracking-tight
              text-black
              sm:text-4xl
            "
          >
            Brand Identity
          </h2>
        </div>


        {/* Paragraph */}

        <div
          className="
            mt-3
            flex
            h-[47px]
            w-full
            max-w-[747px]
            items-start
            px-20
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
            Develop a strategic brand identity with custom logo design, visual
            systems, typography, and brand guidelines that create a lasting
            impression across every touchpoint.
          </p>
        </div>
      </div>


      {/* =====================================
          FEATURE CARDS — 2 × 2
      ====================================== */}

      <section
        className="
          mt-16
          w-full
          px-6
          pb-20
          sm:px-10
          md:px-16
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            justify-items-center
            gap-8
            md:grid-cols-2
          "
        >
          {features.map((feature) => (
            <LandingFeatureCard
              key={feature.heading}
              image={feature.image}
              heading={feature.heading}
              description={feature.description}
              tags={feature.tags}
            />
          ))}
        </div>
      </section>

    </main>
  );
};

export default LandingPage;
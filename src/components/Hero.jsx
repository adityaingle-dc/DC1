import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/cpbg.png')",
        }}
        initial={{
          scale: 1.08,
          x: 0,
        }}
        animate={{
          scale: 1,
          x: [-10, 10, -10],
        }}
        transition={{
          scale: {
            duration: 2,
            ease: "easeOut",
          },
          x: {
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/20" />

      {/* Subtle Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      {/* Hero Content */}
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

        {/* Glass Pill */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="mb-7 rounded-full border border-white/30 bg-white/15 px-5 py-2 backdrop-blur-md"
        >
          <span className="text-sm font-medium text-white">
             Brand Identity • Website Design • Custom Portals
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.45,
            ease: "easeOut",
          }}
          className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl "
        >
           We help you to build,launch and
         
          grow with confidence

        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.65,
            ease: "easeOut",
          }}
          className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
        >
          We design every piece of your business to work together
          so growth feels simple , not scattered.

        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <motion.button
            whileHover={{
              y: -3,
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-white/50 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition"
          >
            Explore Projects
          </motion.button>

          <motion.button
            whileHover={{
              y: -3,
              backgroundColor: "rgba(255,255,255,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-white/50 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition"
          >
            Let's Talk →
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
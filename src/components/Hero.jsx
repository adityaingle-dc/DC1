import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full bg-white px-2 py-2 sm:px-3 sm:py-3">

      {/* =====================================
          HERO CONTAINER
      ====================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[620px]
          w-full
          items-center
          justify-center
          overflow-hidden
          rounded-[8px]
          px-4
          pb-16
          pt-24
          sm:min-h-[660px]
          sm:px-6
          sm:pt-24
          md:min-h-[710px]
          md:px-8
          lg:px-10
        "
      >

        {/* =====================================
            ANIMATED BACKGROUND
        ====================================== */}

        <motion.div
          className="
            absolute
            inset-0
            z-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/cpbg.png')",
          }}
          initial={{
            scale: 1.12,
            x: 0,
          }}
          animate={{
            scale: [1.12, 1.16, 1.12],
            x: [-4, 4, -4],
          }}
          transition={{
            scale: {
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />


        {/* =====================================
            DARK OVERLAY
        ====================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            bg-black/20
          "
        />


        {/* =====================================
            SUBTLE GRADIENT
        ====================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            bg-gradient-to-b
            from-black/10
            via-transparent
            to-black/20
          "
        />


        {/* =====================================
            HERO CONTENT
        ====================================== */}

        <div
          className="
            relative
            z-20
            mx-auto
            flex
            w-full
            max-w-5xl
            flex-col
            items-center
            text-center
          "
        >

          {/* =====================================
              GLASS PILL
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="
              mb-6
              max-w-[90%]
              rounded-full
              border
              border-white/[0.08]
              bg-black/[0.10]
              px-4
              py-2
              backdrop-blur-[2px]
              sm:mb-7
              sm:px-5
            "
          >
            <span
              className="
                text-xs
                font-medium
                text-white/90
                sm:text-sm
              "
            >
              Brand Identity • Website Design • Custom Portals
            </span>
          </motion.div>


          {/* =====================================
              HEADING
          ====================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.45,
              ease: "easeOut",
            }}
            className="
              max-w-[95%]
              text-4xl
              font-medium
              leading-[1.02]
              tracking-tight
              text-white
              sm:max-w-3xl
              sm:text-5xl
              md:max-w-4xl
              md:text-6xl
              font-[DM Sans] font-medium
              
            "
          >
            We help you to build, launch and
            <br className="hidden sm:block" />
            {" "}grow with confidence
          </motion.h1>


          {/* =====================================
              PARAGRAPH
          ====================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
              ease: "easeOut",
            }}
            className="
              mt-6
              max-w-[90%]
              text-sm
              leading-6
              text-white/80
              sm:mt-7
              sm:max-w-xl
              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            We design every piece of your business to work together
            so growth feels simple, not scattered.
          </motion.p>


          {/* =====================================
              BUTTONS
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="
              mt-8
              flex
              w-full
              flex-col
              items-center
              gap-3
              sm:mt-9
              sm:w-auto
              sm:flex-row
            "
          >

            {/* View All Services */}

            <motion.button
              whileHover={{
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                h-[42px]
                w-[170px]
                rounded-full
                border
                border-white/50
                px-5
                text-sm
                font-medium
                text-white
                transition-all
                duration-1
                sm:w-auto
                sm:px-7
              "
            >
              View All Services
            </motion.button>


            {/* Let's Connect */}

            <motion.button
              whileHover={{
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                h-[42px]
                w-[170px]
                rounded-full
                border
                border-white/50
                px-5
                text-sm
                font-medium
                text-white
                transition-all
                duration-1
                sm:w-auto
                sm:px-7
              "
            >
              Let's Connect →
            </motion.button>

          </motion.div>

        </div>


        {/* =====================================
            SCROLL DOWN
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.1,
          }}
          className="
            absolute
            bottom-5
            left-4
            z-20
            flex
            items-center
            sm:bottom-7
            sm:left-7
          "
        >
          <span
            className="
              whitespace-nowrap
              text-[9px]
              font-medium
              tracking-[0.12em]
              text-white/70
              sm:text-[11px]
            "
          >
            scroll down for more
          </span>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
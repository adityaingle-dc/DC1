import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full bg-white px-3 py-3">

      {/* =====================================
          HERO CONTAINER
      ====================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          h-[710px]
          w-[100vw]
          max-w-full
          items-center
          justify-center
          overflow-hidden
          rounded-[8px]
          px-6
          pt-24
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
            max-w-5xl
            flex-col
            items-center
            text-center
          "
        >
{/* Glass Pill */}

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
    mb-7
    rounded-full
    border
    border-white/[0.08]
    bg-black/[0.10]
    px-5
    py-2
    
  "
>
  <span className="text-sm font-medium text-white/90">
    Brand Identity • Website Design • Custom Portals
  </span>
</motion.div>

          {/* Heading */}

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
              max-w-4xl
              text-5xl
              font-medium
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            We help you to build,launch and
            <br />
            grow with confidence
          </motion.h1>


          {/* Paragraph */}

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
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-white/80
              sm:text-lg
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
              mt-9
              flex
              flex-col
              gap-3
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
                rounded-full
                border
                border-white/50
                px-7
                text-sm
                font-medium
                text-white
              
                transition-all
                duration-1
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
                rounded-full
                border
                border-white/50
                px-7
                text-sm
                font-medium
                text-white
               
                transition-all
                duration-1
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
            bottom-7
            left-7
            z-20
            flex
            h-[18px]
            w-[133px]
            items-center
          "
        >
          <span
            className="
              whitespace-nowrap
              text-[11px]
              font-medium
              tracking-[0.12em]
              text-white/70
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
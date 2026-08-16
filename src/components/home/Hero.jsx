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
            STATIC BACKGROUND
        ====================================== */}

        <div
          className="
            absolute
            inset-0
            z-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/CSbg.png')",
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
            HERO CONTENT CONTAINER
            947 × 389
        ====================================== */}

        <div
          className="
            relative
            z-20
            flex
            h-[389px]
            w-[947px]
            max-w-full
            flex-col
            items-center
            text-center
          "
        >

          {/* =====================================
              HERO SVG PILL
          ====================================== */}

          <motion.img
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
            src="/Container.svg"
            alt="Brand Identity, Website Design, Custom Portals"
            className="
              h-[35px]
              w-[375px]
              max-w-full
              shrink-0
              object-contain
            "
          />


          {/* =====================================
              MAIN HEADING
              947 × 164
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
              mt-[20px]
              flex
              h-[164px]
              w-[947px]
              max-w-full
              shrink-0
              items-center
              justify-center
              px-2
              font-dm-sans
              text-[42px]
              font-semibold
              leading-[1.02]
              tracking-tight
              text-white

              sm:px-4
              sm:text-[52px]

              md:px-6
              md:text-[64px]

              lg:px-0
              lg:text-[72px]
            "
          >
            <span>
              We help you build, launch and
              
              grow with confidence.
            </span>
          </motion.h1>


          {/* =====================================
              PARAGRAPH
              476 × 48
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
              mt-[16px]
              flex
              h-[48px]
              w-[476px]
              max-w-full
              shrink-0
              items-center
              justify-center
              px-4
              text-center
              font-dm-sans
              text-[14px]
              font-normal
              leading-6
              text-[#F9F8F4]/75

              sm:px-2
              sm:text-[16px]

              md:px-0
              md:text-[18px]
            "
          >
            <span>
              We design every piece of your business to work together,
              
              so growth feels simple, not scattered.
            </span>
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
              mt-[16px]
              flex
              h-auto
              flex-col
              items-center
              justify-center
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
                w-[156.3px]
                rounded-full
                border
                border-white/50
                px-5
                font-dm-sans
                text-sm
                font-medium
                text-white
                transition-all
                duration-100
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
                w-[153.6px]
                rounded-full
                border
                border-white/50
                px-5
                font-dm-sans
                text-sm
                font-medium
                text-white
                transition-all
                duration-100
              "
            >
              Let's Connect
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
              font-dm-sans
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
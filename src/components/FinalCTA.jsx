import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[95%]">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >

          {/* Small Label */}

          <p
            className="
              max-w-full
              text-[10px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-orange-500
              sm:text-xs
              sm:tracking-[0.16em]
              md:text-sm
              md:tracking-[0.2em]
            "
          >
            Brand Identity.Websites.Customer Portal
          </p>


          {/* Main Heading */}

          <h2
            className="
              mt-5
              w-full
              max-w-5xl
              text-3xl
              font-medium
              leading-[1]
              tracking-[-0.035em]
              text-black
              sm:mt-6
              sm:text-4xl
              md:text-6xl
              md:leading-[0.95]
              lg:text-7xl
            "
          >
            Let's create something
            <br />

            <span className="text-black">
              your customers will remember.
            </span>
          </h2>


          {/* Buttons */}

          <div
            className="
              mt-8
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              sm:mt-10
              sm:w-auto
              sm:flex-row
            "
          >

            {/* Primary */}

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-black
                px-7
                py-3.5
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-orange-500
                sm:w-auto
              "
            >
              Start a Project
            </motion.a>


            {/* Secondary */}

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-full
                border
                border-black/25
                px-7
                py-3.5
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:border-orange-500
                hover:text-orange-500
                sm:w-auto
              "
            >
              View Our Work
            </motion.a>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
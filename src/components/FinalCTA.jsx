import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="bg-white px-6 py-32 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[95%]">

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

          <p className="
            text-sm
            font-medium
            uppercase
            tracking-[0.2em]
           text-orange-500
          ">
            Brand Identity.Websites.Customer Portal
          </p>


          {/* Main Heading */}

          <h2 className="
            mt-6
            max-w-5xl
            text-2xl
            font-medium
            leading-[0.95]
            tracking-[-0.04em]
            text-black
            sm:text-4xl
            md:text-7xl
            
          ">
            Let's create something
            <br />

            <span className="text-black">
              your customers will remember.
            </span>
          </h2>


          {/* Buttons */}

          <div className="
            mt-10
            flex
            flex-col
            items-center
            gap-3
            sm:flex-row
          ">

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
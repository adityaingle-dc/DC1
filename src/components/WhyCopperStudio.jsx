import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Creative Thinking",
    description:
      "We don't just make things look good. We think about the idea, the audience and the story behind every experience.",
    image: "/stack/all under one roof_diagram.png",
  },
  {
    number: "02",
    title: "Built With Purpose",
    description:
      "Every design and development decision has a reason. We create digital experiences that are beautiful, useful and built around your goals.",
    image: "/stack/client portal_diagram.png",
  },
  {
    number: "03",
    title: "One Creative Partner",
    description:
      "From the first idea to the final launch, we bring strategy, design and development together under one roof.",
    image: "/stack/ongoing support_diagram.png",
  },
];

const WhyCopperStudio = () => {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[95%]">

        {/* =====================================
            CENTERED HEADING
        ====================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto w-full max-w-4xl text-center"
        >
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-black/40
              sm:text-sm
              sm:tracking-[0.2em]
            "
          >
            Why Copper Studio
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-medium
              leading-[0.98]
              tracking-tight
              text-black
              sm:mt-5
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Why work with{" "}
            <span className="text-orange-500">
              Copper Studio
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-6
              text-black/50
              sm:mt-7
              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            We combine creative thinking, thoughtful design and
            purposeful technology to create experiences that
            people remember.
          </p>
        </motion.div>


        {/* =====================================
            CARDS CONTAINER
        ====================================== */}

        <div
          className="
            mx-auto
            mt-12
            grid
            w-full
            max-w-[1198px]
            grid-cols-1
            gap-5
            sm:mt-16
            md:grid-cols-2
            lg:mt-20
            lg:grid-cols-3
          "
        >

          {reasons.map((reason, index) => (

            <motion.div
              key={reason.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                min-h-[460px]
                overflow-hidden
                rounded-2xl
                border
                border-black/10
                bg-[#f8f8f6]
                transition-all
                duration-300
                hover:border-orange-500/50
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                sm:min-h-[470px]
                lg:h-[450px]
                lg:min-h-0
              "
            >

              {/* =====================================
                  IMAGE
              ====================================== */}

              <div
                className="
                  relative
                  h-[220px]
                  w-full
                  overflow-hidden
                  sm:h-[240px]
                  lg:h-[250px]
                "
              >

                <motion.img
                  src={reason.image}
                  alt={reason.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                  "
                  whileHover={{
                    scale: 1.05,
                  }}
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                  "
                />

              </div>


              {/* =====================================
                  TEXT CONTENT
              ====================================== */}

              <div className="p-5 sm:p-6 md:p-7">

                {/* Number */}

                <span
                  className="
                    text-xs
                    font-medium
                    tracking-[0.15em]
                    text-black/30
                    transition-colors
                    duration-300
                    group-hover:text-orange-500
                    sm:text-sm
                  "
                >
                  {reason.number}
                </span>


                {/* Title */}

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-medium
                    tracking-tight
                    text-black
                    sm:mt-3
                    sm:text-3xl
                  "
                >
                  {reason.title}
                </h3>


                {/* Description */}

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-black/50
                    sm:text-base
                  "
                >
                  {reason.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyCopperStudio;
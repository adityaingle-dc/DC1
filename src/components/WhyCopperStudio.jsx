import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Creative Thinking",
    description:
      "We don't just make things look good. We think about the idea, the audience and the story behind every experience.",
  },
  {
    number: "02",
    title: "Built With Purpose",
    description:
      "Every design and development decision has a reason. We create digital experiences that are beautiful, useful and built around your goals.",
  },
  {
    number: "03",
    title: "One Creative Partner",
    description:
      "From the first idea to the final launch, we bring strategy, design and development together under one roof.",
  },
];

const WhyCopperStudio = () => {
  return (
    <section className="bg-white px-6 py-32 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[95%]">

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
          className="mx-auto max-w-4xl text-center"
        >

          <p className="
            text-sm
            font-medium
            uppercase
            tracking-[0.2em]
            text-black/40
          ">
            Why Copper Studio
          </p>

          <h2 className="
            mt-5
            text-5xl
            font-medium
            leading-[0.95]
            tracking-tight
            text-black
            sm:text-6xl
            md:text-7xl
          ">
            Why work with
            <br />
            <span className="text-orange-500">
              Copper Studio?
            </span>
          </h2>

          <p className="
            mx-auto
            mt-7
            max-w-2xl
            text-base
            leading-7
            text-black/50
            sm:text-lg
          ">
            We combine creative thinking, thoughtful design and
            purposeful technology to create experiences that
            people remember.
          </p>

        </motion.div>


        {/* =====================================
            ANSWER GRID
        ====================================== */}

        <div className="
          mx-auto
          mt-20
          grid
          max-w-6xl
          grid-cols-1
          gap-4
          md:grid-cols-3
        ">

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
                min-h-[300px]
                rounded-2xl
                border
                border-black/10
                bg-[#f8f8f6]
                p-8
                transition-all
                duration-300
                hover:border-orange-500/50
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                md:p-10
              "
            >

              {/* Number */}

              <span className="
                text-sm
                font-medium
                tracking-[0.15em]
                text-black/30
                transition-colors
                duration-300
                group-hover:text-orange-500
              ">
                {reason.number}
              </span>


              {/* Title */}

              <h3 className="
                mt-16
                text-2xl
                font-medium
                tracking-tight
                text-black
                sm:text-3xl
              ">
                {reason.title}
              </h3>


              {/* Description */}

              <p className="
                mt-5
                text-base
                leading-7
                text-black/50
              ">
                {reason.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyCopperStudio;
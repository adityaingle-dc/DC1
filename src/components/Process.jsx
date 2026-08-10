import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, audience, goals, challenges and what makes your brand different.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn ideas into a clear strategy, structure and creative direction that gives the project a strong foundation.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create the visual language, interfaces and experiences that make your brand memorable and easy to connect with.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We bring the approved direction to life with clean, scalable and purposeful development.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "We test, refine and launch the final experience while making sure everything is ready for the real world.",
  },
];

const Process = () => {
  return (
    <section className="bg-white px-6 py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[95%]">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* =========================================
              LEFT — STICKY
          ========================================== */}

          <div className="lg:sticky lg:top-24 lg:h-fit">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/40">
                Our Process
              </p>

              <h2 className="
                mt-5
                max-w-xl
                text-5xl
                font-medium
                leading-[0.95]
                tracking-tight
                text-black
                sm:text-6xl
                md:text-7xl
              ">
                Take a look at
                <br />
                how we work.
              </h2>

              <p className="
                mt-7
                max-w-md
                text-base
                leading-7
                text-black/50
                sm:text-lg
              ">
                Every project follows a clear process that keeps
                strategy, creativity and development moving in
                the same direction.
              </p>
            </motion.div>

          </div>


          {/* =========================================
    RIGHT — COMPACT SCROLLABLE STEPS
========================================= */}

<div
  className="
    h-[560px]
    overflow-y-auto
    overscroll-contain
    border-l
    border-black/10
    lg:h-[600px]
    lg:pl-8
  "
>
  <div className="pr-3">

    {steps.map((step, index) => (

      <motion.div
        key={step.number}
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
          delay: index * 0.04,
        }}
        className="
          group
          min-h-[360px]
          border-t
          border-black/15
          py-10
        "
      >

        {/* Number + Arrow */}

        <div className="flex items-center justify-between">

          <span
            className="
              text-xs
              font-medium
              tracking-[0.15em]
              text-black/35
              transition-colors
              duration-300
              group-hover:text-orange-500
            "
          >
            {step.number}
          </span>

          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-black/20
              text-sm
              text-black
              transition-all
              duration-300
              group-hover:border-orange-500
              group-hover:bg-orange-500
              group-hover:text-white
            "
          >
            ↗
          </div>

        </div>


        {/* Title */}

        <h3
          className="
            mt-10
            text-3xl
            font-medium
            tracking-tight
            text-black
            transition-transform
            duration-500
            group-hover:translate-x-2
            sm:text-4xl
            md:text-5xl
          "
        >
          {step.title}
        </h3>


        {/* Description */}

        <p
          className="
            mt-4
            max-w-lg
            text-base
            leading-7
            text-black/50
          "
        >
          {step.description}
        </p>

      </motion.div>

    ))}

    <div className="border-t border-black/15" />

  </div>
</div>

        </div>

      </div>
    </section>
  );
};

export default Process;
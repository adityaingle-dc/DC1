import { useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding your business, goals, audience, competitors, and current challenges. Through collaborative discussions and research, we uncover insights that shape a solution aligned with your vision and long-term objectives.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "With a clear understanding of your business, we define the project's direction, structure, and user journey. Every decision, from branding to functionality, is guided by strategy to ensure the final outcome solves real business problems.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Ideas are transformed into thoughtful designs that balance aesthetics with usability. Whether it's a brand identity, website, or custom portal, every detail is crafted to create a consistent, intuitive, and memorable experience.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Once the designs are approved, we bring them to life through careful development and rigorous testing. We focus on performance, responsiveness, accessibility, and scalability to deliver a polished product that's ready for real world use.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "After a successful launch, our partnership doesn't end. We provide hosting, maintenance, ongoing support, and continuous improvements to ensure your brand and digital products evolve as your business grows.",
  },
];

const Process = () => {
  const processRef = useRef(null);
  const stepsRef = useRef(null);

  const reachedBottom = useRef(false);

  const handleWheel = (event) => {
    if (window.innerWidth < 1024) return;

    const process = processRef.current;
    const stepsContainer = stepsRef.current;

    if (!process || !stepsContainer) return;

    const rect = process.getBoundingClientRect();

    const processActive =
      rect.top <= 10 &&
      rect.bottom >= window.innerHeight - 10;

    if (!processActive) {
      reachedBottom.current = false;
      return;
    }

    const maxScroll = Math.max(
      0,
      stepsContainer.scrollHeight - stepsContainer.clientHeight
    );

    const scrollTop = stepsContainer.scrollTop;

    const scrollingDown = event.deltaY > 0;
    const scrollingUp = event.deltaY < 0;

    const atTop = scrollTop <= 1;
    const atBottom = scrollTop >= maxScroll - 1;

    /* ================================
       SCROLL DOWN
    ================================= */

    if (scrollingDown) {
      if (!atBottom) {
        event.preventDefault();
        stepsContainer.scrollTop += event.deltaY;
        return;
      }

      if (atBottom && !reachedBottom.current) {
        event.preventDefault();
        reachedBottom.current = true;
        return;
      }

      return;
    }

    /* ================================
       SCROLL UP
    ================================= */

    if (scrollingUp) {
      if (!atTop) {
        event.preventDefault();
        reachedBottom.current = false;
        stepsContainer.scrollTop += event.deltaY;
        return;
      }

      reachedBottom.current = false;
    }
  };

  return (
    <section
      ref={processRef}
      onWheelCapture={handleWheel}
      className="
        relative
        bg-white
        px-4
        py-16
        sm:px-6
        sm:py-20
        md:px-8
        md:py-24
        lg:min-h-screen
        lg:px-10
        lg:py-16
      "
    >
      <div className="mx-auto w-full max-w-full">

        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:min-h-[calc(100vh-8rem)]
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-start
            lg:gap-12
          "
        >

          {/* LEFT */}

          <div
            className="
              self-start
              lg:sticky
              lg:top-24
              lg:h-fit
            "
          >
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
            >
              <h2
                className="
                  mt-0
                  max-w-xl
                  text-4xl
                  font-medium
                  leading-[0.95]
                  tracking-tight
                  text-black
                  sm:text-5xl
                  md:text-6xl
                  lg:mt-5
                  lg:text-7xl
                   font-['DM_Sans']
                "
              >
                Take a look at
                <br />
                how we work.
              </h2>

              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-6
                  text-black/50
                  sm:text-base
                  sm:leading-7
                  md:text-lg
                   font-['DM_Sans']
                "
              >
                Every project follows a clear process that keeps
                strategy, creativity and development moving in
                the same direction.
              </p>
            </motion.div>
          </div>

          {/* RIGHT */}

          <div
            className="
              min-w-0
              lg:pl-8
            "
          >
            <div
              ref={stepsRef}
              className="
                h-auto
                overflow-visible
                pr-0
                lg:h-[600px]
                lg:overflow-y-auto
                lg:overscroll-none
                lg:pr-3
                lg:scrollbar-hide
              "
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>
                {`
                  .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>

              <div className="flex flex-col gap-3">

                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      y: 25,
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
                      min-h-[80px]
                      rounded-2xl
                      bg-[#f3f3f1]
                      p-5
                      transition-colors
                      duration-300
                      hover:bg-[#eeeeeb]
                      sm:rounded-3xl
                      sm:p-7
                      md:p-8
                      lg:p-10
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-3
                        sm:gap-4
                        md:gap-5
                      "
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                         font-['DM_Sans']
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-black/10
                          bg-white
                          text-[11px]
                          font-medium
                          tracking-[0.12em]
                          text-black/40
                          transition-all
                          duration-300
                          group-hover:border-orange-500
                          group-hover:bg-orange-500
                          group-hover:text-white
                          sm:h-12
                          sm:w-12
                          sm:text-xs
                          md:h-14
                          md:w-14
                          md:text-sm
                        "
                      >
                        {step.number}
                      </motion.div>

                      <h3
                        className="
                          text-2xl
                          font-medium
                          tracking-tight
                          text-black
                          transition-transform
                          duration-500
                          group-hover:translate-x-1
                          sm:text-3xl
                          md:text-4xl
                          lg:text-5xl
                        "
                      >
                        {step.title}
                      </h3>
                    </div>

                    <p
                      className="
                        mt-4
                        max-w-lg
                        text-sm
                        leading-6
                        text-black/50
                        sm:mt-5
                        sm:text-base
                        sm:leading-7
                      "
                    >
                      {step.description}
                    </p>
                  </motion.div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
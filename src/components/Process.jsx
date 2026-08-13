import { useEffect, useRef } from "react";
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
  const processRef = useRef(null);
  const stepsRef = useRef(null);

  const processLocked = useRef(false);
  const reachedBottom = useRef(false);

  useEffect(() => {
    const handleWheel = (event) => {
      /*
        ==========================================
        DESKTOP ONLY
        ==========================================
      */

      if (window.innerWidth < 1024) {
        return;
      }

      const process = processRef.current;
      const stepsContainer = stepsRef.current;

      if (!process || !stepsContainer) return;

      const rect = process.getBoundingClientRect();

      const processActive =
        rect.top <= 10 &&
        rect.bottom >= window.innerHeight - 10;

      if (!processActive) {
        processLocked.current = false;
        reachedBottom.current = false;
        return;
      }

      const {
        scrollTop,
        scrollHeight,
        clientHeight,
      } = stepsContainer;

      const maxScroll = scrollHeight - clientHeight;

      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;

      const atTop = scrollTop <= 1;
      const atBottom = scrollTop >= maxScroll - 1;

      /*
        ==========================================
        SCROLL DOWN
        ==========================================
      */

      if (scrollingDown) {
        if (!atBottom) {
          event.preventDefault();

          processLocked.current = true;

          stepsContainer.scrollTop += event.deltaY;

          return;
        }

        if (atBottom && !reachedBottom.current) {
          event.preventDefault();

          reachedBottom.current = true;
          processLocked.current = true;

          return;
        }

        if (atBottom && reachedBottom.current) {
          processLocked.current = false;

          return;
        }
      }

      /*
        ==========================================
        SCROLL UP
        ==========================================
      */

      if (scrollingUp) {
        if (!atTop) {
          event.preventDefault();

          processLocked.current = true;
          reachedBottom.current = false;

          stepsContainer.scrollTop += event.deltaY;

          return;
        }

        if (atTop) {
          processLocked.current = false;
          reachedBottom.current = false;

          return;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      ref={processRef}
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

        {/* =================================================
            MAIN PROCESS LAYOUT
        ================================================= */}

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

          {/* =================================================
              LEFT — STICKY ON DESKTOP
          ================================================= */}

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
                "
              >
                Every project follows a clear process that keeps
                strategy, creativity and development moving in
                the same direction.
              </p>

            </motion.div>
          </div>


          {/* =================================================
              RIGHT — PROCESS STEPS
          ================================================= */}

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


              {/* =================================================
                  STEPS
              ================================================= */}

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

                    {/* NUMBER + HEADING */}

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


                    {/* DESCRIPTION */}

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
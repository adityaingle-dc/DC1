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
      const process = processRef.current;
      const stepsContainer = stepsRef.current;

      if (!process || !stepsContainer) return;

      const rect = process.getBoundingClientRect();

      /*
        Process becomes active when it reaches
        the viewport.
      */
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

        /*
          If steps are NOT finished,
          keep the page locked.
        */

        if (!atBottom) {
          event.preventDefault();

          processLocked.current = true;

          stepsContainer.scrollTop += event.deltaY;

          return;
        }

        /*
          We have reached Step 05.

          The FIRST wheel event at the bottom
          only marks the process as completed.
          
          It does NOT move the page.
        */

        if (atBottom && !reachedBottom.current) {
          event.preventDefault();

          reachedBottom.current = true;
          processLocked.current = true;

          return;
        }

        /*
          The SECOND wheel event after Step 05
          releases the page.

          This is what allows the next section
          to scroll normally.
        */

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

        /*
          If we are inside the steps,
          keep the page locked and move upward.
        */

        if (!atTop) {
          event.preventDefault();

          processLocked.current = true;
          reachedBottom.current = false;

          stepsContainer.scrollTop += event.deltaY;

          return;
        }

        /*
          At Step 01, allow the main page to
          scroll upward normally.
        */

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
        min-h-screen
        bg-white
        px-4
        py-16
        md:px-6
        lg:px-10
      "
    >
      <div className="mx-auto w-full max-w-full">

        {/* =================================================
            MAIN PROCESS LAYOUT
        ================================================= */}

        <div
          className="
            grid
            min-h-[calc(100vh-8rem)]
            grid-cols-1
            items-start
            gap-8
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-12
          "
        >

          {/* =================================================
              LEFT — STICKY
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
                  mt-5
                  max-w-xl
                  text-5xl
                  font-medium
                  leading-[0.95]
                  tracking-tight
                  text-black
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Take a look at
                <br />
                how we work.
              </h2>

              <p
                className="
                  mt-7
                  max-w-md
                  text-base
                  leading-7
                  text-black/50
                  sm:text-lg
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
                h-[600px]
                overflow-y-auto
                overscroll-none
                pr-3
                scrollbar-hide
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
                      rounded-3xl
                      bg-[#f3f3f1]
                      p-8
                      transition-colors
                      duration-300
                      hover:bg-[#eeeeeb]
                      sm:p-10
                    "
                  >

                    {/* NUMBER + HEADING */}

                    <div className="flex items-center gap-5">

                      <motion.div
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-black/10
                          bg-white
                          text-sm
                          font-medium
                          tracking-[0.12em]
                          text-black/40
                          transition-all
                          duration-300
                          group-hover:border-orange-500
                          group-hover:bg-orange-500
                          group-hover:text-white
                        "
                      >
                        {step.number}
                      </motion.div>

                      <h3
                        className="
                          text-3xl
                          font-medium
                          tracking-tight
                          text-black
                          transition-transform
                          duration-500
                          group-hover:translate-x-1
                          sm:text-4xl
                          md:text-5xl
                        "
                      >
                        {step.title}
                      </h3>

                    </div>


                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-5
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

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;
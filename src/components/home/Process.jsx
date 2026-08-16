import { useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, audience, and challenges through research and collaboration. This helps us uncover insights that shape the right direction.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the project’s direction, structure, and user journey based on a clear understanding of your business. Every decision is guided by purpose and real business needs.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We turn strategy into thoughtful, distinctive design that balances aesthetics with usability. From brand identity to digital experiences, every detail is designed to feel consistent and memorable.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We bring approved designs to life through careful, scalable development. We focus on performance, responsiveness, accessibility, and real-world usability.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We launch your project and stay involved beyond the finish line. From hosting and maintenance to ongoing improvements, we help your brand evolve as your business grows.",
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
        bg-#05050b
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
                  font-dm-sans
                  max-[639px]:text-3xl
                  max-[639px]:leading-[1]
                "
              >
                Take A Look At
                <br />
                How We Work
              </h2>

              <p
                className="
                  mt-6
                  max-w-md
                  text-sm
                  leading-[24px]
                  text-black/70
                  sm:text-base
                  md:text-lg
                  font-dm-sans
                  max-[639px]:max-w-full
                  max-[639px]:text-sm
                  max-[639px]:leading-6
                "
              >
                Whether we're building a brand, a website, or a custom portal,
                every project follows the same strategic process for
                consistent, high-quality results.
              </p>
            </motion.div>
          </div>


          {/* =====================================
              RIGHT
          ====================================== */}

          <div
            className="
              min-w-0
              lg:pl-8
            "
          >
            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                sm:gap-4
              "
            >

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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.04,
                  }}
                  className="
                    group
                    flex
                    min-h-[130px]
                    w-full
                    items-center
                    rounded-2xl
                    bg-05050b
                    px-5
                    py-4
                    transition-all
                    duration-300
                    hover:border-black/10
                    sm:px-6
                    max-[639px]:min-h-[120px]
                    max-[639px]:px-4
                    max-[639px]:py-3
                  "
                >

                  {/* =====================================
                      NUMBER — 96 × 96
                  ====================================== */}

                  <motion.div
                    whileHover={{
                      scale: 1.04,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      flex
                      h-[96px]
                      w-[96px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-05050b
                      bg-white
                      font-dm-sans
                      text-sm
                      font-medium
                      tracking-[0.12em]
                      text-black/40
                      transition-all
                      duration-300
                      group-hover:border-orange-500
                      group-hover:bg-orange-500
                      group-hover:text-white
                      max-[639px]:h-[72px]
                      max-[639px]:w-[72px]
                      max-[639px]:text-xs
                      sm:h-[82px]
                      sm:w-[82px]
                      md:h-[96px]
                      md:w-[96px]
                    "
                  >
                    {step.number}
                  </motion.div>


                  {/* =====================================
                      CONTENT
                  ====================================== */}

                  <div
                    className="
                      ml-5
                      flex
                      min-w-0
                      w-full
                      max-w-[522px]
                      flex-col
                      justify-center
                      max-[639px]:ml-3
                    "
                  >

                    {/* Heading */}

                    <h3
                      className="
                        font-['DM_Sans']
                        text-2xl
                        font-medium
                        leading-tight
                        tracking-tight
                        text-black
                        sm:text-3xl
                        md:text-4xl
                        max-[639px]:text-lg
                        max-[639px]:leading-6
                      "
                    >
                      {step.title}
                    </h3>


                    {/* Complete Description */}

                    <p
                      className="
                        mt-2
                        font-['DM_Sans']
                        text-sm
                        leading-5
                        text-black/50
                        sm:text-base
                        sm:leading-6
                        max-[639px]:mt-1
                        max-[639px]:text-xs
                        max-[639px]:leading-5
                      "
                    >
                      {step.description}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
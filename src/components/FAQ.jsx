import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer brand identity, web design, web development, custom company portals, digital experiences and other creative development solutions tailored to your business.",
  },
  {
    question: "How does a project usually start?",
    answer:
      "We begin with a conversation about your goals, requirements, audience and vision. From there, we define the scope, creative direction and development approach before moving into the design phase.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on the scope and complexity. A focused website can take a few weeks, while larger branding, development or custom portal projects may take longer.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Absolutely. We can work with an existing identity and build a digital experience around it, or help evolve the visual language when the current brand needs refinement.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We can provide ongoing maintenance, improvements, technical support and further development after your project goes live.",
  },
  {
    question: "Can you build a custom client portal?",
    answer:
      "Yes. We design and develop custom portals around your company's workflow, including dashboards, project management, documents, invoices, communication and other business-specific features.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[95%]">

        {/* =========================================
            TWO COLUMN LAYOUT
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-20
          "
        >

          {/* =====================================
              LEFT — STICKY
          ====================================== */}

          <div className="lg:sticky lg:top-24 lg:h-fit">

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
                Got questions?
                <br />
                We've got answers.
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
                Everything you need to know before starting
                your next project with Copper Studio.
              </p>

            </motion.div>

          </div>


          {/* =====================================
              RIGHT — FAQ CONTAINER
          ====================================== */}

          <div
            className="
              h-[564px]
              w-[690px]
              max-w-full
              overflow-hidden
              lg:pl-4
            "
          >

            <div className="h-full overflow-y-auto pr-2 scrollbar-hide">

              <div className="flex flex-col gap-4">

                {faqs.map((faq, index) => {

                  const isOpen = openIndex === index;

                  return (
                    <motion.div
                      key={faq.question}
                      initial={{
                        opacity: 0,
                        y: 20,
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
                      className="group"
                    >

                      {/* =================================
                          QUESTION CAPSULE
                      ================================== */}

                      <button
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        className="
                          flex
                          min-h-[70px]
                          w-full
                          items-center
                          justify-between
                          gap-6
                          rounded-full
                          bg-[#f3f3f1]
                          px-7
                          text-left
                          transition-all
                          duration-300
                          hover:bg-[#eeeeeb]
                        "
                      >

                        <span
                          className="
                            text-lg
                            font-medium
                            leading-tight
                            tracking-tight
                            text-black
                            transition-colors
                            duration-300
                            group-hover:text-orange-500
                            sm:text-xl
                          "
                        >
                          {faq.question}
                        </span>


                        {/* Plus / Minus */}

                        <span
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            transition-all
                            duration-300
                            ${
                              isOpen
                                ? "border-orange-500 bg-orange-500 text-white"
                                : "border-black/10 bg-white text-black"
                            }
                          `}
                        >
                          <span className="text-lg font-light">
                            {isOpen ? "−" : "+"}
                          </span>
                        </span>

                      </button>


                      {/* =================================
                          ANSWER
                      ================================== */}

                      <AnimatePresence initial={false}>

                        {isOpen && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.35,
                              ease: "easeInOut",
                            }}
                            className="overflow-hidden"
                          >

                            <div
                              className="
                                mx-5
                                mt-2
                                rounded-2xl
                                bg-[#f8f8f6]
                                px-6
                                py-5
                              "
                            >
                              <p
                                className="
                                  text-sm
                                  leading-7
                                  text-black/50
                                  sm:text-base
                                "
                              >
                                {faq.answer}
                              </p>
                            </div>

                          </motion.div>
                        )}

                      </AnimatePresence>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
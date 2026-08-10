import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    number: "01",
    question: "What services do you offer?",
    answer:
      "We offer brand identity, web design, web development, custom company portals, digital experiences and other creative development solutions tailored to your business.",
  },
  {
    number: "02",
    question: "How does a project usually start?",
    answer:
      "We begin with a conversation about your goals, requirements, audience and vision. From there, we define the scope, creative direction and development approach before moving into the design phase.",
  },
  {
    number: "03",
    question: "How long does a project take?",
    answer:
      "Project timelines depend on the scope and complexity. A focused website can take a few weeks, while larger branding, development or custom portal projects may take longer.",
  },
  {
    number: "04",
    question: "Can you work with our existing brand?",
    answer:
      "Absolutely. We can work with an existing identity and build a digital experience around it, or help evolve the visual language when the current brand needs refinement.",
  },
  {
    number: "05",
    question: "Do you provide support after launch?",
    answer:
      "Yes. We can provide ongoing maintenance, improvements, technical support and further development after your project goes live.",
  },
  {
    number: "06",
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
            PROCESS-STYLE TWO COLUMN LAYOUT
        ========================================== */}

        <div className="
          grid
          grid-cols-1
          gap-12
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-20
        ">

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

              <p className="
                text-sm
                font-medium
                uppercase
                tracking-[0.2em]
                text-black/40
              ">
                FAQ
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
                Got questions?
                <br />
                We've got answers.
              </h2>

              <p className="
                mt-7
                max-w-md
                text-base
                leading-7
                text-black/50
                sm:text-lg
              ">
                Everything you need to know before starting
                your next project with Copper Studio.
              </p>

            </motion.div>

          </div>


          {/* =====================================
              RIGHT — SCROLLABLE FAQ
          ====================================== */}

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

              {faqs.map((faq, index) => {

                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={faq.number}
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
                      border-t
                      border-black/15
                      py-8
                    "
                  >

                    {/* =================================
                        QUESTION
                    ================================== */}

                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="
                        flex
                        w-full
                        items-start
                        justify-between
                        gap-6
                        text-left
                      "
                    >

                      {/* Number + Question */}

                      <div className="flex gap-6">

                        <span className="
                          pt-1
                          text-xs
                          font-medium
                          tracking-[0.15em]
                          text-black/35
                          transition-colors
                          duration-300
                          group-hover:text-orange-500
                        ">
                          {faq.number}
                        </span>

                        <span className="
                          text-xl
                          font-medium
                          leading-tight
                          tracking-tight
                          text-black
                          transition-colors
                          duration-300
                          group-hover:text-orange-500
                          sm:text-2xl
                        ">
                          {faq.question}
                        </span>

                      </div>


                      {/* Plus / Minus */}

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-black/20
                          text-lg
                          font-light
                          text-black
                          transition-all
                          duration-300
                          group-hover:border-orange-500
                          group-hover:text-orange-500
                        "
                      >
                        {isOpen ? "−" : "+"}
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

                          <p className="
                            mt-5
                            max-w-xl
                            pl-[3.25rem]
                            text-base
                            leading-7
                            text-black/50
                          ">
                            {faq.answer}
                          </p>

                        </motion.div>
                      )}

                    </AnimatePresence>

                  </motion.div>
                );

              })}

              <div className="border-t border-black/15" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;
import { useState } from "react";
import { motion } from "framer-motion";
import "./FAQ.css";

const faqs = [
  {
    question: "What services does Copper Studio offer?",
    answer:
      "We specialize in Brand Identity, Website Design & Development, and Custom Company Portals. Whether you're launching a new business, refreshing your brand, or streamlining internal operations, we create tailored solutions designed around your goals.",
  },
  {
    question: "Can you redesign my existing website or brand?",
    answer:
      "Yes. Whether you need a complete rebrand, a website redesign, or improvements to an existing digital product, we can help modernize your business while maintaining continuity where needed.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the scope and complexity. Once we understand your requirements, we'll provide a clear project roadmap with estimated milestones and delivery dates.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing hosting, maintenance, technical support, and continuous improvements to ensure your website or digital product continues to perform as your business grows.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is simple. Book a discovery call or send us an enquiry with your project details. We'll learn about your business, discuss your goals, and recommend the best approach before sharing a tailored proposal, timeline, and quotation.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* =========================
            TWO COLUMN LAYOUT
        ========================== */}

        <div className="faq-layout">

          {/* =========================
              LEFT — STICKY
          ========================== */}

          <div className="faq-left">
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
              <h2 className="faq-heading">
                <span className="faq-heading-main">
                  Got questions?
                </span>

                <br />

                <span className="faq-heading-muted">
                  We've got <br/> answers.
                </span>
              </h2>

              <p className="faq-description">
                Everything you need to know about our services, process,
                timelines, pricing, and what it's like to work with Copper
                Studio.
              </p>
            </motion.div>
          </div>

          {/* =========================
              RIGHT — FAQ CONTAINER
          ========================== */}

          <div className="faq-right">
            <div className="faq-scroll">
              <div className="faq-list">

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
                      className="faq-item"
                    >

                      {/* QUESTION + ANSWER WRAPPER */}

                      <div
                        className={`faq-wrapper ${
                          isOpen ? "is-open" : ""
                        }`}
                      >

                        {/* QUESTION */}

                        <button
                          type="button"
                          onClick={() => toggleFAQ(index)}
                          className={`faq-question ${
                            isOpen ? "is-open" : ""
                          }`}
                        >
                          <span className="faq-question-text">
                            {faq.question}
                          </span>

                          {/* PLUS / MINUS */}

                          <span
                            className={`faq-icon ${
                              isOpen ? "is-open" : ""
                            }`}
                          >
                            +
                          </span>
                        </button>

                        {/* ANSWER */}

                        <div
                          className={`faq-answer ${
                            isOpen ? "is-open" : ""
                          }`}
                        >
                          <div className="faq-answer-inner">
                            <p>{faq.answer}</p>
                          </div>
                        </div>

                      </div>
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
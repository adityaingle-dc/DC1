import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "You can fill out the enquiry form, message us on WhatsApp, or schedule a call directly, whichever works best for you. We’ll take it from there and discuss your project, goals, and requirements.",
  },
  {
    question: " Is the initial consultation free?",
    answer:
      "Yes. The first consultation is complimentary and gives us a chance to understand your business, goals, and requirements before discussing the project further.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Yes. We work with clients remotely and can collaborate with businesses across different locations and time zones.",
  },
  {
    question: "Can I contact you even if I’m not sure what I need?",
    answer:
      "Absolutely. You don’t need to have everything figured out. Tell us what you're trying to achieve, and we can help identify the right direction.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We provide ongoing maintenance, technical support, improvements, hosting, and further development after launch.",
  },
  {
    question: "What happens after I submit an enquiry?",
    answer:
      "We’ll review your enquiry, get back to you, and schedule a conversation if the project looks like a good fit. From there, we’ll discuss the scope, approach, timeline, and next steps.",
  },

  {
    question: "How do I know if Copper Studio is the right fit?",
    answer:
      "The initial call is a chance for both sides to find out. We’ll understand your needs, explain how we work, and determine whether our expertise and approach align with your project.",
  },
];

const FAQ2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-4 py-20 sm:px-6 md:px-10 lg:px-16">

      <div className="mx-auto w-full max-w-[1280px]">

        {/* =====================================
            HEADING — 1280 × 145
        ====================================== */}

        <div
          className="
            flex
            h-[145px]
            w-full
            items-start
          "
        >
          <h2
            className="
              font-['DM_Sans']
              text-4xl
              font-semibold
              leading-[0.95]
              tracking-tight
              text-black
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Got Questions ?,
            <br />
            We've Got Answers.
          </h2>
        </div>


        {/* =====================================
            FAQ CONTAINER — 1280 × 420
        ====================================== */}

        <div
          className="
            w-full
            min-h-[420px]
            rounded-3xl
            bg-white
            p-4
            sm:p-5
            md:p-6
          "
        >

          <div className="flex flex-col gap-2">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  layout
                  className="w-full"
                >

                  {/* =================================
                      QUESTION — 1280 × 60
                  ================================== */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className={`
                      flex
                      min-h-[60px]
                      w-full
                      items-center
                      justify-between
                      rounded-full
                      
                      px-5
                      text-left
                      transition-all
                      duration-300
                      sm:px-6
                      md:px-7
                      ${
                        isOpen
                          ? "bg-black/5"
                          : "bg-black/5"
                      }
                    `}
                  >

                    <span
                      className="
                        pr-6
                        text-sm
                        font-medium
                        leading-tight
                        tracking-tight
                        
                        text-black
                        sm:text-base
                        md:text-lg
                      "
                    >
                      {faq.question}
                    </span>


                    {/* Plus / Minus */}

                    <span
                      className={`
                        flex
                        h-8
                        w-8
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
                      <span className="text-lg font-light leading-none">
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
  
  type="button"
  onClick={() => toggleFAQ(index)}
  className={`
    flex
    min-h-[60px]
    w-full
    items-center
    justify-between
    px-5
    text-left
    transition-all
    duration-300
    sm:px-6
    md:px-7
    ${
      isOpen
        ? "rounded-t-full bg-white"
        : "rounded-full bg-white/70 hover:bg-white"
    }
  `}
>

  
                          {faq.answer}
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

    </section>
  );
};

export default FAQ2;
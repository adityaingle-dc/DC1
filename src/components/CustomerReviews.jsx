import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    quote:
      "Copper Studio understood exactly what we wanted and turned our ideas into a digital experience that feels premium, modern and completely aligned with our brand.",
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Common Grounds",
  },
  {
    quote:
      "The entire process was smooth from start to finish. Their team brought great ideas to the table and delivered a website that our customers genuinely enjoy using.",
    name: "Daniel Carter",
    role: "Founder",
    company: "DataCircles",
  },
  {
    quote:
      "What stood out most was their attention to detail. They didn't just build a website for us — they created an experience that actually represents our business.",
    name: "Michael Anderson",
    role: "Creative Director",
    company: "Nora",
  },
];

const CustomerReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  /*
    =========================================
    AUTO CHANGE REVIEW EVERY 5 SECONDS
    =========================================
  */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[activeReview];

  return (
    <section className="bg-white px-6 py-2 md:px-10 lg:px-16">

      {/* =================================================
          MAIN CONTAINER
          1200 × 594
      ================================================= */}

      <div
        className="
          mx-auto
          flex
          h-[594px]
          w-full
          max-w-[1200px]
          items-center
          justify-center
          gap-8
        "
      >

        {/* =================================================
            LOGO
            400 × 400
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            flex
            h-[400px]
            w-[400px]
            shrink-0
            items-center
            justify-center
          "
        >
          <img
            src="/icons/client_testimonial.png"
            alt="Copper Studio"
            className="
              h-[400px]
              w-[400px]
              object-contain
            "
          />
        </motion.div>


        {/* =================================================
            REVIEW CONTAINER
            819 × 364
        ================================================= */}

        <div
          className="
            flex
            h-[364px]
            w-[819px]
            shrink-0
            flex-col
            justify-center
          "
        >

          {/* =================================================
              REVIEW CONTENT
          ================================================= */}

          <AnimatePresence mode="wait">

            <motion.div
              key={activeReview}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >

              {/* Quote */}

              <div
                className="
                  text-6xl
                  leading-none
                  text-orange-500
                "
              >
                “
              </div>


              {/* Review */}

              <p
                className="
                  mt-5
                  max-w-[760px]
                  text-2xl
                  font-medium
                  leading-[1.35]
                  tracking-tight
                  text-black
                  sm:text-3xl
                  md:text-4xl
                "
              >
                {review.quote}
              </p>


              {/* Customer Information */}

              <div className="mt-8">

                <p
                  className="
                    text-base
                    font-medium
                    text-black
                  "
                >
                  {review.name}
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-black/45
                  "
                >
                  {review.role} · {review.company}
                </p>

              </div>

            </motion.div>

          </AnimatePresence>


          {/* =================================================
              REVIEW INDICATORS
          ================================================= */}

          <div className="mt-8 flex items-center gap-2">

            {reviews.map((_, index) => (

              <button
                key={index}
                type="button"
                onClick={() => setActiveReview(index)}
                aria-label={`Show review ${index + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeReview === index
                      ? "w-8 bg-orange-500"
                      : "w-2 bg-black/15"
                  }
                `}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default CustomerReviews;
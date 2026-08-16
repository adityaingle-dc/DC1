import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    quote:
      "Copper Studio completely transformed how we manage our business. The new website makes it easy for customers to explore our services and get in touch, while the custom CRM has made tracking clients, cab assignments, driver availability, and trip details incredibly efficient. Everything is now organized in one place, saving our team hours every week and giving us a scalable system.",
    name: "Subhash Mishra | Director",
    company: "Facilities Tours & Travels Pvt. Ltd.",
    image: "/client_reviews/c1.svg",
  },
  {
    quote:
      "Copper Studio created a website that represents our agency perfectly. The team understood our vision, organized our content clearly, and delivered a modern, user-friendly experience. The new website has strengthened our online presence and given us a scalable platform to showcase our work and support our growth.",
    name: "Pratik Jambhale | Founder",
    company: "Nitty Gritty Labz LLP",
    image: "/client_reviews/c2.svg",
  },
  {
    quote:
      "Copper Studio developed a rebranding proposal backed by thorough research and strategic thinking. They took the time to understand our business before presenting multiple concepts, each with a clear rationale. The proposal gave us a strong vision for how our brand could evolve and grow.",
    name: "Mallika Kadambande | Marketing Head",
    company: "Qodenext India Private Limited",
    image: "/client_reviews/c3.svg",
  },
];

const CustomerReviews = () => {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[activeReview];

  return (
    <section
      className="
        bg-white
        px-4
        py-12

        sm:px-6
        sm:py-16

        md:px-10
        md:py-20

        lg:px-16
      "
    >
      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1200px]
          flex-col
          items-center
          justify-center
          gap-8

          sm:gap-10

          lg:flex-row
          lg:items-center
          lg:gap-8
        "
      >

        {/* =================================================
            LOGO
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
            h-[220px]
            w-[220px]
            shrink-0
            items-center
            justify-center

            sm:h-[260px]
            sm:w-[260px]

            md:h-[300px]
            md:w-[300px]

            lg:h-[400px]
            lg:w-[400px]
          "
        >
          <img
            src="/icons/client_testimonial.png"
            alt="Copper Studio"
            className="
              h-full
              w-full
              object-contain
            "
          />
        </motion.div>


        {/* =================================================
            REVIEW CONTAINER
        ================================================= */}

        <div
          className="
            flex
            w-full
            max-w-[819px]
            min-w-0
            flex-1
            flex-col
            justify-center

            lg:min-h-[364px]
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
              className="w-full min-w-0"
            >

              {/* Quote */}

              <div
                className="
                  text-5xl
                  leading-none
                  text-orange-500

                  sm:text-6xl
                "
              >
                “
              </div>


              {/* Review */}

              <p
                className="
                  mt-4
                  w-full
                  max-w-none
                  break-words
                  font-dm-sans
                  text-[20px]
                  font-normal
                  leading-7
                  tracking-tight
                  text-black

                  sm:mt-5
                  sm:text-[22px]
                  sm:leading-[32px]

                  md:text-[24px]
                  md:leading-[34px]
                "
              >
                {review.quote}
              </p>


              {/* Customer Information + Indicators */}

              <div
                className="
                  mt-6
                  flex
                  w-full
                  flex-col
                  gap-5

                  sm:mt-8
                  sm:gap-6

                  md:flex-row
                  md:items-end
                  md:justify-between
                "
              >

                {/* Customer Information */}

                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-3
                    font-dm-sans
                  "
                >

                  {/* Customer Image */}

                  <div
                    className="
                      h-[44px]
                      w-[44px]
                      shrink-0
                      overflow-hidden
                      rounded-full
                      border
                      border-black/10
                      bg-black/5

                      sm:h-[50px]
                      sm:w-[50px]
                    "
                  >
                    <img
                      src={review.image}
                      alt={review.name}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>


                  {/* Customer Information */}

                  <div className="min-w-0">

                    <p
                      className="
                        break-words
                        font-dm-sans
                        text-sm
                        font-medium
                        text-black

                        sm:text-base
                      "
                    >
                      {review.name}
                    </p>

                    <p
                      className="
                        mt-1
                        break-words
                        font-dm-sans
                        text-xs
                        text-black/45

                        sm:text-sm
                      "
                    >
                      {review.company}
                    </p>

                  </div>

                </div>


                {/* Review Indicators */}

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-2
                  "
                >
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

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
};

export default CustomerReviews;
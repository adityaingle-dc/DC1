import { motion } from "framer-motion";

const callPoints = [
  {
    title: "Understand Your Business",
    icon: "/contactus/card1.png",
    description:
      "A quick look at your goals, audience, and challenges.",
  },
  {
    title: "Discuss Your Project",
    icon: "/contactus/card2.png",
    description:
      "Explore what you’re looking to build and why.",
  },
  {
    title: "See If We’re the Right Fit",
    icon: "/contactus/card3.png",
    description:
      "Make sure our expertise and approach align with your needs.",
  },
  {
    title: "Plan the Next Steps",
    icon: "/contactus/card4.png",
    description:
      "Align on scope, timeline, and what comes next.",
  },
];

const CallPoints = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:px-10 lg:px-16">

      <div className="mx-auto w-full max-w-[1200px]">

        {/* =====================================
            HEADING — 672 × 46
        ====================================== */}

        <div
          className="
            flex
            h-[46px]
            w-full
            max-w-[672px]
            items-center
          "
        >
          <h2
            className="
              font-['DM_Sans']
              text-2xl
              font-semibold
              leading-none
              tracking-tight
              text-black
              sm:text-3xl
            "
          >
            What to expect from this call
          </h2>
        </div>


        {/* =====================================
            CARDS
        ====================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            gap-6

            sm:flex-row
            sm:flex-wrap
            sm:justify-center

            lg:flex-nowrap
            lg:justify-between
            lg:gap-6
            font-['DM_Sans']
          "
        >

          {callPoints.map((point, index) => (

            <motion.div
              key={point.title}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                group
                relative
                h-[230px]
                w-[300px]
                shrink-0
                overflow-hidden
                rounded-2xl
                border
                border-black/10
                bg-[#f7f7f5]
                font-['DM_Sans']
                p-5
                transition-all
                duration-300
                hover:border-orange-500
                hover:bg-orange-500
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)]
              "
            >

              {/* =================================
                  ICON — 27 × 27
              ================================== */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  flex
                  h-[27px]
                  w-[27px]
                  items-center
                  justify-center
                  font-['DM_Sans']
                "
              >
                <img
                  src={point.icon}
                  alt={point.title}
                  className="
                    h-[27px]
                    w-[27px]
                    object-contain
                    brightness-0
                    font-['DM_Sans']
                    transition-all
                    duration-300
                    group-hover:invert
                  "
                />
              </div>


              {/* =================================
                  CONTENT — 236 × 76
              ================================== */}

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  w-[236px]
                  -translate-x-1/2
                "
              >

                {/* Heading — 236 × 23 */}

                <h3
                  className="
                    h-[23px]
                    w-[236px]
                    text-base
                    font-medium
                    leading-[23px]
                    tracking-tight
                    font-['DM_Sans']
                    text-black
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {point.title}
                </h3>


                {/* White Divider */}

                <div
                  className="
                    my-2
                    h-px
                    w-[236px]
                    font-['DM_Sans']
                    bg-black/10
                    transition-colors
                    duration-300
                    group-hover:bg-white/50
                  "
                />


                {/* Paragraph — 236 × 41 */}

                <p
                  className="
                    min-h-[41px]
                    w-[236px]
                    text-xs
                    leading-5
                    text-black/50
                    font-['DM_Sans']
                    transition-colors
                    duration-300
                    group-hover:text-white/85
                  "
                >
                  {point.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default CallPoints;
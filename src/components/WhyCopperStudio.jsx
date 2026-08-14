import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "All Under One Roof",
    description:
    "Branding, websites, and digital experiences designed together.",
    image: "/stack/all under one roof_diagram.png",
  },
  {
    number: "02",
    title: "Dedicated Client Portal",
    description:
      "Every conversation, file, and milestone in one organized workspace.",
    image: "/stack/client portal_diagram.png",
  },
  {
    number: "03",
    title: "Ongoing Support",
    description:
      "Reliable hosting and ongoing support to keep your website running smooth.",
    image: "/stack/ongoing support_diagram.png",
  },
];

const WhyCopperStudio = () => {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-[95%]">

        {/* =====================================
            CENTERED HEADING
        ====================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto w-full max-w-4xl text-center"
        >

          <h2
            className="
              mt-4
              whitespace-nowrap
              text-3xl
              font-semibold
              leading-[0.98]
              tracking-tight
              text-black
              sm:mt-5
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Why work with Copper Studio
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-6
              text-black/50
              sm:mt-7
              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            A collaborative approach focused on transparency, thoughtful execution, and long term support, so you can focus on growing your business while we handle the rest.
          </p>
        </motion.div>

        {/* =====================================
            CARDS CONTAINER
        ====================================== */}

        <div
          className="
            mx-auto
            mt-12
            flex
            w-full
            max-w-[1198px]
            flex-wrap
            bg-white
            justify-center
            gap-5
            sm:mt-16
            lg:mt-20
          "
        >

          {reasons.map((reason, index) => (

            <motion.div
              key={reason.number}
              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                h-[450px]
                w-[376px]
                shrink-0
                overflow-hidden
                rounded-2xl
                
                bg-white
                p-2
                transition-all
                duration-300
                hover:border-orange-500/50
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
              "
            >

              {/* =====================================
                  IMAGE — 360 × 310
              ====================================== */}

              <div
                className="
                  relative
                  h-[310px]
                  w-[360px]
                  overflow-hidden
                  rounded-xl
                "
              >

                <motion.img
                  src={reason.image}
                  alt={reason.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                  "
                  whileHover={{
                    scale: 1.05,
                  }}
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                  "
                />

              </div>

              {/* =====================================
                  CONTENT — 360 × 120
              ====================================== */}

              <div
                className="
                  h-[120px]
                  w-[360px]
                  px-3
                  pt-3
                "
              >

              

                {/* Title */}

                <h3
                  className="
                    mt-1
                    text-xl
                    font-medium
                    tracking-tight
                    text-black
                    sm:text-2xl
                  "
                >
                  {reason.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-black/50
                    sm:text-sm
                  "
                >
                  {reason.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyCopperStudio
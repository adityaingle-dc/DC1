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
    <section
      className="
        bg-05050b
        px-4
        py-10

        sm:px-6
        sm:py-24

        md:px-10
        md:py-28

        lg:px-16
        lg:py-32
      "
    >
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
          className="
            mx-auto
            flex
            w-full
            max-w-4xl
            flex-col
            items-center
            text-center
          "
        >

          <h2
            className="
              mt-4
              flex
              h-auto
              w-full
              items-center
              justify-center
              font-dm-sans
              text-[36px]
              font-semibold
              leading-[1]
              tracking-tight
              text-black
              [-webkit-text-stroke:0.8px_rgba(0,0,0,0.8)]

              sm:text-[48px]

              md:text-[56px]

              lg:h-[76px]
              lg:w-[952px]
              lg:whitespace-nowrap
              lg:translate-x-4
              lg:text-[64px]
            "
          >
            Why Work With Copper Studio
          </h2>


          <p
            className="
              mx-auto
              mt-4
              h-auto
              w-full
              max-w-[727px]
              font-dm-sans
              text-[15px]
              font-normal
              leading-6
              text-black/80
              [-webkit-text-stroke:0.35px_rgba(0,0,0,0.2)]

              sm:mt-5
              sm:text-[16px]
              sm:leading-7

              md:text-[18px]

              lg:h-[58px]
              lg:mt-2
            "
          >
            A collaborative approach focused on transparency, thoughtful
            execution, and long term support, so you can focus on growing your
            business while we handle the rest.
          </p>

        </motion.div>


        {/* =====================================
            CARDS CONTAINER
        ====================================== */}

        <div
          className="
            mx-auto
            mt-10
            flex
            w-full
            max-w-[1198px]
            flex-wrap
            justify-center
            gap-5
            bg-white

            sm:mt-16
            sm:gap-6

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
              whileHover={{}}
              className="
                group
                relative
                h-[450px]
                w-[376px]
                max-w-full
                shrink-0
                overflow-hidden
                rounded-2xl
                bg-white
                p-2
                transition-all
                duration-300
                hover:border-orange-500/50
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]

                max-[639px]:h-auto
                max-[639px]:w-full

                sm:w-[340px]

                md:w-[360px]

                lg:h-[450px]
                lg:w-[376px]
              "
            >

              {/* =====================================
                  IMAGE — 360 × 310
              ====================================== */}

              <div
                className="
                  relative
                  h-[260px]
                  w-full
                  overflow-hidden
                  rounded-xl

                  sm:h-[280px]

                  md:h-[300px]

                  lg:h-[310px]
                  lg:w-[360px]
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
                  h-auto
                  min-h-[120px]
                  w-full
                  px-3
                  pt-3
                  lg:h-[120px]
                  lg:w-[360px]
                "
              >

                {/* Title */}

                <h3
                  className="
                    mt-1
                    font-dm-sans
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
                    font-dm-sans
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

export default WhyCopperStudio;
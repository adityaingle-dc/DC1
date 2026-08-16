import { motion } from "framer-motion";

const features = [
  {
    name: "Complete Transparency",
    logo: "/cp-icons/logo1.png",
    description:
      "Track timelines, project progress, meetings and updates in one place.",
  },
  {
    name: "Everything in One Place",
    logo: "/cp-icons/logo2.png",
    description:
      "Access, upload, download and manage all your project files without endless emails treads.",
  },
  {
    name: "Faster Feedback",
    logo: "/cp-icons/logo3.png",
    description:
      "Share feedback, approvals and files directly through the portal for smoother communication.",
  },
  {
    name: "Lifetime Access to Your Work",
    logo: "/cp-icons/logo4.png",
    description:
      "Revisit your project assets anytime, even after the project is complete.",
  },
];

const ClientPortal = () => {
  return (
    <section
      className="
        bg-white
        px-4
        py-16

        sm:px-6
        sm:py-20

        md:px-10
        md:py-24

        lg:px-16
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-[95%]">

        {/* =====================================
            HEADER + IMAGE
        ====================================== */}

        <div className="mx-auto w-full max-w-6xl">

          {/* Header */}

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
            className="
              mb-8
              flex
              flex-col
              gap-5

              sm:flex-row
              sm:items-start
              sm:justify-between
              sm:gap-8
            "
          >

            {/* Heading */}

            <div className="min-w-0 w-full">

              <h2
                className="
                  mt-2
                  h-auto
                  w-full
                  text-4xl
                  font-semibold
                  leading-[0.95]
                  tracking-[0.2px]
                  text-black
                  sm:text-5xl
                  md:text-6xl
                  lg:mt-4
                  lg:h-[68px]
                  lg:w-[424px]
                  lg:text-7xl
                  font-dm-sans
                "
              >
                Client Portal
              </h2>

              <p
                className="
                  mt-4
                  h-auto
                  w-full
                  max-w-[981px]
                  font-dm-sans
                  text-sm
                  font-normal
                  leading-6
                  text-black/85
                  sm:text-base
                  md:text-lg
                "
              >
                A centralized client portal built for seamless collaboration
                and complete transparency. Track project progress, access
                deliverables, upload files, share feedback, and revisit every
                project asset anytime with lifetime access.
              </p>

            </div>


            {/* Know More Button */}

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                mt-1
                w-fit
                shrink-0
                self-start
                rounded-full
                border
                border-black/30
                px-6
                translate-y-0
                py-2.5
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:border-orange-500
                hover:bg-orange-500
                hover:text-white
                sm:mt-4
                sm:px-7
                sm:py-3
                font-dm-sans

                lg:translate-y-20
              "
            >
              Know more
            </motion.button>

          </motion.div>


          {/* =====================================
              MAIN IMAGE
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
            }}
            className="
              relative
              w-full
              overflow-hidden
              rounded-xl
              sm:rounded-2xl
            "
          >

            <div className="w-full bg-white">

              <img
                src="/client-portal.png"
                alt="Client portal"
                className="
                  block
                  h-auto
                  min-h-[180px]
                  w-full
                  object-cover

                  sm:min-h-[220px]
                  md:min-h-0
                "
              />

            </div>

            <div />

          </motion.div>

        </div>


        {/* =====================================
            FEATURE RECTANGLES
        ====================================== */}

        <div className="mx-auto mt-10 w-full max-w-6xl sm:mt-12">

          <div
            className="
              flex
              flex-col
              items-center
              gap-6

              sm:flex-row
              sm:flex-wrap
              sm:justify-center
              sm:gap-6

              lg:flex-nowrap
              lg:justify-center
              lg:gap-8
            "
          >

            {features.map((feature, index) => (

              <motion.div
                key={feature.name}
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
                  duration: 0,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  h-[230px]
                  w-[300px]
                  max-w-full
                  shrink-0
                  overflow-hidden
                  rounded-2xl
                  mt-15
                  bg-[#fbfbf9]
                  p-5
                  transition-all
                  duration-400
                  hover:border-orange-500
                  hover:bg-[#EE7A1D]
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)]

                  max-[639px]:h-[210px]
                  max-[639px]:w-full

                  sm:w-[300px]
                  md:w-[300px]
                  lg:h-[230px]
                  lg:w-[300px]
                "
              >

                {/* =================================
                    CONTENT BOX
                ================================== */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    w-[236px]
                    max-w-[calc(100%-40px)]
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                >

                  {/* Heading */}

                  <h3
                    className="
                      translate-y-16
                      font-dm-sans
                      text-lg
                      font-medium
                      tracking-tight
                      text-black
                      transition-colors
                      duration-300
                      group-hover:text-white

                      max-[639px]:translate-y-14
                      sm:text-lg
                    "
                  >
                    {feature.name}
                  </h3>


                  {/* Divider */}

                  <div
                    className="
                      translate-y-14
                      my-3
                      h-px
                      w-full
                      bg-orange-500
                      transition-colors
                      duration-300
                      group-hover:bg-white
                    "
                  />


                  {/* Paragraph */}

                  <p
                    className="
                      translate-y-12
                      font-dm-sans
                      text-[16px]
                      leading-5
                      text-black/60
                      transition-colors
                      duration-300
                      group-hover:text-white/85

                      max-[639px]:translate-y-10
                    "
                  >
                    {feature.description}
                  </p>

                </div>


                {/* =================================
                    LOGO
                ================================== */}

                <div
                  className="
                    absolute
                    top-3
                    left-8
                    flex
                    h-[23px]
                    w-[25px]
                    items-center
                    justify-center

                    sm:left-8
                  "
                >

                  <img
                    src={feature.logo}
                    alt={feature.name}
                    className="
                      h-[23px]
                      w-[25px]
                      object-contain
                      brightness-0
                      transition-all
                      duration-300
                      group-hover:invert
                      group-hover:scale-110
                    "
                  />

                </div>

              </motion.div>

            ))}

          </div>

        </div>


        {/* =====================================
            DESCRIPTION
        ====================================== */}

        <div
          className="
            mx-auto
            mt-12
            flex
            w-full
            max-w-6xl
            flex-col
            gap-8
            font-dm-sans

            sm:mt-16
            md:mt-20
          "
        />

      </div>
    </section>
  );
};

export default ClientPortal;
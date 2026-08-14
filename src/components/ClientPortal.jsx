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
      <div className="mx-auto max-w-[95%]">

        {/* =====================================
            HEADER + IMAGE
        ====================================== */}

        <div className="mx-auto max-w-6xl">

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

            <div>
              <h2
                className="
                  mt-2
                  max-w-3xl
                  text-4xl
                  font-medium
                  leading-[0.95]
                  tracking-tight
                  text-black
                  sm:text-5xl
                  md:text-6xl
                  lg:mt-4
                  lg:text-7xl
                "
              >
                Client Portal
              </h2>
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
                rounded-full
                border
                border-black/30
                px-6
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
      h-auto
      min-h-[220px]
      w-full
      object-cover
      sm:min-h-0
    "
  />
</div>

            <div
              
            />

          </motion.div>

        </div>


        {/* =====================================
            FEATURE RECTANGLES
        ====================================== */}

        <div className="mx-auto mt-10 max-w-6xl sm:mt-12">

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
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
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
                  p-5
                  transition-all
                  duration-400
                  hover:border-orange-500
                  hover:bg-orange-500
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)]
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
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                >

                  {/* Heading */}

                  <h3
                    className="
                      text-lg
                      font-medium
                      tracking-tight
                      text-black
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {feature.name}
                  </h3>


                  {/* Divider */}

                  <div
                    className="
                      my-3
                      h-px
                      w-full
                      bg-black/10
                      transition-colors
                      duration-300
                      group-hover:bg-white/40
                    "
                  />


                  {/* Paragraph */}

                  <p
                    className="
                      text-xs
                      leading-5
                      text-black/45
                      transition-colors
                      duration-300
                      group-hover:text-white/85
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
                    top
                    left-1/2
                    flex
                    h-[23px]
                    w-[25px]
                    -translate-x-1/2
                    items-center
                    justify-center
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
            max-w-6xl
            flex-col
            gap-8
            sm:mt-16
            md:mt-20
          "
        />

      </div>
    </section>
  );
};

export default ClientPortal;
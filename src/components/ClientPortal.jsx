import { motion } from "framer-motion";
import {
  MdDashboard,
  MdFolder,
  MdReceiptLong,
  MdSupportAgent,
} from "react-icons/md";

const features = [
  {
    name: "Dashboard",
    icon: MdDashboard,
    description: "Track everything",
  },
  {
    name: "Projects",
    icon: MdFolder,
    description: "Manage projects",
  },
  {
    name: "Invoices",
    icon: MdReceiptLong,
    description: "Manage billing",
  },
  {
    name: "Support",
    icon: MdSupportAgent,
    description: "Stay connected",
  },
];

const ClientPortal = () => {
  return (
    <section className="bg-white px-6 py-28 md:px-10 lg:px-16">

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
              items-start
              justify-between
              gap-8
            "
          >

            {/* Heading */}

            <div>
              <h2
                className="
                  mt-4
                  max-w-3xl
                  text-5xl
                  font-medium
                  leading-[0.95]
                  tracking-tight
                  text-black
                  sm:text-6xl
                  md:text-7xl
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
                mt-8
                shrink-0
                rounded-full
                border
                border-black/30
                px-7
                py-3
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:border-orange-500
                hover:bg-orange-500
                hover:text-white
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
              rounded-2xl
              border
              border-black/10
            "
          >

            <img
              src="/client-portal.png"
              alt="Client portal"
              className="
                h-auto
                w-full
                object-cover
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/20
                to-transparent
              "
            />

          </motion.div>

        </div>


        {/* =====================================
            OVERLAPPING FEATURE CIRCLES
        ====================================== */}

        <div className="mx-auto mt-12 max-w-6xl">

          <div className="
            flex
            w-full
            items-center
            overflow-visible
          ">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.name}

                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 20,
                  }}

                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}

                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    zIndex: 20,
                  }}

                  className="
                    group
                    relative
                    flex
                    aspect-square
                    w-[28%]
                    shrink-0
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-black/50
                    bg-transparent
                    text-center
                    transition-all
                    duration-300
                    hover:border-orange-500
                  "

                  style={{
                    marginLeft: index === 0 ? "0" : "-5%",
                  }}
                >

                  {/* =================================
                      ICON
                  ================================== */}

                  <div
                    className="
                      mb-3
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/15
                      text-black
                      transition-all
                      duration-300
                      group-hover:border-orange-500
                      group-hover:bg-orange-500
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>


                  {/* =================================
                      FEATURE NAME
                  ================================== */}

                  <span
                    className="
                      pointer-events-none
                      relative
                      z-10
                      max-w-[120px]
                      text-sm
                      font-medium
                      leading-tight
                      text-black
                      transition-colors
                      duration-300
                      group-hover:text-orange-500
                      sm:text-base
                      md:text-lg
                    "
                  >
                    {feature.name}
                  </span>


                  {/* =================================
                      DESCRIPTION
                  ================================== */}

                  <span
                    className="
                      mt-2
                      max-w-[110px]
                      text-[11px]
                      leading-tight
                      text-black/40
                      transition-colors
                      duration-300
                      group-hover:text-black/60
                      sm:text-xs
                    "
                  >
                    {feature.description}
                  </span>

                </motion.div>
              );
            })}

          </div>

        </div>


        {/* =====================================
            DESCRIPTION
        ====================================== */}

        <div
          className="
            mx-auto
            mt-20
            flex
            max-w-6xl
            flex-col
            gap-8
          "
        >


        </div>

      </div>

    </section>
  );
};

export default ClientPortal;
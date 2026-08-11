import { motion } from "framer-motion";

const features = [
  {
    name: "Decision",
    logo: "/circles/bulb.svg",
    description:
      "Clear decisions that turn ideas into purposeful digital solutions.",
  },
  {
    name: "Client Portal",
    logo: "/circles/screen.svg",
    description:
      "A centralized space to manage projects, communication and documents.",
  },
  {
    name: "Hosting",
    logo: "/circles/refresh.svg",
    description:
      "Reliable infrastructure that keeps your digital experience fast and accessible.",
  },
  {
    name: "Brand Identity",
    logo: "/circles/home.svg",
    description:
      "A distinctive identity that gives your business a memorable presence.",
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
            OVERLAPPING LOGO CIRCLES
        ====================================== */}

        <div className="mx-auto mt-12 max-w-6xl">

          <div
            className="
              flex
              w-full
              items-center
              overflow-visible
            "
          >

            {features.map((feature, index) => (

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
                  zIndex: 50,
                }}

                className="
                  group
                  relative
                  flex
                  aspect-square
                  w-[28%]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  transition-all
                  duration-300
                  hover:bg-white/30
                "

                style={{
                  marginLeft: index === 0 ? "0" : "-5%",
                  zIndex: 10 + index,
                }}
              >

                {/* =================================
                    VISIBLE CIRCLE BORDER
                ================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    border-2
                    border-black/50
                    transition-colors
                    duration-300
                    group-hover:border-orange-500
                  "
                />

                {/* =================================
                    LOGO + TEXT
                ================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    -translate-y-8
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >

                  {/* Logo */}

                  <img
                    src={feature.logo}
                    alt={feature.name}
                    className="
                      h-[15%]
                      w-[15%]
                      object-contain
                      grayscale
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:grayscale-0
                    "
                  />

                  {/* Name */}

                  <span
                    className="
                      mt-4
                      whitespace-nowrap
                      text-sm
                      font-medium
                      tracking-tight
                      text-black
                      transition-colors
                      duration-300
                      group-hover:text-orange-500
                      sm:text-base
                    "
                  >
                    {feature.name}
                  </span>

                  {/* Description */}

                  <p
                    className="
                      mt-2
                      max-w-[150px]
                      text-[10px]
                      leading-4
                      text-black/45
                      sm:text-xs
                      sm:leading-5
                    "
                  >
                    {feature.description}
                  </p>

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
            mt-20
            flex
            max-w-6xl
            flex-col
            gap-8
          "
        />

      </div>
    </section>
  );
};

export default ClientPortal;
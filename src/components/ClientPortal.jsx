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
              border
              border-black/10
              sm:rounded-2xl
            "
          >

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

        <div
          className="
            mx-auto
            mt-10
            max-w-6xl
            sm:mt-12
          "
        >

          {/* =====================================
              DESKTOP / TABLET OVERLAPPING CIRCLES
          ====================================== */}

          <div
            className="
              hidden
              w-full
              items-center
              overflow-visible
              sm:flex
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
                  w-[25%]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/20
                  transition-all
                  duration-300
                  hover:bg-white/30

                  md:w-[27%]

                  lg:w-[28%]
                "

                style={{
                  marginLeft: index === 0 ? "0" : "-5%",
                  zIndex: 10 + index,
                }}
              >

                {/* Visible Circle Border */}

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

                {/* Logo + Text */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    -translate-y-6
                    flex-col
                    items-center
                    justify-center
                    px-4
                    text-center
                    md:-translate-y-8
                  "
                >

                  {/* Logo */}

                  <img
                    src={feature.logo}
                    alt={feature.name}
                    className="
                      h-8
                      w-8
                      object-contain
                      grayscale
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:grayscale-0

                      md:h-10
                      md:w-10

                      lg:h-12
                      lg:w-12
                    "
                  />

                  {/* Name */}

                  <span
                    className="
                      mt-3
                      whitespace-nowrap
                      text-xs
                      font-medium
                      tracking-tight
                      text-black
                      transition-colors
                      duration-300
                      group-hover:text-orange-500

                      md:mt-4
                      md:text-sm

                      lg:text-base
                    "
                  >
                    {feature.name}
                  </span>

                  {/* Description */}

                  <p
                    className="
                      mt-1
                      max-w-[110px]
                      text-[9px]
                      leading-3
                      text-black/45

                      md:max-w-[130px]
                      md:text-[10px]
                      md:leading-4

                      lg:max-w-[150px]
                      lg:text-xs
                      lg:leading-5
                    "
                  >
                    {feature.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>


          {/* =====================================
              MOBILE 2 × 2 CIRCLE GRID
          ====================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:hidden
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

                whileTap={{
                  scale: 0.97,
                }}

                className="
                  group
                  relative
                  flex
                  aspect-square
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-white/30
                  transition-all
                  duration-300
                "
              >

                {/* Visible Circle Border */}

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

                {/* Logo + Text */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    -translate-y-3
                    flex-col
                    items-center
                    justify-center
                    px-5
                    text-center
                  "
                >

                  {/* Logo */}

                  <img
                    src={feature.logo}
                    alt={feature.name}
                    className="
                      h-8
                      w-8
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
                      mt-3
                      text-xs
                      font-medium
                      tracking-tight
                      text-black
                      transition-colors
                      duration-300
                      group-hover:text-orange-500
                    "
                  >
                    {feature.name}
                  </span>

                  {/* Description */}

                  <p
                    className="
                      mt-2
                      max-w-[130px]
                      text-[9px]
                      leading-3.5
                      text-black/45
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
import { motion } from "framer-motion";

const technologies = [
  {
    name: "Figma",
    logo: "/stack/Figma.png",
  },
  {
    name: "Photoshop",
    logo: "/stack/Photoshop.png",
  },
  {
    name: "React",
    logo: "/stack/React.png",
  },
  {
    name: "Next.js",
    logo: "/stack/NEXT.js.png",
  },
  {
    name: "Node.js",
    logo: "/stack/NODE.js.png",
  },
  {
    name: "MongoDB",
    logo: "/stack/MongoDB.png",
  },
  {
    name: "JavaScript",
    logo: "/stack/JS.png",
  },
];

const TechPill = ({ tech }) => {
  return (
    <motion.div
      className="
        group
        flex
        h-[75px]
        w-[170px]
        shrink-0
        cursor-pointer
        items-center
        justify-center
        rounded-full
        border
        border-black/30
        bg-white
        transition-all
        duration-300
        hover:border-orange-500
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]

        sm:h-[85px]
        sm:w-[195px]

        md:h-[90px]
        md:w-[210px]

        lg:h-[97.6px]
        lg:w-[225px]
      "
    >
      <img
        src={tech.logo}
        alt={tech.name}
        className="
          h-[42px]
          w-[90px]
          object-contain
          grayscale
          transition-all
          duration-300
          group-hover:grayscale-0

          sm:h-[48px]
          sm:w-[105px]

          md:h-[52px]
          md:w-[115px]

          lg:h-[55px]
          lg:w-[120px]
        "
      />
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <section
      className="
        overflow-hidden
        bg-white
        px-4
        py-20

        sm:px-6
        sm:py-24

        md:px-10
        md:py-28

        lg:px-16
      "
    >
      <div className="mx-auto max-w-[95%]">

        {/* =====================================
            HEADER
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
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-3xl"
        >
          <h2
            className="
              mt-2
              text-4xl
              font-medium
              leading-[0.95]
              tracking-tight
              text-black

              sm:text-5xl
 font-['DM_Sans']
              md:text-6xl
            "
          >
            Creative &
            <br />
            Development Stack.
          </h2>
        </motion.div>


        {/* =====================================
            TECHNOLOGY MARQUEE
        ====================================== */}

        <div
          className="
            relative
            mt-12
            w-full
            overflow-hidden

            sm:mt-14

            md:mt-16
          "
        >

          <motion.div
            className="
              flex
              w-max
              gap-3

              sm:gap-4
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {/* First set */}

            {technologies.map((tech) => (
              <TechPill
                key={`first-${tech.name}`}
                tech={tech}
              />
            ))}


            {/* Duplicate set for seamless loop */}

            {technologies.map((tech) => (
              <TechPill
                key={`second-${tech.name}`}
                tech={tech}
              />
            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default TechStack;
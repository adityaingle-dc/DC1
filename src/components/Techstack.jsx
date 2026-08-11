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
        h-[97.6px]
        w-[225px]
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
      "
    >
      <img
        src={tech.logo}
        alt={tech.name}
        className="
          h-[55px]
          w-[120px]
          object-contain
          grayscale
          transition-all
          duration-300
          group-hover:grayscale-0
        "
      />
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <section className="overflow-hidden bg-white px-6 py-28 md:px-10 lg:px-16">

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
              mt-5
              text-5xl
              font-medium
              leading-[0.95]
              tracking-tight
              text-black
              sm:text-5xl
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

        <div className="relative mt-16 w-full overflow-hidden">

          <motion.div
            className="
              flex
              w-max
              gap-4
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
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
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="
        group
        flex
        cursor-pointer
        items-center
        gap-3
        rounded-full
        border
        border-black/30
        bg-white
        px-6
        py-3
        transition-all
        duration-300
        hover:border-orange-500
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      "
    >
      <div className="flex h-7 w-7 items-center justify-center">
        <img
          src={tech.logo}
          alt={tech.name}
          className="
            h-6
            w-6
            object-contain
            grayscale
            transition-all
            duration-300
            group-hover:grayscale-0
          "
        />
      </div>

      <span
        className="
          whitespace-nowrap
          text-sm
          font-medium
          text-black/70
          transition-colors
          duration-300
          group-hover:text-black
        "
      >
        {tech.name}
      </span>
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <section className="bg-white px-6 py-28 md:px-10 lg:px-16">

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
         
          <h2 className="
            mt-5
            text-5xl
            font-medium
            leading-[0.95]
            tracking-tight
            text-black
            sm:text-5xl
           
          ">
            Creative &
            Development Stack.
          </h2>

          
        </motion.div>


        {/* =====================================
            TECHNOLOGY PILLS
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
            delay: 0.15,
          }}
          className="
            mt-16
            flex
            flex-wrap
            gap-3
          "
        >
          {technologies.map((tech) => (
            <TechPill
              key={tech.name}
              tech={tech}
            />
          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default TechStack;
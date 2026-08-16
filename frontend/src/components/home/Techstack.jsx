import { motion } from "framer-motion";

const technologies = [
  {
    name: "Figma",
    logo: "/stack/Vector.svg",
  },
  {
    name: "Photoshop",
    logo: "/stack/image 35.svg",
  },
  {
    name: "React",
    logo: "/stack/image 28.svg",
  },
  {
    name: "Next.js",
    logo: "/stack/image 29.svg",
  },
  {
    name: "Node.js",
    logo: "/stack/image 30.svg",
  },
  {
    name: "Firebase",
    logo: "/stack/image 31.svg",
  },
  {
    name: "HTML",
    logo: "/stack/image 32.svg",
  },
  {
    name: "MongoDB",
    logo: "/stack/image 33.svg",
  },
  {
    name: "CSS",
    logo: "/stack/image 34.svg",
  },
  {
    name: "JavaScript",
    logo: "/stack/image 35.svg",
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

        max-[639px]:h-[72px]
        max-[639px]:w-[165px]

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

          max-[639px]:h-[32px]
          max-[639px]:w-[70px]

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
        bg-05050b
        
        pr-0
        py-20
        
      

        
        sm:py-24

       
        md:py-28

     
      "
    >
      <div className="mx-auto  w-full max-w-[100%]">

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
          className="
            flex
            w-full
            justify-start
          "
        >
          <h2
            className="
              whitespace-nowrap
              font-dm-sans
              text-[36px]
              font-semibold
              leading-[1]
              tracking-tight
              text-left
              text-black
             translate-x-3
              max-[639px]:text-[28px]
              sm:text-[32px]
              md:text-[36px]
            "
          >
            Our Creative & Development Stack.
          </h2>
        </motion.div>


        {/* =====================================
            TECHNOLOGY MARQUEE
        ====================================== */}

        <div
  className="
    relative
    mt-10
    w-[1440px]
    mx-auto
    overflow-hidden
    justify-start
    sm:mt-12
    md:mt-14
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
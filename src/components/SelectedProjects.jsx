import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const projects = [
  "/projects/projects_common grounds.png",
  "/projects/projects_cottson_1.png",
  "/projects/projects_cottson_2.png",
  "/projects/projects_datacircles_1.png",
  "/projects/projects_datacircles_2.png",
  "/projects/projects_ftat.png",
  "/projects/projects_nitty gritty.png",
  "/projects/projects_nora.png",
  "/projects/projects_qodenext.png",
  "/projects/projects_umaraj.png",
];

const firstRow = projects.slice(0, 5);
const secondRow = projects.slice(5, 10);

const ProjectImage = ({ image, index }) => {
  return (
    <div
      className="
        group
        relative
        h-[400px]
        w-[320px]
        shrink-0
        overflow-hidden
        rounded-2xl
      "
    >
      <motion.img
        src={image}
        alt={`Project ${index + 1}`}
        className="
          h-full
          w-full
          object-cover
        "
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-black/0
          transition-colors
          duration-300
          group-hover:bg-black/10
        "
      />
    </div>
  );
};

const SelectedProjects = () => {
  return (
    <div className="w-full bg-white">
      <section
        className="
          mx-auto
          h-[954px]
          w-100vw
          max-w-full
          overflow-hidden
          bg-white
        "
      >
       
      {/* =====================================
          CONTENT
      ====================================== */}

      <div
        className="
          mx-auto
          h-full
          w-full
          overflow-hidden
          px-6
          py-24
          md:px-10
          lg:px-16
        "
      >

        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <div
  className="
    mb-14
    flex
    w-full
    items-end
    justify-between
    gap-6
  "
>

          <h2
            className="
              text-4xl
              font-medium
              tracking-tight
              text-gray-950
              sm:text-5xl
              md:text-6xl
            
            "
          >
            Selected Projects
          </h2>

        

        {/* See All Projects */}

<motion.button
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.97 }}
  className="
    flex
    shrink-0
    items-center
    gap-2
    rounded-full
    border
    
    bg-white
    px-6
    py-3
    text-sm
    font-medium
    text-gray-900
    transition-colors
    duration-300
    hover:bg-orange-500
    hover:text-white
  "
>
  <span>See All Projects</span>
  <MdChevronRight size={20} />
</motion.button>
        </div>


        {/* =====================================
            TOP MARQUEE — MOVES LEFT
        ====================================== */}

        <div
          className="
            relative
            w-full
            overflow-hidden
          "
        >

          <motion.div
            className="
              flex
              w-max
              gap-5
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {[...firstRow, ...firstRow].map((image, index) => (
              <ProjectImage
                key={`top-${index}`}
                image={image}
                index={index}
              />
            ))}

          </motion.div>

        </div>


        {/* =====================================
            BOTTOM MARQUEE — MOVES RIGHT
        ====================================== */}

        <div
          className="
            relative
            mt-6
            w-full
            overflow-hidden
          "
        >

          <motion.div
            className="
              flex
              w-max
              gap-5
            "
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
          >

            {[...secondRow, ...secondRow].map((image, index) => (
              <ProjectImage
                key={`bottom-${index}`}
                image={image}
                index={index + 5}
              />
            ))}

          </motion.div>

        </div>

      </div>

    </section>

    </div>
  );
};

export default SelectedProjects;
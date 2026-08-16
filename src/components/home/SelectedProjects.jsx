import { motion } from "framer-motion";
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
        h-[260px]
        w-[210px]
        shrink-0
        overflow-hidden
        rounded-xl

        sm:h-[320px]
        sm:w-[260px]
        sm:rounded-2xl

        md:h-[360px]
        md:w-[290px]

        lg:h-[400px]
        lg:w-[320px]
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
          w-full
          overflow-hidden
          bg-white
          py-16

          sm:py-20
          md:py-24
        "
      >

        {/* =====================================
            CONTENT
        ====================================== */}

        <div
          className="
            mx-auto
            w-full
            overflow-hidden
            px-4

            sm:px-6
            md:px-10
            lg:px-16
          "
        >

          {/* =====================================
              SECTION HEADER
          ====================================== */}

          <div
            className="
              mb-8
              flex
              w-full
              items-center
              justify-between
              gap-4

              sm:mb-10
              md:mb-14
            "
          >

            {/* Heading */}

            <h2
              className="
                text-3xl
                font-medium
                tracking-tight
                text-gray-950

                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Selected Projects
            </h2>


            {/* See All Projects */}

            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                flex
                shrink-0
                items-center
                gap-1.5
                rounded-full
                px-3
                py-2
                text-xs
                font-medium
                text-gray-900
                transition-colors
                duration-300
                hover:bg-orange-500
                hover:text-white
                translate-y-3
                sm:gap-2
                sm:px-5
                sm:py-2.5
                sm:text-sm

                md:px-6
                md:py-3
              "
            >
              <span className="whitespace-nowrap">
                See All Projects
              </span>

              <MdChevronRight
                size={18}
                className="sm:h-5 sm:w-5"
              />
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
                gap-3

                sm:gap-4
                md:gap-5
              "
             animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {[...firstRow, ...firstRow].map(
                (image, index) => (
                  <ProjectImage
                    key={`top-${index}`}
                    image={image}
                    index={index}
                  />
                )
              )}

            </motion.div>

          </div>


          {/* =====================================
              BOTTOM MARQUEE — MOVES RIGHT
          ====================================== */}

          <div
            className="
              relative
              mt-3
              w-full
              overflow-hidden

              sm:mt-4
              md:mt-6
            "
          >

            <motion.div
              className="
                flex
                w-max
                gap-3

                sm:gap-4
                md:gap-5
              "
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
            >

              {[...secondRow, ...secondRow].map(
                (image, index) => (
                  <ProjectImage
                    key={`bottom-${index}`}
                    image={image}
                    index={index + 5}
                  />
                )
              )}

            </motion.div>

          </div>

          

        </div>

      </section>

    </div>
  );
};

export default SelectedProjects;
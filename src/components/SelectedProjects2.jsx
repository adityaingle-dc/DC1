import { motion } from "framer-motion";

const projects = [
  "/projects/projects_common grounds.png",
  "/projects/projects_cottson_1.png",
  
  "/projects/projects_datacircles_1.png",
  
  "/projects/projects_nora.png",
  
];

const SelectedProjects = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-10 lg:px-16">

      {/* Section Heading */}
      <div className="mx-auto mb-14 flex max-w-6xl items-end justify-between gap-6">

        <div>
         

          <h2 className="text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
            Selected Projects
          </h2>
        </div>

        {/* See All Projects */}
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="shrink-0 rounded-full border border-gray-900 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
        >
          See All Projects →
        </motion.button>

      </div>

      {/* Project Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-4">

        {projects.map((image, index) => (
          <motion.div
            key={`${image}-${index}`}
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.6,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className={`group relative overflow-hidden rounded-2xl ${
              index % 3 === 1
                ? "aspect-[1.1/1]"
                : index % 3 === 2
                ? "aspect-[0.95/1]"
                : "aspect-square"
            }`}
          >
            <motion.img
              src={image}
              alt={`Project ${index + 1}`}
              className="h-full w-full object-cover"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            />

            <motion.div
              className="absolute inset-0 bg-black/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default SelectedProjects;
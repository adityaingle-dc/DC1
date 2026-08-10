import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "We create distinctive brand identities that communicate who you are, what you stand for, and why people should remember you.",
    images: [
      "/services/services_branding_1.png",
      "/services/services_branding_2.png",
      "/services/services_branding_3.png",
      "/services/services_branding_4.png",
      "/services/services_branding_5.png",
      "/services/services_branding_6.png",
      "/services/services_branding_7.png",
      "/services/services_branding_8.png",
    ],
  },

  {
    number: "02",
    title: "Web Design & Development",
    description:
      "We design modern, immersive websites that combine strong visual direction with intuitive user experiences.",
    images: [
     "/services/services_website_1.png",
     "/services/services_website_2.png",
     "/services/services_website_3.png",
     "/services/services_website_4.png",
     "/services/services_website_5.png",
     "/services/services_website_6.png",
     "/services/services_website_7.png",
     "/services/services_website_8.png"
    ]
  },

  {
    number: "03",
    title: "Custom Company Portal",
    description:
      "We build powerful digital products, internal platforms, and custom company portals designed around the way your business works.",
    images: [
      "/services/portal1.png",
      "/services/portal2.png",
      "/services/portal3.png",
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-white px-4 py-24 md:px-6">
      {/* =================================================
          MAIN SERVICES CONTAINER
      ================================================= */}

      <div className="mx-auto w-full max-w-[95%] overflow-hidden rounded-[2rem] bg-[#101010] text-white">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="px-8 pt-16 md:px-12 md:pt-20 lg:px-16">
      

          <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Services We Offer
          </h2>
        </div>

        {/* =================================================
            SERVICES
        ================================================= */}

        <div className="mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
        duration: 0.8,
        delay: index * 0.1,
      }}
      className=""
    >
      {/* =================================================
          SERVICE CONTENT
      ================================================= */}

      <div className="flex min-h-[850px] flex-col items-center bg-[#101010] px-6 pb-16 pt-10">

        {/* =================================================
            NUMBER
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: -20,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            bg-gradient-to-b
            from-white/40
            via-white/20
            to-white/5
            bg-clip-text
            text-[8rem]
            font-semibold
            leading-none
            tracking-[-0.06em]
            text-transparent
            drop-shadow-[0_14px_20px_rgba(0,0,0,0.95)]
            sm:text-[10rem]
            md:text-[12rem]
          "
        >
          {service.number}
        </motion.p>

        {/* =================================================
            SERVICE TITLE
        ================================================= */}

        <motion.h3
          initial={{
            opacity: 0,
            y: 20,
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
            relative
            z-10
            -mt-10
            max-w-5xl
            text-center
            text-4xl
            font-medium
            leading-tight
            tracking-tight
            text-white
            sm:-mt-12
            sm:text-5xl
            md:-mt-16
            md:text-6xl
          "
        >
          {service.title}
        </motion.h3>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
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
            delay: 0.25,
          }}
          className="
            mt-6
            max-w-2xl
            text-center
            text-base
            leading-7
            text-white/60
            sm:text-lg
          "
        >
          {service.description}
        </motion.p>

        {/* =================================================
    HOVER IMAGE GALLERY
================================================= */}

<div className="mt-12 w-full overflow-hidden px-2 sm:px-4">

  <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">

    {/* Image Gallery */}
    <div className="flex w-full items-center justify-center gap-3">

      {service.images.map((image, imageIndex) => (
        <motion.div
          key={`${image}-${imageIndex}`}
          initial={false}
          animate={{
            width: 300,
          }}
          whileHover={{
            width: 600,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            h-[500px]
            shrink-0
            cursor-pointer
            overflow-hidden
            rounded-lg
            border
            border-white/15
            bg-black
          "
        >
          <img
            src={image}
            alt={`${service.title} ${imageIndex + 1}`}
            className="h-full w-full object-cover"
          />

          {/* Cinematic Gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/50
              via-transparent
              to-black/10
            "
          />

          {/* Image Number */}
         
        </motion.div>
      ))}

    </div>

    {/* Know More Button */}
    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        mt-8
        rounded-full
        border
        border-white/25
        bg-white/5
        px-7
        py-3
        text-sm
        font-medium
        text-white
        backdrop-blur-sm
        transition-colors
        duration-300
        hover:bg-white
        hover:text-black
      "
    >
      Know More
    </motion.button>

  </div>

</div>

      </div>
    </motion.div>
  );
};

export default Services;
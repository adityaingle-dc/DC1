import { motion } from "framer-motion";
import { MdChevronRight } from "react-icons/md";
import { useEffect, useState } from "react";

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
      "/services/services_website_8.png",
    ],
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

      <div className="mx-auto w-full max-w-[100%] overflow-hidden rounded-[2rem] bg-[#101010] text-white">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="flex items-center justify-between gap-6">

          {/* Heading */}

          <h2 className="mt-8 ml-5 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
            Services We Offer
          </h2>

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
    mr-5
    mt-5
    flex
    h-[42px]
    w-fit
    shrink-0
    items-center
    gap-3
    rounded-full
    border
    border-orange-500
    bg-orange-500
    pl-5
    pr-2
    text-sm
    font-medium
    text-white
    transition-all
    duration-300
    hover:border-orange-600
    hover:bg-orange-600
  "
>
  <span className="whitespace-nowrap">
    Know More
  </span>

  <span
    className="
      flex
      h-8
      w-8
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-white
      text-black
    "
  >
    <MdChevronRight size={18} />
  </span>
</motion.button>
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

  /* =====================================================
     IMAGE QUEUE
     Used only for Service 01 and 02
  ===================================================== */

  const [imageQueue, setImageQueue] = useState(service.images);


  /* =====================================================
     ROTATE IMAGE QUEUE
     Disabled for Custom Company Portal
  ===================================================== */

  useEffect(() => {

    if (service.number === "03") {
      return;
    }

    const interval = setInterval(() => {

      setImageQueue((prev) => {

        if (prev.length <= 1) {
          return prev;
        }

        const firstImage = prev[0];

        return [
          ...prev.slice(1),
          firstImage,
        ];

      });

    }, 3000);

    return () => clearInterval(interval);

  }, [service.number]);


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
            IMAGE GALLERY
        ================================================= */}

        <div className="mt-12 w-full overflow-hidden px-2 sm:px-4">

          <div className="mx-auto w-full max-w-[1200px] overflow-hidden">


            {/* =================================================
                SERVICE 01 + 02
                ROTATING IMAGE QUEUE
            ================================================= */}

            {service.number !== "03" ? (

              <motion.div
                layout
                className="
                  flex
                  h-[419px]
                  items-center
                  gap-3
                "
              >

                {imageQueue.map((image, imageIndex) => (

                  <motion.div
                    layout
                    key={image}
                    animate={{
                      width: imageIndex === 0 ? 618 : 174,
                      height: 419,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group
                      relative
                      shrink-0
                      overflow-hidden
                      rounded-lg
                      border
                      border-white/15
                      bg-black
                    "
                  >

                    {/* Image */}

                    <img
                      src={image}
                      alt={`${service.title} ${imageIndex + 1}`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />


                    {/* Dark Gradient */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/90
                        via-black/20
                        to-transparent
                      "
                    />


                    {/* =================================================
                        ENLARGED IMAGE CONTENT
                    ================================================= */}

                    {imageIndex === 0 ? (

                      <>
                        {/* Heading — Top */}

                        <div className="absolute left-6 right-6 top-6">

                          <h4
                            className="
                              text-2xl
                              font-medium
                              leading-tight
                              text-white
                              sm:text-3xl
                            "
                          >
                            {service.title}
                          </h4>

                        </div>


                        {/* Paragraph — Bottom */}

                        <div className="absolute bottom-6 left-6 right-6">

                          <p
                            className="
                              max-w-lg
                              text-sm
                              leading-6
                              text-white/75
                              sm:text-base
                            "
                          >
                            {service.description}
                          </p>

                        </div>
                      </>

                    ) : (

                      /* =================================================
                          QUEUED IMAGE CONTENT
                      ================================================= */

                      <div
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          px-4
                          text-center
                        "
                      >

                        <h4
                          className="
                            text-base
                            mb-10
                            font-medium
                            leading-tight
                            text-white
                            sm:text-lg
                          "
                        >
                          {service.title}
                        </h4>

                      </div>

                    )}

                  </motion.div>

                ))}

              </motion.div>

            ) : (

              /* =================================================
                 SERVICE 03
                 STATIC IMAGE GALLERY
              ================================================= */

              <div
                className="
                  flex
                  h-[419px]
                  items-center
                  justify-center
                  gap-3
                "
              >

                {service.images.map((image, imageIndex) => (

                  <div
                    key={`${image}-${imageIndex}`}
                    className="
                      group
                      relative
                      h-[419px]
                      w-[300px]
                      shrink-0
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
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />


                    {/* Dark Gradient */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/90
                        via-black/20
                        to-transparent
                      "
                    />


                    {/* Centered Heading */}

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        px-4
                        text-center
                      "
                    >

                      <h4
                        className="
                          text-lg
                          font-medium
                          leading-tight
                          text-white
                        "
                      >
                        {service.title}
                      </h4>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>


          {/* =================================================
              KNOW MORE BUTTON
          ================================================= */}

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
              group
              mx-auto
              mt-8
              mb-3
              flex
              h-[40px]
              w-[150px]
              items-center
              justify-between
              rounded-full
              border
              border-white/25
              bg-white/5
              px-2
              pl-5
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

            <span>
              Know More
            </span>

            <span
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                transition-colors
                duration-300
                group-hover:bg-black
                group-hover:text-white
              "
            >
              <MdChevronRight size={18} />
            </span>

          </motion.button>

        </div>

      </div>

    </motion.div>
  );
};

export default Services;
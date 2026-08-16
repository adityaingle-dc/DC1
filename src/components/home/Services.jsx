import { motion, useInView } from "framer-motion";
import { MdChevronRight } from "react-icons/md";
import { useRef, useState } from "react";

const services = [
  {
    number: "01",
    numberSvg: "public/services/01.svg",
    title: "Brand Identity",
    description:
      "Develop a strategic brand identity with custom logo design, visual systems, typography, and brand guidelines that create a lasting impression across every touchpoint.",
    images: [
      {
        src: "/services/services_branding_5.png",
        collapsedText: "Brand Identity",
        expandedHeading: "Brand Identity & Strategy",
        expandedDescription:
          "Logo design, brand strategy, visual identity, and brand guidelines that help your business stand out and build lasting recognition.",
      },
      {
        src: "/services/services_branding_6.png",
        collapsedText: "Business Assets",
        expandedHeading: "Corporate Branding & Assets",
        expandedDescription:
          "Business cards, stationery, presentations, and branded assets that create a professional and consistent brand experience.",
      },
      {
        src: "/services/services_branding_7.png",
        collapsedText: "Marketing Collateral",
        expandedHeading: "Marketing Collateral & Social Media Design",
        expandedDescription:
          "Brochures, flyers, social media creatives, and marketing materials designed to increase visibility and strengthen your brand.",
      },
      {
        src: "/services/services_branding_8.png",
        collapsedText: "Packaging Design",
        expandedHeading:
          "Packaging, Environmental & Merchandise Design",
        expandedDescription:
          "Packaging, signage, retail graphics, and merchandise designed to create memorable customer experiences at every touchpoint.",
      },
    ],
  },

  {
    number: "02",
    numberSvg: "public/services/02.svg",
    title: "Web Design & Development",
    description:
      "Design and develop fast, responsive, SEO-optimized websites that combine beautiful UI/UX with seamless functionality to help your business grow online.",
    images: [
      {
        src: "/services/services_website_5.png",
        collapsedText: "Website",
        expandedHeading: "Custom Website Design",
        expandedDescription:
          "Custom, responsive websites designed to reflect your brand and deliver a seamless user experience.",
      },
      {
        src: "/services/services_website_6.png",
        collapsedText: "E-Commerce",
        expandedHeading: "E-Commerce Stores",
        expandedDescription:
          "Online stores built to showcase products, simplify shopping, and increase sales.",
      },
      {
        src: "/services/services_website_7.png",
        collapsedText: "Landing Page",
        expandedHeading: "Campaign Landing Page",
        expandedDescription:
          "Conversion focused landing pages designed to capture leads and drive customer action.",
      },
      {
        src: "/services/services_website_8.png",
        collapsedText: "CMS",
        expandedHeading: (
          <>
            Content Management Systems
            <br />
            (CMS)
          </>
        ),
        expandedDescription:
          "Easy-to-manage CMS websites that let you update content without technical expertise.",
      },
    ],
  },

  {
    number: "03",
    numberSvg: "public/services/03.svg",
    title: "Custom Company Portal",
    description:
      "Build secure custom business portals tailored to your workflow, making it easier to manage clients, teams, projects, approvals, files, and everyday operations.",
    images: [
      {
        src: "/services/po1.svg",
        expandedHeading: "Custom Portals",
        expandedDescription:
          "Secure client portals that simplify communication, file sharing, approvals, and project tracking.",
      },
      {
        src: "/services/po5.svg",
        expandedHeading: "Billing & Invoicing",
        expandedDescription:
          "Custom invoicing systems that automate billing, payments, and financial workflows.",
      },
      {
        src: "/services/po3.svg",
        expandedHeading: "Custom CRM",
        expandedDescription:
          "Tailored CRM solutions that centralize customer data, sales, and relationship management.",
      },
    ],
  },
];

const Services = () => {
  const servicesRef = useRef(null);

  const isServicesInView = useInView(servicesRef, {
    once: false,
    amount: 0.2,
  });

  return (
    <section
      ref={servicesRef}
      className="bg-white px-3 py-16 sm:px-4 sm:py-20 md:px-6 md:py-24"
    >
      {/* =================================================
          MAIN SERVICES CONTAINER
      ================================================= */}

      <motion.div
        className={`
          mx-auto
          w-full
          max-w-[100%]
          overflow-hidden
          rounded-[1.5rem]
          text-white
          transition-colors
          duration-700
          sm:rounded-[2rem]
          ${isServicesInView ? "bg-[#101010]" : "bg-white"}
        `}
      >
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            px-4
            pt-7
            sm:gap-6
            sm:px-0
            sm:pt-0
          "
        >
          <h2
            className={`
              ml-0
              mt-0
              text-3xl
              font-medium
              tracking-tight
              ${isServicesInView ? "text-white" : "text-black"}
              sm:ml-5
              sm:mt-8
              sm:text-5xl
              md:text-6xl
              font-['DM_Sans']
            `}
          >
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
              mr-0
              mt-0
              flex
              h-[40px]
              w-fit
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-orange-500
              bg-orange-500
              pl-4
              pr-1.5
              text-xs
              font-medium
              text-white
              transition-all
              duration-300
              hover:border-orange-600
              hover:bg-orange-600
              sm:mr-5
              sm:mt-5
              sm:h-[42px]
              sm:gap-3
              sm:pl-5
              sm:pr-2
              sm:text-sm
              font-['DM_Sans']
            "
          >
            <span className="whitespace-nowrap">
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
                sm:h-8
                sm:w-8
              "
            >
              <MdChevronRight size={18} />
            </span>
          </motion.button>
        </div>

        {/* =================================================
            SERVICES
        ================================================= */}

        <div className="mt-8 sm:mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              isServicesInView={isServicesInView}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};


/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({
  service,
  index,
  isServicesInView,
}) => {
  const [hoveredImage, setHoveredImage] = useState(0);

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
      className="w-full"
    >
      {/* =================================================
          SERVICE CONTENT
      ================================================= */}

      <motion.div
        className={`
          flex
          min-h-[720px]
          w-full
          flex-col
          items-center
          px-4
          pb-12
          pt-8
          transition-colors
          duration-700
          sm:min-h-[780px]
          sm:px-6
          sm:pb-16
          sm:pt-10
          md:min-h-[850px]
          ${isServicesInView ? "bg-[#101010]" : "bg-white"}
        `}
      >
        {/* =================================================
            NUMBER SVG
        ================================================= */}

        <motion.div
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
            flex
            items-center
            justify-center
          "
        >
          <img
  src={service.numberSvg}
  alt={service.number}
  className="
    h-auto
    h-[225px]
    w-[283pxpx]
    object-contain
    opacity-50
    
  "
/>
        </motion.div>


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
          className={`
            relative
            z-10
            -mt-6
            max-w-5xl
            px-2
            text-center
            text-3xl
            font-medium
            leading-tight
            tracking-tight
            ${isServicesInView ? "text-white" : "text-black"}
            sm:-mt-10
            sm:px-0
            sm:text-4xl
            md:-mt-12
            md:text-5xl
            lg:-mt-16
            lg:text-6xl
            font-['DM_Sans']
          `}
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
          className={`
            mt-5
            max-w-2xl
            px-2
            text-center
            text-sm
            leading-6
            ${isServicesInView ? "text-white/60" : "text-black/60"}
            sm:mt-6
            sm:px-0
            sm:text-base
            sm:leading-7
            md:text-lg
          `}
        >
          {service.description}
        </motion.p>


        {/* =================================================
            IMAGE GALLERY
        ================================================= */}

        <div
          className="
            mt-8
            w-full
            overflow-hidden
            px-0
            sm:mt-12
            sm:px-4
          "
        >
          <div
            className="
              mx-auto
              w-full
              max-w-[1200px]
              overflow-hidden
            "
          >

            {/* =================================================
                SERVICE 01 + 02 — 4 IMAGE ROW
            ================================================= */}

            {service.number !== "03" ? (
              <div
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  sm:gap-3
                "
              >
                {service.images.map((image, imageIndex) => {
                  const isExpanded =
                    hoveredImage === imageIndex;

                  return (
                    <motion.div
                      key={`${service.number}-${image.src}`}
                      onMouseEnter={() =>
                        setHoveredImage(imageIndex)
                      }
                      onMouseLeave={() =>
                        setHoveredImage(0)
                      }
                      animate={{
                        width: isExpanded
                          ? "min(618px, 70vw)"
                          : "min(174px, 20vw)",
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        group
                        relative
                        h-[280px]
                        shrink-0
                        overflow-hidden
                        rounded-lg
                        bg-black
                        sm:h-[340px]
                        md:h-[419px]
                      "
                    >
                      <img
                        src={image.src}
                        alt={`${service.title} ${imageIndex + 1}`}
                        className="
                          absolute
                          -inset-[2px]
                          h-[calc(100%+4px)]
                          w-[calc(100%+4px)]
                          object-cover
                          rounded-lg
                          transition-transform
                          duration-700
                          scale-105
                        "
                      />

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

                      {isExpanded ? (
                        <>
                          {/* Expanded heading — upper left */}

                          <div
                            className="
                              absolute
                              left-4
                              right-4
                              top-4
                              max-w-[75%]
                              text-left
                              sm:left-6
                              sm:right-6
                              sm:top-6
                            "
                          >
                            <h4
                              className="
                                text-lg
                                font-['DM_Sans']
                                font-medium
                                leading-tight
                                text-white
                                sm:text-2xl
                                md:text-3xl
                              "
                            >
                              {image.expandedHeading ||
                                service.title}
                            </h4>
                          </div>

                          {/* Expanded paragraph */}

                          <div
                            className="
                              absolute
                              bottom-4
                              left-4
                              right-4
                              sm:bottom-6
                              sm:left-6
                              sm:right-6
                            "
                          >
                            <p
                              className="
                                max-w-lg
                                text-xs
                                leading-5
                                text-white/75
                                sm:text-sm
                                sm:leading-6
                                font-['DM_Sans']
                                md:text-base
                              "
                            >
                              {image.expandedDescription ||
                                service.description}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div
                          className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            px-3
                            text-center
                            sm:px-4
                          "
                        >
                          <h4
                            className="
                              text-xs
                              font-medium
                              font-['DM_Sans']
                              leading-tight
                              text-white
                              sm:text-base
                              md:text-lg
                            "
                          >
                            {image.collapsedText ||
                              service.title}
                          </h4>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              /* =================================================
                 SERVICE 03 — 3 SVG IMAGE BOXES
              ================================================= */

              <div
                className="
                  flex
                  h-[280px]
                  items-center
                  justify-start
                  gap-2
                  overflow-x-auto
                  overflow-y-hidden
                  px-1
                  scrollbar-hide
                  sm:h-[340px]
                  sm:justify-center
                  sm:gap-3
                  md:h-[419px]
                  md:overflow-visible
                "
              >
                {service.images.map((image, imageIndex) => (
                  <div
                    key={`${image.src}-${imageIndex}`}
                    className="
                      group
                      relative
                      h-[280px]
                      w-[calc(100vw-32px)]
                      max-w-[386px]
                      shrink-0
                      overflow-hidden
                      rounded-lg
                      sm:h-[340px]
                      sm:w-[320px]
                      md:h-[419px]
                      md:w-[386px]
                    "
                  >
                    <img
                      src={image.src}
                      alt={`${service.title} ${imageIndex + 1}`}
                      className="
                        h-full
                        w-full
                        object-contain
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />
                  </div>
                ))}
              </div>
            )}

          </div>
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
          className={`
            group
            mx-auto
            mt-7
            mb-2
            flex
            h-[40px]
            w-[145px]
            items-center
            justify-between
            rounded-full
            border
            border-white/25
            bg-white/5
            px-2
            pl-4
            text-sm
            font-medium
            ${isServicesInView ? "text-white" : "text-black"}
            backdrop-blur-sm
            transition-colors
            duration-300
            hover:bg-white
            hover:text-black
            sm:mt-8
            sm:w-[150px]
            sm:pl-5
            font-['DM_Sans']
          `}
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

      </motion.div>
    </motion.div>
  );
};

export default Services;
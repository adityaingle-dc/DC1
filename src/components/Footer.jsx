import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] px-6 pb-8 pt-20 text-white md:px-10 lg:px-16">

      <div className="mx-auto max-w-[95%]">

        {/* =========================================
            BRAND
        ========================================== */}

        <div className="flex flex-col items-center text-center">

          <motion.h2
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
            }}
            className="
              text-5xl
              font-semibold
              tracking-[-0.04em]
              text-orange-500
              drop-shadow-[0_0_18px_rgba(249,115,22,0.25)]
              sm:text-6xl
              md:text-7xl
            "
          >
            Copper Studio
          </motion.h2>

          <p className="
            mt-5
            max-w-md
            text-sm
            leading-6
            text-white/40
          ">
            Building memorable brands, digital experiences
            and products that move businesses forward.
          </p>

        </div>


        {/* =========================================
            NAVIGATION
        ========================================== */}

        <div className="
          mt-20
          grid
          grid-cols-2
          gap-10
          border-t
          border-white/10
          pt-10
          sm:grid-cols-4
        ">

          {/* Explore */}

          <div>
            <p className="
              mb-5
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/30
            ">
              Explore
            </p>

            <div className="flex flex-col gap-3">

              {[
                "Home",
                "Studio",
                "Services",
                "Projects",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    w-fit
                    text-sm
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-orange-500
                  "
                >
                  {item}
                </a>
              ))}

            </div>
          </div>


          {/* Services */}

          <div>
            <p className="
              mb-5
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/30
            ">
              Services
            </p>

            <div className="flex flex-col gap-3">

              {[
                "Brand Identity",
                "Web Design",
                "Development",
                "Client Portals",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    w-fit
                    text-sm
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-orange-500
                  "
                >
                  {item}
                </a>
              ))}

            </div>
          </div>


          {/* Connect */}

          <div>
            <p className="
              mb-5
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/30
            ">
              Connect
            </p>

            <div className="flex flex-col gap-3">

              <a
                href="#"
                className="
                  w-fit
                  text-sm
                  text-white/60
                  transition-colors
                  duration-300
                  hover:text-orange-500
                "
              >
                Instagram
              </a>

              <a
                href="#"
                className="
                  w-fit
                  text-sm
                  text-white/60
                  transition-colors
                  duration-300
                  hover:text-orange-500
                "
              >
                LinkedIn
              </a>

              <a
                href="mailto:hello@copperstudio.com"
                className="
                  w-fit
                  text-sm
                  text-white/60
                  transition-colors
                  duration-300
                  hover:text-orange-500
                "
              >
                Email
              </a>

            </div>
          </div>


          {/* Contact */}

          <div>
            <p className="
              mb-5
              text-xs
              uppercase
              tracking-[0.2em]
              text-white/30
            ">
              Contact
            </p>

            <a
              href="mailto:hello@copperstudio.com"
              className="
                text-sm
                leading-6
                text-white/60
                transition-colors
                duration-300
                hover:text-orange-500
              "
            >
              hello@copperstudio.com
            </a>

          </div>

        </div>


        {/* =========================================
            BOTTOM
        ========================================== */}

        <div className="
          mt-14
          flex
          flex-col
          gap-4
          border-t
          border-white/10
          pt-6
          text-xs
          text-white/30
          sm:flex-row
          sm:items-center
          sm:justify-between
        ">

          <p>
            © {new Date().getFullYear()} Copper Studio
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
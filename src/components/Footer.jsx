import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="w-full bg-white">
      <footer
        className="
          overflow-hidden
          rounded-t-[3rem]
          bg-[#0d0d0d]
          px-6
          pb-8
          pt-20
          text-white
          md:rounded-t-[4rem]
          lg:px-16
        "
      >
        <div className="mx-auto max-w-[1200px]">

          {/* =================================================
              MAIN FOOTER
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-14
              md:grid-cols-2
              lg:grid-cols-[1.5fr_1fr_1fr_1fr]
              lg:gap-12
            "
          >


          {/* =================================================
              01 — THE COPPER STUDIO
          ================================================= */}

          <motion.div
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
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-sm"
          >

            {/* Heading */}

            <h2
              className="
                text-4xl
                font-semibold
                tracking-[-0.04em]
                
                drop-shadow-[0_0_18px_rgba(249,115,22,0.2)]
                sm:text-5xl
              "
            >
              The Copper Studio
            </h2>


            {/* Description */}

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-white/40
              "
            >
              Building memorable brands, digital experiences
              and products that move businesses forward.
            </p>


            {/* =================================================
                SOCIAL / CONTACT ICONS
            ================================================= */}

            <div className="mt-7 flex items-center gap-3">

              {/* WhatsApp */}

              <a
                href="#"
                aria-label="WhatsApp"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/100
                  transition-all
                  duration-300
                  hover:border-orange-500
                  hover:bg-orange-500
                "
              >
                <img
                  src="public/icons/whatsapp.svg"
                  alt="WhatsApp"
                  className="h-5 w-5 object-contain"
                />
              </a>


              {/* Mail */}

             

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/100
                  transition-all
                  duration-300
                  hover:border-orange-500
                  hover:bg-orange-500
                "
              >
                <img
                  src="public/icons/instagram.svg"
                  alt="Instagram"
                  className="h-5 w-5 object-contain"
                />
              </a>


              {/* Calendar */}

              <a
                href="#"
                aria-label="Calendar"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/100
                  transition-all
                  duration-300
                  hover:border-orange-500
                  hover:bg-orange-500
                "
              >
                <img
                  src="public/icons/calender.svg"
                  alt="Calendar"
                  className="h-5 w-5 object-contain"
                />
              </a>

            </div>

          </motion.div>


          {/* =================================================
              02 — CONNECT
          ================================================= */}

          <div>

            <p
              className="
                mb-6
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/30
              "
            >
              Connect
            </p>

            <div className="flex flex-col gap-4">

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
                E: contact@thecopperstudio.com
              </a>

              <a
                
                className="
                  w-fit
                  text-sm
                  text-white/60
                  transition-colors
                  duration-300
                  hover:text-orange-500
                "
              >
                P: +91 9820933877
              </a>

              <a
               
                className="
                  w-fit
                  text-sm
                  text-white/60
                  transition-colors
                  duration-300
                  hover:text-orange-500
                "
              >
                Office 721, Centura Square IT Park, 
                <br/>
                Waghle Estate , Thane(W)-400604,
                <br/>
                Maharashtra, India
              </a>

            </div>

          </div>


          {/* =================================================
              03 — PAGES
          ================================================= */}

          <div>

            <p
              className="
                mb-6
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/30
              "
            >
              Pages
            </p>

            <div className="flex flex-col gap-4">

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


          {/* =================================================
              04 — RESOURCES
          ================================================= */}

          <div>

            <p
              className="
                mb-6
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/30
              "
            >
              Resources
            </p>

            <div className="flex flex-col gap-4">

              {[
                "Client Login",
                "Careers",
                "Terms and Conditions",
                "Privacy Policy",
                "Disclosures",
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

        </div>


        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div
          className="
            mt-12
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
          "
        >

          <p>
            © {new Date().getFullYear()} Copper Studio
          </p>


          <div className="flex gap-6">

            <a
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Privacy
            </a>

            <a
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Terms
            </a>

          </div>

        </div>

      </div>
    </footer>

    </div>
  );
};

export default Footer;
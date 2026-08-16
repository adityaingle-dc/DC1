import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <footer
        className="
          overflow-hidden
          rounded-t-[1.5rem]
          bg-[#0d0d0d]
          px-5
          pb-6
          pt-14
          text-white
          sm:px-6
          sm:pt-16
         
         h-[500px]
          md:px-10
          md:pb-8
          md:pt-20
         
          lg:px-16
        "
      >
        <div className="mx-auto w-full max-w-[1200px]">

          {/* =================================================
              MAIN FOOTER
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-12
              sm:gap-14
              md:grid-cols-2
              md:gap-x-10
              md:gap-y-14
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
              className="
                w-full
                max-w-sm
                md:col-span-2
                lg:col-span-1
              "
            >

              {/* Heading */}

             <h2
  className="
    whitespace-nowrap
    font-dm-sans
    text-[24px]
    font-bold
    leading-[32px]
    tracking-[-0.04em]
    drop-shadow-[0_0_18px_rgba(249,115,22,0.2)]
  "
>
  THE COPPER STUDIO
</h2>


              {/* Description */}

              <p
  className="
    mt-5
    max-w-sm
    font-dm-sans
    text-[14px]
    font-normal
    leading-[18px]
    text-white/40
    sm:mt-6
  "
>
  Copper Studio is a design and development studio creating distinctive
  brands, digital experiences, and custom business solutions.
</p>


              {/* =================================================
                  SOCIAL / CONTACT ICONS
              ================================================= */}

              <div className="mt-6 flex items-center gap-3 sm:mt-7">

                {/* WhatsApp */}

                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="
                    flex
                    h-10
                    w-10
                    mb-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white
                    transition-all
                    duration-300
                    hover:border-orange-500
                    hover:bg-orange-500
                  "
                >
                  <img
                    src="/icons/whatsapp.svg"
                    alt="WhatsApp"
                    className="h-5 w-5 object-contain"
                  />
                </a>


                {/* Instagram */}

                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex
                    h-10
                    w-10
                    mb-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white
                    transition-all
                    duration-300
                    hover:border-orange-500
                    hover:bg-orange-500
                  "
                >
                  <img
                    src="/icons/instagram.svg"
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
                    mb-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white
                    transition-all
                    duration-300
                    hover:border-orange-500
                    hover:bg-orange-500
                  "
                >
                  <img
                    src="/icons/calender.svg"
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
                  mb-5
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white
                  sm:mb-6
                   font-dm-sans
                "
              >
                CONNECT
              </p>

              <div className="flex flex-col gap-3.5 sm:gap-4">

                <a
                  href="mailto:contact@thecopperstudio.com"
                  className="
                    w-fit
                    max-w-full
                    break-words
                    text-sm
                    leading-6
                    text-white/60
                    transition-colors
                    duration-300
                     font-dm-sans
                    hover:text-orange-500
                  "
                >
                  E: contact@thecopperstudio.com
                </a>

                <a
                  href="tel:+919820933877"
                  className="
                    w-fit
                    text-sm
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-orange-500
                     font-dm-sans
                  "
                >
                  P: +91 9820933877
                </a>

                <p
                  className="
                    max-w-xs
                    text-sm
                    leading-6
                    text-white/60
                     font-dm-sans
                  "
                >
                  Office 721, Centura Square IT Park,
                  <br />
                  Waghle Estate, Thane(W)-400604,
                  <br />
                  Maharashtra, India
                </p>

              </div>

            </div>


            {/* =================================================
                03 — PAGES
            ================================================= */}

            <div>

              <p
                className="
                  mb-5
                  ml-15
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white
                  sm:mb-6
                   font-dm-sans
                "
              >
                PAGES
              </p>

              <div className="flex flex-col gap-3.5 sm:gap-4">

                {[
                  "Home",
                  "Studio",
                  "Services",
                  "Projects",
                  "Blogs",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="
                      w-fit
                      text-sm
                      ml-15
                       font-dm-sans
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
                  mb-5
                  ml-20
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white
                   font-dm-sans
                  sm:mb-6
                "
              >
                RESOURCES
              </p>

              <div className="flex flex-col gap-3.5 sm:gap-4">

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
                      ml-20
                      max-w-full
                      text-sm
                       font-dm-sans
                      leading-6
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
    BOTTOM SVG
================================================= */}

<div className="mt-30 flex w-full justify-center">
  <img
  src="public/footer_copper studio.svg"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    absolute
    bottom-0
    
    mt-10
    z-0
    w-[95vw]
    h-[396px]
    max-w-none
    translate-x-8
    translate-y-15
    object-contain
    opacity-100
  "
/>
</div>


          {/* =================================================
              BOTTOM BAR
          ================================================= */}

          <div
  className="
    
    ml-auto
    flex
    w-fit
    flex-col
    items-end
    gap-4
    pt-5
    text-xs
    text-white/30
    font-dm-sans
   translate-x-25
   translate-y-5
    sm:flex-row
    sm:items-center
    sm:justify-end
    sm:pt-6
  "
>

            <p>
              © {new Date().getFullYear()} Copper Studio.All Rights reserved
            </p>


            
          </div>


          <div
 className="
  flex
  w-fit
  flex-col
  items-start
  gap-4
  pt-5
  font-dm-sans
  text-[12px]
  font-normal
  leading-[16px]
  text-white/30
  sm:flex-row
  sm:items-center
  sm:justify-start
  -translate-y-5
  -translate-x-4
  sm:pt-6
"
>         <p>
              Design by Copper Studio
            </p>


            
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
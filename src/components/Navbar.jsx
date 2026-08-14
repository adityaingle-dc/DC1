import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";

const navItems = ["Home", "Studio", "Services", "Projects", "Client Login"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] -translate-x-1/2 sm:top-5 sm:w-[90%] sm:max-w-6xl">
      
      {/* =================================================
          NAVBAR
      ================================================= */}

      <div
        className="
          relative
          flex
          min-h-[50px]
          items-center
          rounded-full
          border
          border-gray-200
          bg-white
          px-1
          shadow-sm
        "
      >

        {/* =================================================
            LOGO
        ================================================= */}

        <div
          className="
            flex
            h-[40px]
            shrink-0
            items-center
            px-4
            text-lg
            font-bold
            tracking-tight
            text-gray-900
            sm:h-[45px]
            sm:px-5
             font-['DM_Sans']
            sm:text-xl
          "
        >
          Copper Studio
        </div>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div
          className="
            hidden
            flex-1
            items-center
            justify-end
            gap-1
            lg:flex
          "
        >

          {/* Home */}

          <button
            className="
              rounded-full
              bg-gray-100
              px-4
              py-1.5
              text-sm
              font-medium
               font-['DM_Sans']
              text-gray-900
            "
          >
            Home
          </button>


          {/* Studio */}

          <button
            className="
              rounded-full
              px-4
              py-1.5
              text-sm
              font-medium
              text-gray-600
               font-['DM_Sans']
              transition
              hover:bg-gray-100
              hover:text-gray-900
            "
          >
            Studio
          </button>


          {/* Services */}

          <button
            className="
              rounded-full
              px-4
              py-1.5
              text-sm
              font-medium
              text-gray-600
              transition
              hover:bg-gray-100
              hover:text-gray-900
               font-['DM_Sans']
            "
          >
            Services
          </button>


          {/* Projects */}

          <button
            className="
              rounded-full
              px-4
              py-1.5
              text-sm
              font-medium
              text-gray-600
              transition
              hover:bg-gray-100
              hover:text-gray-900
               font-['DM_Sans']
            "
          >
            Projects
          </button>


          {/* Client Login */}

          <button
            className="
              rounded-full
              px-4
              py-1.5
              text-sm
              font-medium
              text-gray-600
              transition
              hover:bg-gray-100
              hover:text-gray-900
               font-['DM_Sans']
            "
          >
            Client Login
          </button>


          {/* =================================================
              GET IN TOUCH
          ================================================= */}

          <button
            className="
              group
              ml-3
              flex
              h-[40px]
              w-[148px]
              shrink-0
              items-center
              justify-between
              rounded-full
              bg-black
              pl-5
              pr-1
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-gray-900
               font-['DM_Sans']
            "
          >
            <span>
              Get in Touch
            </span>

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                bg-orange-500
                text-black
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            >
              <FiArrowRight size={18} />
            </span>
          </button>

        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <div className="ml-auto flex items-center pr-1 lg:hidden">

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-black
              text-white
            "
          >
            {menuOpen ? (
              <FiX size={20} />
            ) : (
              <FiMenu size={20} />
            )}
          </motion.button>

        </div>


        {/* =================================================
            MOBILE DROPDOWN
        ================================================= */}

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                absolute
                left-0
                right-0
                top-[58px]
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-3
                shadow-lg
                lg:hidden
              "
            >

              {/* Mobile Navigation */}

              <div className="flex flex-col gap-1">

                {navItems.map((item, index) => (

                  <motion.button
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      w-full
                      rounded-2xl
                      px-4
                      py-3
                      text-left
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        index === 0
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }
                    `}
                  >
                    {item}
                  </motion.button>

                ))}


                {/* Mobile CTA */}

                <motion.button
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                  onClick={() => setMenuOpen(false)}
                  className="
                    group
                    mt-2
                    flex
                    h-[46px]
                    w-full
                    items-center
                    justify-between
                    rounded-full
                    bg-black
                    pl-5
                    pr-1
                    text-sm
                    font-semibold
                    text-white
                     font-['DM_Sans']
                  "
                >

                  <span>
                    Get in Touch
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-orange-500
                      text-black
                    "
                  >
                    <FiArrowRight size={18} />
                  </span>

                </motion.button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </nav>
  );
};

export default Navbar;
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Enquiry = () => {
  return (
    <div
  className="
    w-full
    max-w-[630px]
    translate-x-15
    -translate-y-15

    rounded-[2rem]
    bg-black/5
    p-8
    
    sm:p-10
  "
>
      {/* =====================================
          MAIN ENQUIRY CONTENT
          566 × 683 approximately
      ====================================== */}

      <div className="mx-auto w-full max-w-[566px]">

        {/* =====================================
            HEADER — 566 × 144
        ====================================== */}

        <div className="h-[144px] w-full">

          <h2
            className="
              font-['DM_Sans']
              text-3xl
              font-semibold
              leading-[1]
              tracking-tight
              text-black
              sm:text-4xl
              md:text-5xl
            "
          >
            Send an Enquiry
          </h2>

          <p
            className="
              mt-5
              max-w-[566px]
              text-sm
              leading-6
              text-black/50
              sm:text-base
              font-['DM_Sans']
            "
          >
            Tell us a little about your business and what you’re looking to build. We’ll get back to you to discuss the next steps.
          </p>

        </div>


        {/* =====================================
            FORM
        ====================================== */}

        <form className="mt-8 w-full">

          {/* =====================================
              FIRST + LAST NAME — 566 × 97
          ====================================== */}

          <div
            className="
              flex
              h-[97px]
              w-full
              gap-4
            "
          >

            {/* First Name */}

            <div className="flex h-full flex-1 flex-col">

              <label
                className="
                  mb-3
                  text-sm
                  font-medium
                  text-black
                  font-['DM_Sans']
                "
              >
                First Name
              </label>

              <input
                type="text"
                placeholder="First name"
                className="
                  h-[48px]
                  w-full
                  rounded-xl
                  border
                  border-black/10
                  bg-white
                  px-4
                  text-sm
                  text-black
                  outline-none
                  placeholder:text-black/30
                  focus:border-black/30
                "
              />

            </div>


            {/* Last Name */}

            <div className="flex h-full flex-1 flex-col">

              <label
                className="
                  mb-3
                  text-sm
                  font-medium
                  font-['DM_Sans']
                  text-black
                "
              >
                Last Name
              </label>

              <input
                type="text"
                placeholder="Last name"
                className="
                  h-[48px]
                  w-full
                  rounded-xl
                  border
                  border-black/10
                  bg-white
                  px-4
                  text-sm
                  text-black
                  outline-none
                  placeholder:text-black/30
                  focus:border-black/30
                "
              />

            </div>

          </div>


          {/* =====================================
              EMAIL — 566 × 121
          ====================================== */}

          <div className="mt-5 h-[121px] w-full">

            <label
              className="
                mb-3
                block
                text-sm
                font-medium
                font-['DM_Sans']
                text-black
              "
            >
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="
                h-[48px]
                w-full
                rounded-xl
                border
                border-black/10
                bg-white
                px-4
                text-sm
                text-black
                outline-none
                placeholder:text-black/30
                focus:border-black/30
              "
            />

          </div>


          {/* =====================================
              MESSAGE — 566 × 205
          ====================================== */}

          <div className="mt-2 h-[205px] w-full">

            <label
              className="
                mb-3
                block
                text-sm
                font-medium
                text-black
                font-['DM_Sans']
              "
            >
              Write a Message
            </label>

            <textarea
              placeholder="Tell us about your project..."
              className="
                h-[165px]
                w-full
                resize-none
                rounded-xl
                border
                border-black/10
                bg-white
                px-4
                py-4
                text-sm
                leading-6
                text-black
                outline-none
                placeholder:text-black/30
                focus:border-black/30
              "
            />

          </div>


          {/* =====================================
              SUBMIT — 566 × 64
          ====================================== */}

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-5
              flex
              h-[64px]
              w-full
              items-center
              justify-between
              rounded-full
              bg-black
              px-6
              text-sm
              font-medium
              text-white
              transition-colors
              duration-300
              hover:bg-orange-500
              font-['DM_Sans']
            "
          >

            <span>
              Submit Message
            </span>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
              "
            >
              <FiArrowUpRight
                size={19}
                strokeWidth={2}
              />
            </span>

          </motion.button>

        </form>

      </div>
    </div>
  );
};

export default Enquiry;
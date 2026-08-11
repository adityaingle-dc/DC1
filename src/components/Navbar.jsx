import { FiArrowRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[90%] max-w-6xl -translate-x-1/2">
      <div
        className="
          flex
          h-[50px]
          items-center
          rounded-full
          border
          border-gray-200
          bg-white
          px-1
          shadow-sm
        "
      >

        <div
  className="
    flex
    h-[25px]
    w-[181.43px]
    shrink-0
    items-center
    text-xl
    px-5
    font-bold
    tracking-tight
    text-gray-900
  "
>
  Copper Studio
</div>

        {/* Navigation */}
        <div className="
          flex
          flex-1
          items-center
          justify-end
          gap-1
        ">

          {/* Home */}
          <button
            className="
              rounded-full
              bg-gray-100
              px-4
              py-1.5
              text-sm
              font-medium
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
            "
          >
            Client Login
          </button>


          {/* =====================================
              GET IN TOUCH
          ====================================== */}

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

      </div>
    </nav>
  );
};

export default Navbar;
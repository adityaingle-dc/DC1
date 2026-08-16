import {
  FiPhone,
  FiCalendar,
  FiInstagram,
} from "react-icons/fi";

const FloatingActions = () => {
  return (
    <div
      className="
        fixed
        bottom-4
        right-4
        z-50
        flex
        items-center
        gap-2
        sm:bottom-6
        sm:right-6
        sm:gap-3
      "
    >

      {/* Call */}
      <button
        type="button"
        aria-label="Call us"
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
        
          bg-white
          text-black
          shadow-md
          backdrop-blur-md
         
          sm:h-10
          sm:w-10
        "
      >
        <FiPhone
          size={16}
          strokeWidth={1.8}
          className="sm:h-[17px] sm:w-[17px]"
        />
      </button>

      {/* Calendar */}
      <button
        type="button"
        aria-label="Book a meeting"
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
         
          bg-white
          text-black
          shadow-md
          backdrop-blur-md
         
          sm:h-10
          sm:w-10
        "
      >
        <FiCalendar
          size={16}
          strokeWidth={1.8}
          className="sm:h-[17px] sm:w-[17px]"
        />
      </button>

      {/* Instagram */}
      <button
        type="button"
        aria-label="Instagram"
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
         
          bg-white
          text-black
          shadow-md
          
          sm:h-10
          sm:w-10
        "
      >
        <FiInstagram
          size={17}
          strokeWidth={1.8}
          className="sm:h-[18px] sm:w-[18px]"
        />
      </button>

    </div>
  );
};

export default FloatingActions;
import {
  FiPhone,
  FiCalendar,
  FiInstagram,
} from "react-icons/fi";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">

      {/* Call */}
      <button
        type="button"
        aria-label="Call us"
        className="
          flex
          h-[40px]
          w-[40px]
          items-center
          justify-center
          rounded-full
          border
          border-black/30
          bg-white/80
          text-black
          shadow-md
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-orange-500
          hover:text-orange-500
          hover:bg-white
        "
      >
        <FiPhone size={17} strokeWidth={1.8} />
      </button>


      {/* Calendar */}
      <button
        type="button"
        aria-label="Book a meeting"
        className="
          flex
          h-[40px]
          w-[40px]
          items-center
          justify-center
          rounded-full
          border
          border-black/30
          bg-white/80
          text-black
          shadow-md
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-orange-500
          hover:text-orange-500
          hover:bg-white
        "
      >
        <FiCalendar size={17} strokeWidth={1.8} />
      </button>


      {/* Instagram */}
      <button
        type="button"
        aria-label="Instagram"
        className="
          flex
          h-[40px]
          w-[40px]
          items-center
          justify-center
          rounded-full
          border
          border-black/30
          bg-white/80
          text-black
          shadow-md
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-orange-500
          hover:text-orange-500
          hover:bg-white
        "
      >
        <FiInstagram size={18} strokeWidth={1.8} />
      </button>

    </div>
  );
};

export default FloatingActions;
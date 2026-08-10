import {
  FaPhone,
  FaCalendarAlt,
  FaInstagram,
} from "react-icons/fa";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">

      {/* Call */}
      <button
        type="button"
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/90 text-gray-900 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white"
      >
        <FaPhone size={17} />
      </button>

      {/* Calendar */}
      <button
        type="button"
        aria-label="Book a meeting"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/90 text-gray-900 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white"
      >
        <FaCalendarAlt size={17} />
      </button>

      {/* Instagram */}
      <button
        type="button"
        aria-label="Instagram"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/90 text-gray-900 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white"
      >
        <FaInstagram size={18} />
      </button>

    </div>
  );
};

export default FloatingActions;
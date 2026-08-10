const Navbar = () => {
  return (
    <nav className="fixed top-5 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-full border border-gray-200 bg-white px-6 py-3 shadow-sm">

        {/* Brand */}
        <div className="text-xl font-bold tracking-tight text-gray-900">
          Copper Studio
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-1">
          <button className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900">
            Home
          </button>

          <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900">
            Studio
          </button>

          <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900">
            Services
          </button>

          <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900">
            Projects
          </button>

          <button className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900">
            Client Login
          </button>

          <button className="ml-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800">
            Get in Touch
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
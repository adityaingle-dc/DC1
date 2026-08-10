const Hero = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

        {/* Glassmorphism Pill */}
        <div className="mb-6 rounded-full border border-gray-200 bg-white/60 px-5 py-2 shadow-sm backdrop-blur-md">
          <span className="text-sm font-medium text-gray-600">
            Brand Identity • Website Design • Custom Portals
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
         We help you to build,launch and
         
          grow with confidence
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl font-medium text-base leading-7 text-gray-100 sm:text-lg">
          We design every piece of your business to work together
          so growth feels simple , not scattered.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <button className="rounded-full border border-gray-300 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-50">
            Explore Projects
          </button>

          <button className="rounded-full border border-gray-300 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-50">
            Let's Talk →
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;
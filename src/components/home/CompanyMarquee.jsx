import { motion } from "framer-motion";

const companies = [
  "/companies/logo_bacoola.png",
  "/companies/logo_celinea.png",
  "/companies/logo_coffee theory.png",
  "/companies/logo_cottson.png",
  "/companies/logo_datacircles.png",
  "/companies/logo_nitty gritty.png",
  "/companies/logo_palmore.png",
  "/companies/logo_tea archive.png",
];

const CompanyMarquee = () => {
  const repeatedCompanies = [...companies, ...companies];

  return (
    <section
      className="
        overflow-hidden
        bg-white
        py-7
        sm:py-8
        md:py-10
      "
    >
      <div className="relative overflow-hidden">

        {/* Left fade */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-10
            h-full
            w-12
            bg-gradient-to-r
            from-white
            to-transparent
            sm:w-16
            md:w-24
          "
        />

        {/* Right fade */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-10
            h-full
            w-12
            bg-gradient-to-l
            from-white
            to-transparent
            sm:w-16
            md:w-24
          "
        />

        <motion.div
          className="
            flex
            w-max
            items-center
            gap-3
            sm:gap-4
            md:gap-5
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {repeatedCompanies.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="
                flex
                h-12
                w-28
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-gray-900
                bg-white
                px-4
                sm:h-14
                sm:w-32
                sm:px-5
                md:h-16
                md:w-40
                md:px-7
              "
            >
              <img
                src={logo}
                alt="Company logo"
                className="
                  max-h-5
                  max-w-[75px]
                  object-contain
                  sm:max-h-6
                  sm:max-w-[90px]
                  md:max-h-7
                  md:max-w-[110px]
                "
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CompanyMarquee;
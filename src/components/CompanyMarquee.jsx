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
    <section className="overflow-hidden bg-white py-10">

     

      <div className="relative overflow-hidden">

        {/* Left fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

        {/* Right fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex w-max items-center gap-5"
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
              className="flex h-16 w-40 items-center justify-center rounded-full border border-gray-900 bg-white px-7"
            >
              <img
                src={logo}
                alt="Company logo"
                className="max-h-7 max-w-[110px] object-contain"
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CompanyMarquee;
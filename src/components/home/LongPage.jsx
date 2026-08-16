import Process from "./Process";
import WhyCopperStudio from "./WhyCopperStudio";
import Techstack from "./Techstack";

const LongPage = () => {
  return (
    <main className="min-h-screen w-full bg-white">

      {/* =====================================
          LONG PAGE CONTAINER
      ====================================== */}

      <div
        className="
          mx-auto
          w-[96vw]
          rounded-[2rem]
          bg-black/2
          
          py-10

          sm:w-[96vw]
         
          sm:py-12

          md:w-[96vw]
         
          md:py-14

          lg:w-[96vw]
         
          lg:py-16
        "
      >

        {/* PROCESS */}

        <Process />


        {/* TECH STACK */}

        <Techstack />


        {/* WHY COPPER STUDIO */}

        <WhyCopperStudio />

      </div>

    </main>
  );
};

export default LongPage;
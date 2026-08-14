import Navbar from "../components/Navbar";
import LetsTalk from "../components/LetsTalk";
import Conversation from "../components/Conversation";
import Enquiery from "../components/Enquiery";
import CTA from "../components/CTA";
import CallPoints from "../components/CallPoints";
import FAQ2 from "../components/FAQ2";
import Footer2 from "../components/Footer2";

const ContactUs = () => {
  return (
    <main className="min-h-screen w-full bg-white">

      <Navbar />

      <LetsTalk />

      {/* =====================================
          CONVERSATION + ENQUIeRY
      ====================================== */}

      <section className="bg-white px-4 pb-20 sm:px-6 md:px-10 lg:px-16">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1200px]
            flex-col
            items-start
            gap-12
            lg:flex-row
            lg:items-start
            lg:justify-between
            lg:gap-0
          "
        >

          {/* LEFT — CONVERSATION */}

          <div className="w-[495px] max-w-full">
            <Conversation />
          </div>

          {/* RIGHT — ENQUIeRY */}

          <div className="w-[630px] max-w-full">
            <Enquiery />
          </div>

         

        </div>

         <CTA/>

         <CallPoints/>

         <FAQ2/>

        

      </section>
      <Footer2/>
    </main>
  );
};

export default ContactUs;
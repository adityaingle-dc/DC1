
const LetsTalk = () => {
  return (
    <main className="min-h-screen w-full bg-white">



      {/* =====================================
          CONTACT HERO
      ====================================== */}

      <section
        className="
          px-4
          pb-20
          pt-32
          sm:px-6
          md:px-10
          lg:px-16
        "
      >

        {/* =====================================
            1200 × 325 CONTAINER
        ====================================== */}

        <div
          className="
            mx-auto
            flex
            h-[325px]
            w-full
            max-w-[1200px]
            flex-col
            items-center
            justify-center
          "
        >

          {/* =====================================
              845 × 184
          ====================================== */}

          <div
            className="
              flex
              h-[184px]
              w-full
              max-w-[845px]
              items-center
              justify-center
              text-center
            "
          >
            <h1
              className="
                max-w-[845px]
                
                font-['DM_Sans']
                text-4xl
                font-semibold
                leading-[1]
                tracking-tight
                text-black
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Have a project in mind?
              <br />
              Let's talk.
            </h1>
          </div>


          {/* =====================================
              727 × 58 — CONTACT DETAILS
          ====================================== */}

          <div
            className="
              mt-6
              flex
              h-[58px]
              w-full
              max-w-[727px]
              items-center
              justify-between
            "
          >

            {/* =================================
                ITEM 1 — LOCATION
            ================================= */}

            <div
              className="
                flex
                h-[26px]
                w-[209px]
                items-center
                gap-2
              "
            >
              <div
                className="
                  h-[20px]
                  w-[20px]
                  shrink-0
                  overflow-hidden
                  rounded-full
                "
              >
                <img
                  src="/contactus/check mark.png"
                  alt="Location"
                  className="h-full w-full object-cover"
                />
              </div>

              <span
                className="
                  whitespace-nowrap
                  text-sm
                  text-black
                  font-['DM_Sans']
                "
              >
                Free Initial Consultation
              </span>
            </div>


            {/* =================================
                ITEM 2 — EMAIL
            ================================= */}

            <div
              className="
                flex
                h-[26px]
                w-[209px]
                items-center
                gap-2
              "
            >
              <div
                className="
                  h-[20px]
                  w-[20px]
                  shrink-0
                  overflow-hidden
                  rounded-full
                "
              >
                <img
                 src="/contactus/check mark.png"
                  alt="Email"
                  className="h-full w-full object-cover"
                />
              </div>

              <span
                className="
                  whitespace-nowrap
                  text-sm
                  text-black
                  font-['DM_Sans']
                "
              >
                Dedicated Client Portal
              </span>
            </div>


            {/* =================================
                ITEM 3 — PHONE
            ================================= */}

            <div
              className="
                flex
                h-[26px]
                w-[209px]
                items-center
                gap-2
              "
            >
              <div
                className="
                  h-[20px]
                  w-[20px]
                  shrink-0
                  overflow-hidden
                  rounded-full
                "
              >
                <img
                 src="/contactus/check mark.png"
                  alt="Phone"
                  className="h-full w-full object-cover"
                />
              </div>

              <span
                className="
                  whitespace-nowrap
                  text-sm
                  text-black
                  font-['DM_Sans']
                "
              >
                Support Beyond Launch
              </span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default LetsTalk;
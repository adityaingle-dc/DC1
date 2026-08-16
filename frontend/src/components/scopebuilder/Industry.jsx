import { useState } from "react";

const Industry = ({ onContinue }) => {

  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = [
    {
      title: "F&B/Hospitality",
      description: "Restaurants, cafés, cloud kitchens, hotels & hospitality brands.",
      icon: "/scope_builder/F&B.png",
    },
    {
      title: "Real Estate",
      description: "Property developers, real estate firms, brokers & sales teams.",
      icon: "/scope_builder/RealEstate.png",
    },
    {
      title: "Fitness & Wellness",
      description: "Gyms, fitness studios, coaches, wellness & lifestyle brands.",
      icon: "/scope_builder/Fitness.png",
    },
    {
      title: "SaaS/Tech",
      description: "Software products, platforms, tech startups & AI solutions.",
      icon: "/scope_builder/SaaS.png",
    },
    {
      title: "D2C/E-Commerce",
      description: "Consumer brands, online stores, marketplaces & retail businesses.",
      icon: "/scope_builder/D2C.png",
    },
    {
      title: "Fashion & Lifestyle ",
      description: "Apparel, accessories, beauty, footwear & lifestyle brands.",
      icon: "/scope_builder/Fashion.png",
    },
    {
      title: "Healthcare",
      description: "Clinics, hospitals, healthcare providers & dental practices.",
      icon: "/scope_builder/Healthcare.png",
    },
    {
      title: "Finance & Professional Services",
      description: "Fintech, consultancies, agencies, legal, accounting & advisory firms.",
      icon: "/scope_builder/Finance.png",
    },
    {
      title: "Something Else",
      description: "Don’t see your industry? Tell us what you do and we’ll find the right fit.",
      icon: "/scope_builder/Else.png",
    },
  ];

  return (
    <section
  className="
    flex
    h-full
    w-full
    flex-col
    bg-white
    px-6
    py-4
  "
>

      {/* =====================================
          HEADER
      ====================================== */}

      <div
        className="
          mx-auto
          flex
          w-full
          flex-col
        "
      >

        {/* HEADER ROW */}

        <div className="flex w-full items-center justify-between">

          {/* LEFT — BRAND */}

          <div className="flex items-center gap-3">

            {/* Brand Name */}

            <div
              className="
                flex
                h-[18px]
                w-[130.63px]
                items-center
                whitespace-nowrap
              "
            >
              <span
                className="
                  whitespace-nowrap
                  font-['DM_Sans']
                  text-[20px]
                  font-medium
                  leading-[18px]
                  tracking-tight
                  text-black
                "
              >
                Copper Studio
              </span>
            </div>

            {/* Dot */}

            <span
              className="
                h-[4px]
                w-[4px]
                shrink-0
                rounded-full
                bg-black/30
              "
            />

            {/* Scope Builder */}

            <div
              className="
                flex
                h-[14px]
                items-center
                whitespace-nowrap
              "
            >
              <span
                className="
                  whitespace-nowrap
                  font-['DM_Sans']
                  text-[11px]
                  leading-[14px]
                  text-black/40
                "
              >
                Scope Builder
              </span>
            </div>

          </div>


          {/* RIGHT — STEP + PROGRESS + CLOSE */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            {/* Step Count */}

            <span
              className="
                whitespace-nowrap
                font-['DM_Sans']
                text-[12px]
                font-medium
                text-black
              "
            >
              Step 1 of 5
            </span>


            {/* Progress Bar */}

            <div
              className="
                relative
                h-[3px]
                w-[100px]
                overflow-hidden
                rounded-full
                bg-black/10
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-1/5
                  rounded-full
                  bg-orange-500
                "
              />
            </div>


            {/* Close Button — 26 × 26 */}

            <button
              type="button"
              aria-label="Close"
              className="
                flex
                h-[26px]
                w-[26px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-black/5
                text-black/60
                transition-all
                duration-300
                hover:bg-black/10
                hover:text-black
              "
            >
              <span
                className="
                  text-[16px]
                  font-light
                  leading-none
                "
              >
                ×
              </span>
            </button>

          </div>

        </div>


        {/* =====================================
            BORDER LINE BELOW HEADER
        ====================================== */}

        <div
          className="
            mt-4
            h-px
            w-full
            bg-black/10
          "
        />

      </div>


      {/* =====================================
          CENTER CONTENT
      ====================================== */}

      <div
        className="
          mx-auto
          mt-5
          flex
          w-full
          max-w-[672px]
          flex-col
          items-center
          text-center
        "
      >

        {/* Heading — 672 × 35 */}

        <div
          className="
            flex
            h-[35px]
            w-full
            items-center
            justify-center
          "
        >
          <h1
            className="
              font-['DM_Sans']
              text-3xl
              font-semibold
              leading-[35px]
              tracking-tight
              text-black
              sm:text-4xl
            "
          >
            What industry are you in?
          </h1>
        </div>


        {/* Paragraph — 640 × 12 */}

        <div
          className="
            mt-2
            flex
            h-[12px]
            w-full
            max-w-[640px]
            items-center
            justify-center
          "
        >
          <p
            className="
              font-['DM_Sans']
              text-xs
              leading-[12px]
              text-black/45
              sm:text-sm
            "
          >
            Choose your industry and we’ll tailor the experience around your business.
          </p>
        </div>

      </div>


      {/* =====================================
          INDUSTRY CARDS — 3 × 3
      ====================================== */}

      <div
        className="
          mx-auto
          mt-5
          grid
          w-full
          max-w-[940px]
          grid-cols-1
          justify-items-center
          gap-3
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >

        {industries.slice(0, 9).map((industry) => {

          const isSelected =
            selectedIndustry === industry.title;

          return (
            <button
              key={industry.title}
              type="button"
              onClick={() =>
                setSelectedIndustry(industry.title)
              }
              className={`
                group
                flex
                h-[70px]
                w-[300px]
                items-center
                rounded-2xl
                border
                px-4
                text-left
                transition-all
                duration-300
                ${
                  isSelected
                    ? "border-2 border-orange-500 bg-white"
                    : "border border-black/10 bg-white hover:border-orange-500"
                }
              `}
            >

              {/* =================================
                  ICON — 34 × 40
              ================================== */}

              <div
                className="
                  flex
                  h-[40px]
                  w-[34px]
                  shrink-0
                  items-center
                  justify-center
                "
              >
                <img
                  src={industry.icon}
                  alt={industry.title}
                  className="
                    h-[40px]
                    w-[34px]
                    object-contain
                  "
                />
              </div>


              {/* =================================
                  TEXT — 230 × 42
              ================================== */}

              <div
                className="
                  ml-4
                  flex
                  h-[42px]
                  w-[230px]
                  flex-col
                  justify-center
                "
              >

                {/* Heading */}

                <h3
                  className="
                    text-sm
                    font-medium
                    leading-5
                    tracking-tight
                    text-black
                  "
                >
                  {industry.title}
                </h3>


                {/* Paragraph */}

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    leading-4
                    text-black/45
                  "
                >
                  {industry.description}
                </p>

              </div>

            </button>
          );
        })}

      </div>


      {/* =====================================
          BOTTOM BORDER
      ====================================== */}

      <div
        className="
          mt-auto
          h-px
          translate-y-1
          w-full
          bg-black/10
        "
      />


      {/* =====================================
          NAVIGATION BUTTONS
      ====================================== */}

      <div
  className="
    -mb-2
    flex
    w-full
    items-center
    justify-between
    pt-3
  "
>

        {/* BACK */}

        <button
          type="button"
          className="
            flex
            items-center
            gap-2
            rounded-full
            px-4
            py-2
            font-['DM_Sans']
            text-sm
            font-medium
            text-black/60
            transition-all
            duration-300
            hover:text-black
          "
        >
          <span className="text-[22px] leading-none">
            ←
          </span>

          <span>
            Back
          </span>
        </button>


        {/* CONTINUE */}

        {/* CONTINUE */}

<button
  type="button"
  disabled={!selectedIndustry}
  onClick={() => {
    if (!selectedIndustry) return;

    onContinue();
  }}
  className={`
    flex
    items-center
    gap-2
    rounded-full
    px-5
    py-2.5
    font-['DM_Sans']
    text-sm
    font-medium
    transition-all
    duration-300
    ${
      selectedIndustry
        ? "bg-black text-white hover:bg-orange-500"
        : "cursor-not-allowed bg-black/10 text-black/30"
    }
  `}
>
  <span>
    Continue
  </span>

  <span className="text-[22px] leading-none">
    →
  </span>
</button>
      </div>

    </section>
  );
};

export default Industry;
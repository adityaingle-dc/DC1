import { useState } from "react";

const WhatToBuild = ({ onBack, onContinue }) => {

  const [selectedBuild, setSelectedBuild] = useState(null);

  const buildOptions = [
    {
      title: "Brand Identity",
      description:
        "Logo, visual identity, brand guidelines & core assets.",
    },
    {
      title: "Website/Landing Page/CMS",
      description:
        "Marketing websites, landing pages & content-managed sites."
    },
    {
      title: "E-Commerce Store",
      description:
        "Online storefronts designed to attract, engage & convert.",
    },
    {
      title: "Company Portal",
      description:
        "Client portals, internal systems, CRMs & business tools.",
    },
    {
      title: "Full Rebrand + rebuild",
      description:
        "A complete brand and website transformation, built together.",
    },
    {
      title: "Not sure yet?",
      description:
        "Tell us what you’re working on and we’ll help shape the right direction.",
    },
  ];


  return (
    <section
      className="
        relative
        h-full
        w-full
        overflow-hidden
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
              Step 2 of 5
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
                  w-2/5
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
          mt-4
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
            mt-4
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
           What are you building?
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
            Tell us what you have in mind, and we’ll tailor the experience around it.
          </p>
        </div>

      </div>


      {/* =====================================
          BUILD OPTIONS — 2 × 3
      ====================================== */}

      <div
        className="
          mx-auto
          mt-10
          grid
          w-full
          max-w-[940px]
          grid-cols-1
          justify-items-center
          gap-4
          sm:grid-cols-2
          lg:grid-cols-3
          pb-[20px]
        "
      >

        {buildOptions.map((option) => {

          const isSelected =
            selectedBuild === option.title;

          return (
            <button
              key={option.title}
              type="button"
              onClick={() =>
                setSelectedBuild(option.title)
              }
              className={`
                group
                flex
                h-[70px]
                w-[300px]
                items-center
                justify-center
                rounded-2xl
                border
                px-4
                text-center
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
                  TEXT — CENTERED
              ================================== */}

              <div
                className="
                  flex
                  h-[42px]
                  w-[260px]
                  flex-col
                  items-center
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
                  {option.title}
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
                  {option.description}
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
          translate-y-19
          w-full
          bg-black/10
        "
      />


      {/* =====================================
          NAVIGATION BUTTONS
      ====================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          flex
          h-[58px]
          w-full
          items-center
          justify-between
          bg-white
          px-6
        "
      >

        {/* BACK */}

        <button
          type="button"
          onClick={onBack}
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

        <button
          type="button"
          disabled={!selectedBuild}
          onClick={() => {
            if (!selectedBuild) return;

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
              selectedBuild
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

export default WhatToBuild;
import React, { useState } from "react";

export default function TellUs({ onBack, onContinue }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="
        relative
        h-full
        w-full
        overflow-hidden
        bg-white
        font-[DM_Sans,sans-serif]
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          mx-auto
          flex
          w-full
          flex-col
          px-6
          py-4
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
              Step 5 of 5
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
                  w-full
                  rounded-full
                  bg-orange-500
                "
              />
            </div>

            {/* Close Button */}

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

        {/* HEADER BORDER */}

        <div
          className="
            mt-4
            h-px
            w-full
            bg-black/10
          "
        />

      </div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main
        className="
          flex
          min-h-0
          flex-1
          flex-col
          px-[60px]
          pt-[20px]
        "
      >

        {/* ===================================================
            TITLE
        =================================================== */}

        <div className="text-center">

          <h1
            className="
              m-0
              font-['DM_Sans']
              text-[28px]
              font-semibold
              leading-[34px]
              tracking-[-0.8px]
              text-black
            "
          >
            Tell us about your project & we'll send you an estimate.
          </h1>

          <p
            className="
              m-0
              mt-[3px]
              font-['DM_Sans']
              text-[14px]
              font-normal
              leading-[20px]
              text-black/45
            "
          >
            Share a few details about your project. You can always update
            them later.
          </p>

        </div>


        {/* ===================================================
            YOUR SCOPE
        =================================================== */}

        <div
          className="
            mt-[17px]
            flex
            items-center
            gap-[8px]
            whitespace-nowrap
            font-['DM_Sans']
            text-[13px]
          "
        >

          <span
            className="
              font-semibold
              text-black/70
            "
          >
            Your Scope:
          </span>

          <span className="text-black/70">
            Brand Identity
          </span>

          <span className="text-black/30">
            •
          </span>

          <span className="text-black/70">
            Custom Website
          </span>

          <span className="text-black/30">
            •
          </span>

          <span className="text-black/70">
            Campaign Landing Page
          </span>

        </div>


        {/* ===================================================
            FORM AREA
        =================================================== */}

        <div
          className="
            mt-[24px]
            grid
            grid-cols-[300px_398px]
            gap-[98px]
          "
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="flex flex-col">

            {/* FULL NAME */}

            <div>

              <label
                htmlFor="name"
                className="
                  mb-[5px]
                  block
                  font-['DM_Sans']
                  text-[12px]
                  font-semibold
                  leading-[14px]
                  text-black/65
                "
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="
                  h-[20px]
                  w-full
                  rounded-none
                  border-0
                  border-b
                  border-[#d8d8d8]
                  bg-transparent
                  px-0
                  py-0
                  font-['DM_Sans']
                  text-[11px]
                  text-black
                  outline-none
                  placeholder:text-[#b7b7b7]
                  focus:border-orange-500
                "
              />

            </div>


            {/* WORK EMAIL */}

            <div className="mt-[14px]">

              <label
                htmlFor="email"
                className="
                  mb-[5px]
                  block
                  font-['DM_Sans']
                  text-[12px]
                  font-semibold
                  leading-[14px]
                  text-black/65
                "
              >
                Work Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="
                  h-[20px]
                  w-full
                  rounded-none
                  border-0
                  border-b
                  border-[#d8d8d8]
                  bg-transparent
                  px-0
                  py-0
                  font-['DM_Sans']
                  text-[11px]
                  text-black
                  outline-none
                  placeholder:text-[#b7b7b7]
                  focus:border-orange-500
                "
              />

            </div>


            {/* PHONE NUMBER */}

            <div className="mt-[14px]">

              <label
                htmlFor="phone"
                className="
                  mb-[5px]
                  block
                  font-['DM_Sans']
                  text-[12px]
                  font-semibold
                  leading-[14px]
                  text-black/65
                "
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="
                  h-[20px]
                  w-full
                  rounded-none
                  border-0
                  border-b
                  border-[#d8d8d8]
                  bg-transparent
                  px-0
                  py-0
                  font-['DM_Sans']
                  text-[11px]
                  text-black
                  outline-none
                  placeholder:text-[#b7b7b7]
                  focus:border-orange-500
                "
              />

            </div>


            {/* COMPANY / BRAND NAME */}

            <div className="mt-[14px]">

              <label
                htmlFor="company"
                className="
                  mb-[5px]
                  block
                  font-['DM_Sans']
                  text-[12px]
                  font-semibold
                  leading-[14px]
                  text-black/65
                "
              >
                Company/Brand Name
              </label>

              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter Your Company Name"
                className="
                  h-[20px]
                  w-full
                  rounded-none
                  border-0
                  border-b
                  border-[#d8d8d8]
                  bg-transparent
                  px-0
                  py-0
                  font-['DM_Sans']
                  text-[11px]
                  text-black
                  outline-none
                  placeholder:text-[#b7b7b7]
                  focus:border-orange-500
                "
              />

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex flex-col">

            <label
              htmlFor="message"
              className="
                mb-[5px]
                block
                font-['DM_Sans']
                text-[12px]
                font-semibold
                leading-[14px]
                text-black/65
              "
            >
              Something about the project
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={
                "eg. Launching a new specialty coffee brand in Bangalore. Already have a name.\nNeed everything else."
              }
              className="
                h-[175px]
                w-[398px]
                resize-none
                rounded-[15px]
                border
                border-[#cfcfcf]
                bg-white
                px-[18px]
                py-[15px]
                font-['DM_Sans']
                text-[11px]
                leading-[1.25]
                text-black
                outline-none
                placeholder:text-[#b7b7b7]
                focus:border-orange-500
                focus:ring-1
                focus:ring-orange-500
              "
            />

          </div>

        </div>

      </main>


      {/* =====================================================
          BOTTOM BORDER
      ===================================================== */}

      <div
        className="
          absolute
          bottom-[58px]
          left-[31px]
          right-[31px]
          h-px
          bg-black/10
        "
      />


      {/* =====================================================
          FOOTER
      ===================================================== */}

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
          px-[31px]
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
            px-0
            py-2
            font-['DM_Sans']
            text-[14px]
            font-medium
            text-black/70
            transition-all
            duration-300
            hover:text-black
          "
        >

          <span
            className="
              text-[20px]
              leading-none
            "
          >
            ←
          </span>

          <span>
            Back
          </span>

        </button>


        {/* SUBMIT / CONTINUE */}

        <button
          type="button"
          onClick={onContinue}
          className="
            flex
            items-center
            gap-2
            rounded-full
            bg-black
            px-[20px]
            py-[9px]
            font-['DM_Sans']
            text-[14px]
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-orange-500
          "
        >

          <span>
            Submit
          </span>

          <span
            className="
              text-[20px]
              leading-none
            "
          >
            →
          </span>

        </button>

      </div>

    </div>
  );
}
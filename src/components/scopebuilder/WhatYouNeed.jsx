import { useState } from "react";

const brandCards = [
  {
    name: "Brand Identity",
    description:
      "Logo design, brand strategy, visual identity and guidelines that help you stand out.",
    min: 15000,
    max: 25000,
    price: "₹15K to ₹25K",
  },
  {
    name: "Corporate Branding & Business Assets",
    description:
      "Business cards, letterhead & envelope, digital templates and employee assets.",
    min: 10000,
    max: 15000,
    price: "₹10K to ₹15K",
  },
  {
    name: "Marketing Collateral & Social Media",
    description:
      "Brochures, digital & promotional assets, marketing templates.",
    min: 10000,
    max: 20000,
    price: "₹10K to ₹20K",
  },
  {
    name: "Packaging, Environmental & Merchandise",
    description:
      "Packaging & label design, apparel & merchandise, event branding.",
    min: 35000,
    max: 60000,
    price: "₹35K to ₹60K",
  },
];

const webCards = [
  {
    name: "Website Design & Development",
    description:
      "Professional website design and development tailored to your business needs.",
    min: 25000,
    max: 75000,
    price: "₹25K to ₹75K",
  },
  {
    name: "E-commerce Website",
    description:
      "Complete online store with product pages, shopping cart and checkout.",
    min: 50000,
    max: 120000,
    price: "₹50K to ₹1.2L",
  },
  {
    name: "Web Application",
    description:
      "Custom web applications with interactive features and business workflows.",
    min: 75000,
    max: 150000,
    price: "₹75K to ₹1.5L",
  },
  {
    name: "Landing Page",
    description:
      "High-converting landing pages designed for campaigns, products and services.",
    min: 10000,
    max: 25000,
    price: "₹10K to ₹25K",
  },
];

const portalCards = [
  {
    name: "Custom Company Portals",
    description:
      "Secure client portal that simplifies communication, file sharing, approvals and tracking.",
    min: 25000,
    max: 120000,
    price: "₹25K to ₹1.2L",
  },
  {
    name: "Billing & Invoicing System",
    description:
      "Custom invoicing that automates billing, payments and financial workflows.",
    min: 20000,
    max: 60000,
    price: "₹20K to ₹60K",
  },
  {
    name: "Custom CRM Solution",
    description:
      "Tailored CRM that centralizes customer data, sales and relationship management.",
    min: 25000,
    max: 85000,
    price: "₹25K to ₹85K",
  },
];

const tabs = [
  "Brand Identity",
  "Web Design & Development",
  "Custom Company Portals",
];

function WhatYouNeed({ onBack, onContinue }) {
  const [activeTab, setActiveTab] = useState("Brand Identity");
  const [selectedItems, setSelectedItems] = useState([]);

  const getCurrentCards = () => {
    if (activeTab === "Web Design & Development") {
      return webCards;
    }

    if (activeTab === "Custom Company Portals") {
      return portalCards;
    }

    return brandCards;
  };

  const currentCards = getCurrentCards();

  /* =====================================
     SELECT / DESELECT
  ====================================== */

  const toggleItem = (item) => {
    setSelectedItems((prev) => {
      const exists = prev.some(
        (selected) => selected.name === item.name
      );

      if (exists) {
        return prev.filter(
          (selected) => selected.name !== item.name
        );
      }

      return [...prev, item];
    });
  };

  /* =====================================
     ESTIMATION
  ====================================== */

  const estimatedMin = selectedItems.reduce(
    (total, item) => total + item.min,
    0
  );

  const estimatedMax = selectedItems.reduce(
    (total, item) => total + item.max,
    0
  );

  const formatPrice = (amount) => {
    if (amount === 0) {
      return "₹0";
    }

    if (amount >= 100000) {
      const lakhs = amount / 100000;

      if (Number.isInteger(lakhs)) {
        return `₹${lakhs}L`;
      }

      return `₹${lakhs.toFixed(1)}L`;
    }

    return `₹${Math.round(amount / 1000)}K`;
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

      {/* =====================================
          HEADER
      ====================================== */}

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

        <div className="flex w-full items-center justify-between">

          {/* LEFT — BRAND */}

          <div className="flex items-center gap-3">

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

            <span
              className="
                h-[4px]
                w-[4px]
                shrink-0
                rounded-full
                bg-black/30
              "
            />

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


          {/* RIGHT */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            <span
              className="
                whitespace-nowrap
                font-['DM_Sans']
                text-[12px]
                font-medium
                text-black
              "
            >
              Step 4 of 5
            </span>

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
                  w-4/5
                  rounded-full
                  bg-orange-500
                "
              />
            </div>

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
          MAIN CONTENT
      ====================================== */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[740px]
          flex-col
          items-center
          px-0
          pt-0
        "
      >

        {/* HEADING */}

        <h1
          className="
            mt-[3px]
            font-['DM_Sans']
            text-[28px]
            font-semibold
            leading-[34px]
            tracking-tight
            text-black
          "
        >
          What do you need done?
        </h1>


        {/* SUBTITLE */}

        <p
          className="
            mt-[2px]
            font-['DM_Sans']
            text-[14px]
            leading-[20px]
            text-black/45
          "
        >
          Pick as many as fit. You can always adjust later.
        </p>


        {/* =====================================
            TABS
        ====================================== */}

        <div
          className="
            mt-[17px]
            flex
            w-full
            border-b
            border-black/10
          "
        >

          {tabs.map((tab) => {
            const active = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`
                  relative
                  flex
                  h-[33px]
                  flex-1
                  items-start
                  justify-center
                  bg-transparent
                  pt-[1px]
                  font-['DM_Sans']
                  text-[14px]
                  leading-[20px]
                  transition-all
                  duration-300
                  ${
                    active
                      ? "font-medium text-black"
                      : "font-normal text-black/45 hover:text-black"
                  }
                `}
              >
                {tab}

                {active && (
                  <span
                    className="
                      absolute
                      bottom-[-1px]
                      left-0
                      h-[2px]
                      w-full
                      bg-orange-500
                    "
                  />
                )}
              </button>
            );
          })}

        </div>


        {/* =====================================
            CARDS
        ====================================== */}

        <div
          className="
            mt-[24px]
            grid
            w-full
            grid-cols-2
            gap-[10px]
          "
        >

          {currentCards.map((item) => {

            const selected = selectedItems.some(
              (selectedItem) =>
                selectedItem.name === item.name
            );

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => toggleItem(item)}
                className={`
                  relative
                  flex
                  h-[100px]
                  w-full
                  items-center
                  justify-center
                  rounded-[16px]
                  border
                  px-5
                  text-center
                  transition-all
                  duration-300
                  ${
                    selected
                      ? "border-orange-500 bg-orange-50/30"
                      : "border-black/10 bg-white hover:border-orange-500"
                  }
                `}
              >

                {/* CHECK CIRCLE */}

                <span
                  className={`
                    absolute
                    right-[7px]
                    top-[7px]
                    flex
                    h-[18px]
                    w-[18px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    font-['DM_Sans']
                    text-[10px]
                    ${
                      selected
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-black/10 bg-white text-transparent"
                    }
                  `}
                >
                  ✓
                </span>


                {/* CONTENT */}

                <div className="w-full">

                  <h3
                    className="
                      font-['DM_Sans']
                      text-[14px]
                      font-medium
                      leading-[18px]
                      tracking-tight
                      text-black
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-[4px]
                      max-w-[330px]
                      font-['DM_Sans']
                      text-[11px]
                      leading-[14px]
                      text-black/45
                    "
                  >
                    {item.description}
                  </p>

                  <p
                    className="
                      mt-[4px]
                      font-['DM_Sans']
                      text-[12px]
                      font-medium
                      leading-[15px]
                      text-black
                    "
                  >
                    {item.price}
                  </p>

                </div>

              </button>
            );
          })}

        </div>

      </div>


      {/* =====================================
          BOTTOM BORDER
      ====================================== */}

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


      {/* =====================================
          FOOTER
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


        {/* =====================================
            ESTIMATION
        ====================================== */}

        <div
          className="
            absolute
            left-1/2
            flex
            -translate-x-1/2
            items-center
            whitespace-nowrap
            font-['DM_Sans']
            text-[14px]
            leading-[20px]
          "
        >

          {/* ITEMS — LIGHT BLUE/GRAY LIKE SCREENSHOT 2 */}

          <span
            className="
              font-['DM_Sans']
              font-normal
              text-[#8B9BB0]
            "
          >
            {selectedItems.length} Items
          </span>

          <span
            className="
              mx-[9px]
              text-[#C7CDD5]
            "
          >
            •
          </span>

          {/* ESTIMATE — DARK */}

          <span
            className="
              font-['DM_Sans']
              font-medium
              text-black
            "
          >
            Est. {formatPrice(estimatedMin)} to{" "}
            {formatPrice(estimatedMax)}
          </span>

        </div>


        {/* CONTINUE */}

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
            Continue
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

export default WhatYouNeed;
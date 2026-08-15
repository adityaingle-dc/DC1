import React, { useState } from "react";

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

function WhatYouNeed() {
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

  /* --------------------------------
     SELECT / DESELECT
  -------------------------------- */
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

  /* --------------------------------
     LIVE ESTIMATION
  -------------------------------- */
  const estimatedMin = selectedItems.reduce(
    (total, item) => total + item.min,
    0
  );

  const estimatedMax = selectedItems.reduce(
    (total, item) => total + item.max,
    0
  );

  /* --------------------------------
     FORMAT PRICE
  -------------------------------- */
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
    <div className="min-h-screen w-full bg-[#202020] m-0 p-0 font-[DM_Sans,sans-serif]">
      <div className="flex h-screen min-h-screen w-full flex-col overflow-hidden bg-white">

        {/* =========================================
            HEADER
        ========================================= */}
        <header
          className="
            mx-[54px]
            flex
            h-[88px]
            min-h-[88px]
            items-center
            justify-between
            border-b
            border-[#dedede]
          "
        >
          {/* LEFT HEADER */}
          <div className="flex items-center gap-[11px] whitespace-nowrap">
            <span
              className="
                text-[21px]
                font-bold
                leading-none
                tracking-[-0.7px]
                text-[#111111]
              "
            >
              CopperStudio
            </span>

            <span className="text-[13px] text-[#777777]">
              •
            </span>

            <span className="text-[15px] font-normal text-[#444444]">
              Scope Builder
            </span>
          </div>

          {/* RIGHT HEADER */}
          <div className="flex items-center gap-3">
            <span className="whitespace-nowrap text-[14px] font-normal text-[#333333]">
              Step 4 of 5
            </span>

            {/* PROGRESS */}
            <div className="relative h-px w-[220px] bg-[#d3d3d3]">
              <div
                className="
                  absolute
                  left-0
                  top-[-1px]
                  h-[3px]
                  w-[80%]
                  rounded-[3px]
                  bg-[#f26a21]
                "
              />
            </div>

            {/* CLOSE */}
            <button
              type="button"
              aria-label="Close"
              className="
                ml-4
                flex
                h-[38px]
                w-[38px]
                items-center
                justify-center
                rounded-full
                border-0
                bg-[#f4f4f4]
                text-[24px]
                font-normal
                leading-none
                text-[#111111]
                transition
                duration-150
                hover:bg-[#e9e9e9]
              "
            >
              ×
            </button>
          </div>
        </header>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}
        <main
          className="
            flex
            min-h-0
            flex-1
            w-full
            flex-col
            px-[54px]
            pt-[50px]
            pb-[28px]
          "
        >
          {/* =========================================
              TITLE
          ========================================= */}
          <section className="mb-[30px] text-center">
            <h1
              className="
                m-0
                text-[32px]
                font-bold
                leading-[1.2]
                tracking-[-1px]
                text-[#080808]
              "
            >
              What do you need done?
            </h1>

            <p
              className="
                mt-[5px]
                mb-0
                text-[16px]
                font-normal
                leading-[1.4]
                text-[#6b6b6b]
              "
            >
              Pick as many as fit. You can always adjust later.
            </p>
          </section>

          {/* =========================================
              TABS
          ========================================= */}
          <nav
            className="
              mx-auto
              mb-[30px]
              flex
              w-full
              max-w-[850px]
              items-stretch
              justify-center
              border-b
              border-[#dddddd]
            "
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`
                    relative
                    h-[48px]
                    flex-1
                    whitespace-nowrap
                    border-0
                    bg-transparent
                    px-[18px]
                    text-[16px]
                    cursor-pointer
                    transition-colors
                    duration-150
                    hover:text-[#111111]
                    ${
                      isActive
                        ? "font-semibold text-[#111111]"
                        : "font-medium text-[#303030]"
                    }
                  `}
                >
                  {tab}

                  {isActive && (
                    <span
                      className="
                        absolute
                        bottom-[-1px]
                        left-0
                        right-0
                        h-[3px]
                        rounded-t-[3px]
                        bg-[#f26a21]
                      "
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* =========================================
              CARDS
          ========================================= */}
          <section
            className={`
              grid
              w-full
              grid-cols-2
              gap-3
              content-start
              max-[750px]:grid-cols-1
            `}
          >
            {currentCards.map((item, index) => {
              const isSelected = selectedItems.some(
                (selected) => selected.name === item.name
              );

              const isPortalThirdCard =
                activeTab === "Custom Company Portals" &&
                index === 2;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => toggleItem(item)}
                  className={`
                    relative
                    flex
                    min-h-[134px]
                    items-center
                    justify-center
                    rounded-[15px]
                    border
                    px-[42px]
                    py-[22px]
                    pb-[18px]
                    text-center
                    cursor-pointer
                    transition
                    duration-150

                    ${
                      isSelected
                        ? "border-[#f26a21] bg-[#fffaf6] shadow-[0_0_0_1px_rgba(242,106,33,0.1)]"
                        : "border-[#cccccc] bg-white hover:border-[#a9a9a9]"
                    }

                    ${
                      isPortalThirdCard
                        ? "col-span-2 w-[calc(50%-6px)] justify-self-center max-[750px]:col-span-1 max-[750px]:w-full"
                        : ""
                    }

                    max-[450px]:min-h-[125px]
                    max-[450px]:px-[28px]
                  `}
                >
                  {/* SELECTION CIRCLE */}
                  <span
                    className={`
                      absolute
                      right-[10px]
                      top-[10px]
                      flex
                      h-[19px]
                      w-[19px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-[11px]
                      font-bold
                      text-white
                      ${
                        isSelected
                          ? "border-[#f26a21] bg-[#f26a21]"
                          : "border-[#d2d2d2] bg-white"
                      }
                    `}
                  >
                    {isSelected && "✓"}
                  </span>

                  {/* CARD CONTENT */}
                  <div className="w-full max-w-[650px]">
                    <h2
                      className="
                        m-0
                        mb-1
                        text-[16px]
                        font-bold
                        leading-[1.3]
                        text-[#111111]
                        max-[450px]:text-[15px]
                      "
                    >
                      {item.name}
                    </h2>

                    <p
                      className="
                        mx-auto
                        mb-[7px]
                        mt-0
                        max-w-[600px]
                        text-[12px]
                        font-normal
                        leading-[1.35]
                        text-[#6b6b6b]
                        max-[450px]:text-[11px]
                      "
                    >
                      {item.description}
                    </p>

                    <strong
                      className="
                        block
                        text-[13px]
                        font-bold
                        leading-[1.2]
                        text-[#333333]
                      "
                    >
                      {item.price}
                    </strong>
                  </div>
                </button>
              );
            })}
          </section>
        </main>

        {/* =========================================
            FOOTER
        ========================================= */}
        <footer
          className="
            mx-[54px]
            flex
            h-[82px]
            min-h-[82px]
            items-center
            justify-between
            border-t
            border-[#dedede]
            max-[1000px]:mx-8
            max-[750px]:mx-5
            max-[450px]:mx-4
          "
        >
          {/* BACK */}
          <button
            type="button"
            className="
              flex
              items-center
              gap-[5px]
              border-0
              bg-transparent
              px-0
              py-2
              text-[14px]
              font-normal
              text-[#111111]
              cursor-pointer
              hover:underline
            "
          >
            <span className="translate-y-[-1px] text-[21px] leading-none">
              ‹
            </span>

            Back
          </button>

          {/* LIVE ESTIMATION */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-[9px]
              text-[13px]
              font-normal
              text-[#666666]
              max-[750px]:hidden
            "
          >
            <span>
              {selectedItems.length} Items
            </span>

            <span className="text-[#999999]">
              •
            </span>

            <span>
              Est. {formatPrice(estimatedMin)} to{" "}
              {formatPrice(estimatedMax)}
            </span>
          </div>

          {/* CONTINUE */}
          <button
            type="button"
            className="
              flex
              h-[38px]
              items-center
              gap-2
              rounded-[20px]
              border
              border-[#cccccc]
              bg-white
              px-[14px]
              text-[14px]
              font-medium
              text-[#111111]
              cursor-pointer
              transition
              duration-150
              hover:border-[#a9a9a9]
              hover:bg-[#f7f7f7]
            "
          >
            Continue

            <span className="text-[19px] leading-none">
              →
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}

export default WhatYouNeed;
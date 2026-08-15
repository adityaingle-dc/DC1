import React, { useState } from "react";

/* =========================================================
   BRAND IDENTITY OPTIONS
========================================================= */

const brandCategories = [
  {
    name: "Brand Identity",
    description:
      "Logo design, brand strategy, visual identity and guidelines that help you stand out.",
    price: "₹15K to ₹25K",
  },
  {
    name: "Corporate Branding & Business Assets",
    description:
      "Business cards, letterhead & envelope, digital templates and employee assets.",
    price: "₹10K to ₹15K",
  },
  {
    name: "Marketing Collateral & Social Media",
    description:
      "Brochures, digital & promotional assets, marketing templates.",
    price: "₹10K to ₹20K",
  },
  {
    name: "Packaging, Environmental & Merchandise",
    description:
      "Packaging & label design, apparel & merchandise, event branding.",
    price: "₹35K to ₹60K",
  },
];

/* =========================================================
   WEB DESIGN OPTIONS
   KEEPING YOUR EXISTING 4 CARDS
========================================================= */

const webCategories = [
  {
    name: "Website Design",
    description:
      "Modern, responsive website design tailored to your brand and audience.",
    price: "₹25K to ₹40K",
  },
  {
    name: "Website Development",
    description:
      "Frontend and backend development with responsive and scalable functionality.",
    price: "₹40K to ₹70K",
  },
  {
    name: "E-commerce Website",
    description:
      "Complete online store experience with product, cart and checkout functionality.",
    price: "₹50K to ₹90K",
  },
  {
    name: "Website Maintenance",
    description:
      "Ongoing updates, improvements, fixes and technical support for your website.",
    price: "₹10K to ₹20K",
  },
];

/* =========================================================
   CUSTOM COMPANY PORTALS
   EXACTLY 3 CARDS
========================================================= */

const portalCategories = [
  {
    name: "Custom Company Portals",
    description:
      "Secure client portal that simplifies communication, file sharing, approvals and tracking.",
    price: "₹25K to ₹1.2L",
  },
  {
    name: "Billing & Invoicing System",
    description:
      "Custom invoicing that automates billing, payments and financial workflows.",
    price: "₹20K to ₹60K",
  },
  {
    name: "Custom CRM Solution",
    description:
      "Tailored CRM that centralizes customer data, sales and relationship management.",
    price: "₹25K to ₹85K",
  },
];

/* =========================================================
   TABS
========================================================= */

const tabs = [
  "Brand Identity",
  "Web Design & Development",
  "Custom Company Portals",
];

/* =========================================================
   COMPONENT
========================================================= */

function WhatYouNeed() {
  const [activeTab, setActiveTab] = useState("Brand Identity");

  /*
    Store the complete selected item instead of only its name.
    This allows the estimate to continue working when switching
    between Brand / Web / Portal tabs.
  */
  const [selectedItems, setSelectedItems] = useState([]);

  /* -------------------------------------------------------
     CHANGE OPTIONS WHEN TAB CHANGES
  ------------------------------------------------------- */

  const getCategories = () => {
    if (activeTab === "Web Design & Development") {
      return webCategories;
    }

    if (activeTab === "Custom Company Portals") {
      return portalCategories;
    }

    return brandCategories;
  };

  const categories = getCategories();

  /* -------------------------------------------------------
     SELECT / UNSELECT CARD
  ------------------------------------------------------- */

  const toggleItem = (item) => {
    setSelectedItems((prev) => {
      const exists = prev.some(
        (selectedItem) => selectedItem.name === item.name
      );

      if (exists) {
        return prev.filter(
          (selectedItem) => selectedItem.name !== item.name
        );
      }

      return [...prev, item];
    });
  };

  /* -------------------------------------------------------
     CONVERT PRICE TO MIN / MAX
     
     Examples:
     ₹15K to ₹25K  -> 15 / 25
     ₹25K to ₹1.2L  -> 25 / 120
     ₹60K to ₹1L    -> 60 / 100
  ------------------------------------------------------- */

  const getPriceRange = (price) => {
    const values = price.match(/\d+(?:\.\d+)?[KL]?/gi);

    if (!values || values.length < 2) {
      return [0, 0];
    }

    const convertValue = (value) => {
      const number = parseFloat(value);
      const upperValue = value.toUpperCase();

      if (upperValue.includes("L")) {
        return number * 100;
      }

      return number;
    };

    const min = convertValue(values[0]);
    const max = convertValue(values[1]);

    return [min, max];
  };

  /* -------------------------------------------------------
     ESTIMATION CALCULATION

     IMPORTANT:
     Uses ALL selected cards, not just the current tab.
  ------------------------------------------------------- */

  const calculateEstimate = () => {
    let min = 0;
    let max = 0;

    selectedItems.forEach((item) => {
      const [itemMin, itemMax] = getPriceRange(item.price);

      min += itemMin;
      max += itemMax;
    });

    return {
      min,
      max,
    };
  };

  const estimate = calculateEstimate();

  /* -------------------------------------------------------
     DISPLAY ESTIMATE
     
     Internal values are stored in K.

     0      -> ₹0
     15     -> ₹15K
     100    -> ₹1L
     120    -> ₹1.2L
     265    -> ₹2.65L
  ------------------------------------------------------- */

  const formatEstimate = (value) => {
    if (value === 0) {
      return "₹0";
    }

    if (value >= 100) {
      const lakhs = value / 100;

      return `₹${Number.isInteger(lakhs)
        ? lakhs
        : lakhs.toFixed(2).replace(/0+$/, "").replace(/\.$/, "")
      }L`;
    }

    return `₹${value}K`;
  };

  return (
    <div className="scope-page">
      <div className="scope-card">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="scope-header">

          <div className="brand-area">

            <span className="brand-name">
              CopperStudio
            </span>

            <span className="header-dot">
              •
            </span>

            <span className="scope-name">
              Scope Builder
            </span>

          </div>

          <div className="step-area">

            <span className="step-text">
              Step 4 of 6
            </span>

            <div className="progress-line">
              <div className="progress-active"></div>
            </div>

            <button
              className="close-button"
              aria-label="Close"
            >
              ×
            </button>

          </div>

        </header>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <main className="scope-content">

          {/* TITLE */}

          <section className="title-section">

            <h1>
              What do you need done?
            </h1>

            <p>
              Pick as many as fit. You can always adjust later.
            </p>

          </section>

          {/* =================================================
              TABS
          ================================================= */}

          <nav className="category-tabs">

            {tabs.map((tab) => (

              <button
                key={tab}
                className={`category-tab ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>

            ))}

          </nav>

          {/* =================================================
              CATEGORY CARDS
          ================================================= */}

          <section className="cards-container">

            {categories.map((item, index) => {

              const isSelected = selectedItems.some(
                (selectedItem) =>
                  selectedItem.name === item.name
              );

              /*
                Custom Company Portals has only 3 cards.

                The third card:
                Custom CRM Solution

                is centered exactly like your screenshot.
              */

              const isCenteredPortalCard =
                activeTab === "Custom Company Portals" &&
                index === 2;

              return (

                <button
                  key={item.name}
                  className={`service-card ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() => toggleItem(item)}
                  style={
                    isCenteredPortalCard
                      ? {
                          gridColumn: "1 / -1",
                          width: "calc(50% - 6px)",
                          justifySelf: "center",
                        }
                      : undefined
                  }
                >

                  {/* CHECK CIRCLE */}

                  <span
                    className={`selection-circle ${
                      isSelected ? "checked" : ""
                    }`}
                  >
                    {isSelected && "✓"}
                  </span>

                  {/* CARD CONTENT */}

                  <div className="service-content">

                    <h2>
                      {item.name}
                    </h2>

                    <p>
                      {item.description}
                    </p>

                    <strong>
                      {item.price}
                    </strong>

                  </div>

                </button>

              );
            })}

          </section>

        </main>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="scope-footer">

          {/* BACK */}

          <button className="back-button">

            <span>
              ‹
            </span>

            Back

          </button>

          {/* =================================================
              ESTIMATION
          ================================================= */}

          <div className="selection-summary">

            <span>
              {selectedItems.length} Items
            </span>

            <span className="summary-dot">
              •
            </span>

            <span>
              Est. {formatEstimate(estimate.min)} to{" "}
              {formatEstimate(estimate.max)}
            </span>

          </div>

          {/* CONTINUE */}

          <button className="continue-button">

            Continue

            <span>
              →
            </span>

          </button>

        </footer>

      </div>
    </div>
  );
}

export default WhatYouNeed;
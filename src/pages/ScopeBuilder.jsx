import { useState } from "react";
import Industry from "../components/Industry";
import WhatToBuild from "../components/WhatToBuild";
import WhatBrings from "../components/WhatBrings";
import WhatYouNeed from "../components/WhatYouNeed";
import TellUs from "../components/TellUs";

const ScopeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div
      className="
        fixed
        left-0
        top-0
        z-[9999]
        h-[100vh]
        w-[100vw]
        overflow-hidden
        bg-black/40
        px-4
        py-4
        backdrop-blur-sm
      "
    >
      {/* =====================================
          POPUP CARD
      ====================================== */}

      <div
        className="
          relative
          mx-auto
          h-[500px]
          w-[1000px]
          max-w-full
          overflow-hidden
          rounded-[1rem]
          bg-white
          translate-y-20
          shadow-[0_30px_100px_rgba(0,0,0,0.3)]
        "
      >
        {/* =====================================
            STEP 1 — INDUSTRY
        ====================================== */}

        {currentStep === 1 && (
          <Industry
            onContinue={() => setCurrentStep(2)}
          />
        )}

        {/* =====================================
            STEP 2 — WHAT TO BUILD
        ====================================== */}

        {currentStep === 2 && (
          <WhatToBuild
            onBack={() => setCurrentStep(1)}
            onContinue={() => setCurrentStep(3)}
          />
        )}

        {/* =====================================
            STEP 3 — WHAT BRINGS
        ====================================== */}

        {currentStep === 3 && (
          <WhatBrings
            onBack={() => setCurrentStep(2)}
            onContinue={() => setCurrentStep(4)}
          />
        )}

        {/* =====================================
            STEP 4 — WHAT YOU NEED
        ====================================== */}

        {currentStep === 4 && (
          <WhatYouNeed
            onBack={() => setCurrentStep(3)}
            onContinue={() => setCurrentStep(5)}
          />
        )}

        {/* =====================================
            STEP 5 — TELL US
        ====================================== */}

        {currentStep === 5 && (
          <TellUs
            onBack={() => setCurrentStep(4)}
            onContinue={() => {
              console.log("Scope Builder completed");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ScopeBuilder;
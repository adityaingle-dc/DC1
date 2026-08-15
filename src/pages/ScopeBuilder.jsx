import { useState } from "react";
import Industry from "../components/Industry";
import WhatToBuild from "../components/WhatToBuild";
import WhatBrings from "../components/WhatBrings";
import WhatYouNeed from "../components/WhatYouNeed";

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
        {currentStep === 1 && (
          <Industry
            onContinue={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <WhatToBuild
            onBack={() => setCurrentStep(1)}
            onContinue={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 3 && (
          <WhatBrings
            onBack={() => setCurrentStep(2)}
            onContinue={() => setCurrentStep(4)}
          />
        )}
      </div>

     
    </div>
  );
};

export default ScopeBuilder;
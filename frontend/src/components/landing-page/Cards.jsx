const LandingFeatureCard = ({
  image,
  heading,
  description,
  tags = [],
}) => {
  return (
    <div
      className="
        h-[515px]
        w-[630px]
        max-w-full
        overflow-hidden
        rounded-2xl
        bg-[#f7f7f5]
        p-2
      "
    >

      {/* =====================================
          IMAGE — 614 × 334
      ====================================== */}

      <div
        className="
          h-[334px]
          w-full
          overflow-hidden
          rounded-xl
        "
      >
        <img
          src={image}
          alt={heading}
          className="
            h-full
            w-full
            object-cover
          "
        />
      </div>


      {/* =====================================
          TEXT — 614 × 164
      ====================================== */}

      <div
        className="
          flex
          h-[164px]
          w-full
          flex-col
          justify-center
          px-4
        "
      >

        {/* Heading */}

        <h3
          className="
            font-['DM_Sans']
            text-xl
            font-semibold
            leading-tight
            tracking-tight
            text-black
            sm:text-2xl
          "
        >
          {heading}
        </h3>


        {/* Paragraph */}

        <p
          className="
            mt-2
            max-w-[560px]
            font-['DM_Sans']
            text-sm
            leading-5
            text-black/50
          "
        >
          {description}
        </p>


        {/* =====================================
            TEXT PILLS
        ====================================== */}

        {tags.length > 0 && (
          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-2
            "
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  bg-black/5
                  px-3
                  py-1.5
                  font-['DM_Sans']
                  text-[10px]
                  font-medium
                  leading-none
                  text-black/60
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

export default LandingFeatureCard;
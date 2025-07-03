import React from "react";

function UnderHero() {
  return (
    <section className="relative py-12">
      {/* White fade overlay */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent z-10" />

      {/* Content */}
      <p className="text-[14px] font-medium max-w-2xl mx-auto text-center relative z-20">
        At Accolades Integrated, we don’t just make videos — we create
        business-driven visual stories. Whether it’s a corporate film or an
        animated explainer, each frame is designed to resonate with your
        audience and support your brand’s growth.
      </p>
    </section>
  );
}

export default UnderHero;

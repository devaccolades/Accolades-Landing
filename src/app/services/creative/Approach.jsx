import React from "react";
import icon1 from "../../../../public/creative/research (2) 1.svg";
import icon2 from "../../../../public/creative/concept 1.svg";
import icon3 from "../../../../public/creative/graphic-design 1.svg";
import icon4 from "../../../../public/creative/picture 1.svg";
import Image from "next/image";

const steps = [
  {
    title: "Discovery & Briefing",
    description:
      "We kick things off with workshops, competitor scans, and mood-board sessions to clarify your goals and audience.",
    icon: icon1,
  },
  {
    title: "Strategy & Concept Development",
    description:
      "Concept decks map visual territory, tone, and messaging directions before design begins.",
    icon: icon2,
  },
  {
    title: "Design & Storyboarding",
    description:
      "Styleframes, color ways, and frame-by-frame boards bring concepts to life and lock in the look.",
    icon: icon3,
  },
  {
    title: "Execution",
    description:
      "Designers, animators, and videographers build, animate, shoot, and edit the approved concept.",
    icon: icon4,
  },
];

const Approach = () => {
  return (
    <section className="containers py-10">
      <h3 className="font-mont font-extrabold text-[24px] md:text-[32px] xl:text-[40px] text-[#3FB4BA]">
        Our Creative Approach
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  pt-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4"
          >
            <Image
              src={step.icon}
              alt={step.title}
              width={100}
              height={100}
              className="min-w-[90px]"
            />
            <div>
              <h4 className="text-[#007A8B] font-mont font-semibold leading-[110%] mb-1">
                {step.title}
              </h4>
              <p className="text-gray-700 font-mont text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;

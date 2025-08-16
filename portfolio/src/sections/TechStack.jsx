import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons, techStackImgs } from "../utils/constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const TechStack = () => {
  const allIcons = [
    ...techStackIcons.map((icon) => ({ ...icon, type: "model" })),
    ...techStackImgs.map((icon) => ({ ...icon, type: "img" })),
  ];
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="The Skills I bring to the table"
          sub="My preferred Tech Stack"
        />
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center gap-6">
            {allIcons.map((icon) => (
              <div
                key={icon.name}
                className="border m-2 border-black-50 bg-black-100 tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                <div className="absolute left-0 bottom-[-100%] w-full h-full bg-[#181818] group-hover:bottom-0 transition-all duration-700" />
                <div className="flex justify-center items-center w-52 h-60 relative z-50;">
                  {icon.type === "model" ? (
                    <TechIcon model={icon} />
                  ) : (
                    <img src={icon.imgPath} alt={icon.name} />
                  )}
                </div>
                <div className="padding-x w-full">
                  <p className="text-lg 2xl:text-2xl pb-5 xl:pb-2 font-semibold text-white-50 text-center">
                    {icon.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

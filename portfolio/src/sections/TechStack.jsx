/* eslint-disable no-unused-vars */
import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons, techStackImgs } from "../utils/constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const TechStack = () => {
  const skills = [
    {
      name: "React",
      type: "model",
      imgPath: "/images/logos/react.png",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Redux",
      type: "model",
      imgPath: "/images/logos/Redux.png",
      modelPath: null,
    },
    { name: "NodeJS", type: "img", imgPath: "/images/logos/node.png" },
    { name: "MongoDB", type: "img", imgPath: "/images/logos/mongo.png" },
    {
      name: "Tailwind CSS",
      type: "img",
      imgPath: "/images/logos/tailwind.png",
    },
    { name: "DSA", type: "img", imgPath: "/images/logos/DSA.png" },
  ];

  const modelNames = ["React", "Redux"];
  // Combine icons and images for a single render loop
  // const allIcons = [
  //   ...techStackIcons.map((icon) => ({ ...icon, type: "model" })),
  //   ...techStackImgs.map((icon) => ({ ...icon, type: "img" })),
  // ];

  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
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

  //   return (
  //     <div id="skills" className="flex-center section-padding">
  //       <div className="w-full h-full md:px-10 px-5">
  //         <TitleHeader
  //           title="The Skills I bring to the table"
  //           sub="My preferred Tech Stack"
  //         />
  //         <div className="flex flex-col">
  //           <div className="flex flex-wrap justify-center gap-6">
  //             {allIcons.map((icon) => (
  //               <div
  //                 key={icon.name}
  //                 className="border m-2 border-black-50 bg-black-100 tech-card overflow-hidden group xl:rounded-full rounded-lg"
  //               >
  //                 <div className="absolute left-0 bottom-[-100%] w-full h-full bg-[#181818] group-hover:bottom-0 transition-all duration-700" />
  //                 {/* 3D Model only on md+ for 'React' and 'Redux' */}
  //                 {modelNames.includes(icon.name) && icon.type === "model" ? (
  //                   <>
  //                     <div className="hidden md:flex justify-center items-center w-52 h-60 relative z-50">
  //                       <TechIcon model={icon} />
  //                     </div>
  //                     {/* fallback image for mobile */}
  //                     <div className="flex md:hidden justify-center items-center w-52 h-60 relative z-50">
  //                       <img src={icon.imgPath} alt={icon.name} />
  //                     </div>
  //                   </>
  //                 ) : (
  //                   // Always render image for all others/all sizes
  //                   <div className="flex justify-center items-center w-52 h-60 relative z-50">
  //                     <img src={icon.imgPath} alt={icon.name} />
  //                   </div>
  //                 )}
  //                 <div className="padding-x w-full">
  //                   <p className="text-lg 2xl:text-2xl pb-5 xl:pb-2 font-semibold text-white-50 text-center">
  //                     {icon.name}
  //                   </p>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="The Skills I bring to the table"
          sub="My preferred Tech Stack"
        />
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="border m-2 border-black-50 bg-black-100 tech-card overflow-hidden group xl:rounded-full rounded-lg"
              >
                <div className="absolute left-0 bottom-[-100%] w-full h-full bg-[#181818] group-hover:bottom-0 transition-all duration-700" />
                {/* 3D Model only on md+ for 'React' and 'Redux' */}
                {modelNames.includes(skill.name) && skill.type === "model" ? (
                  <>
                    <div className="hidden md:flex justify-center items-center w-52 h-60 relative z-50">
                      {skill.modelPath ? (
                        <TechIcon
                          model={{
                            name: skill.name,
                            modelPath: skill.modelPath,
                            scale: skill.scale,
                            rotation: skill.rotation,
                          }}
                        />
                      ) : (
                        <img src={skill.imgPath} alt={skill.name} />
                      )}
                    </div>
                    {/* fallback image for mobile */}
                    <div className="flex md:hidden justify-center items-center w-52 h-60 relative z-50">
                      <img src={skill.imgPath} alt={skill.name} />
                    </div>
                  </>
                ) : (
                  // Always render image for all others/all sizes
                  <div className="flex justify-center items-center w-52 h-60 relative z-50">
                    <img src={skill.imgPath} alt={skill.name} />
                  </div>
                )}
                <div className="padding-x w-full">
                  <p className="text-base md:mb-2 2xl:text-xl pb-5 xl:pb-2 font-semibold text-white-50 text-center">
                    {skill.name}
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

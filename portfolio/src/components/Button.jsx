import React from "react";

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("ai");
        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} relative z-20 cursor-pointer`}
    >
      <div className="relative z-20 cursor-pointer">
        <div className="group px-4 py-4 rounded-lg bg-black-200 flex justify-center items-center relative cursor-pointer overflow-hidden hover:bg-white-50">
          <p
            className="uppercase md:text-lg text-slate-300 transition-all duration-500
        group-hover:text-black-50 group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5 mr-4"
          >
            {text}
          </p>
          <div
            className="group-hover:bg-white-200 size-10 rounded-full absolute right-10 top-1/2 
        -translate-y-1/2 flex justify-center items-center overflow-hidden "
          >
            <img
              src="/images/down-arrow.svg"
              alt="arrow-down"
              className="w-8 hidden group-hover:block"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default Button;

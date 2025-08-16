import React from "react";

const QueryButton = ({ query, onClick }) => {
  return (
    <div className="animate-bounce-slow text-white  mx-2 bg-transparentv p-2 text-center hover:cursor-pointer w-full   rounded-full border-none shadow-xl bg-slate-950">
      <button onClick={onClick}>{query}</button>
    </div>
  );
};

export default QueryButton;

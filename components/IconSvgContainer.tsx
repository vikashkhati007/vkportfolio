import React from "react";

const IconSvgContainer = ({ icon }: any) => {
  return (
    <div className="svgcontainer border w-[3.5rem] h-[3.5rem] flex justify-center items-center cursor-pointer p-2 rounded-md bg-gradient-to-tr from-slate-200 to-white">
      {icon}
    </div>
  );
};

export default IconSvgContainer;

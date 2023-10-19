import CardBox from "@/components/project/Card";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
const page = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-around items-center gap-5">
        <ScrollArea className="w-[100%] md:w-[80%] px-5 m-auto h-[70%] rounded-md">
          <div className="titlecontainer flex flex-col items-center justify-center ">
          <p className="font-bold text-2xl">Projects</p>
          </div>
          <div className="cardboxcontainer flex flex-wrap justify-around items-center my-5 gap-5">
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
            <CardBox />
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default page;

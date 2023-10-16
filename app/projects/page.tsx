import CardBox from "@/components/project/Card";
import React from "react";
import { Separator } from "@/components/ui/separator";
const page = () => {
  return (
    <div>
    <div className="flex flex-wrap justify-around gap-10 items-center p-10">
      <CardBox />
      <CardBox />
      <CardBox />
    </div>
    </div>

   
  );
};

export default page;

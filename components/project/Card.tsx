import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
const CardBox = () => {
  return (
    <Card className="max-w-[280px] hover:scale-105 transition-transform">
      <CardHeader>
        <Image
          src={"/web.png"}
          width={500}
          height={500}
          alt="website"
          className="rounded-md cursor-pointer"
        />
      </CardHeader>
      <CardContent>
        <p className="font-bold">Summarize Articles with OPEN-AI GPT-4</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="flex gap-2">
          <GitHubLogoIcon />
          Github
        </Button>
        <Button>Visit Page</Button>
      </CardFooter>
    </Card>
  );
};

export default CardBox;

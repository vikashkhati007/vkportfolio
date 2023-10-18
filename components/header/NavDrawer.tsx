import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import ContactForm from "../ContactForm";

const NavDrawer = ({ icon }: any) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>{icon}</SheetTrigger>
        <SheetContent className="w-[10rem]">
          <SheetHeader>
            <SheetTitle className="my-5 mb-5">Menu</SheetTitle>
            <SheetDescription className="flex flex-col gap-2">
              <Link href={"/"}>
                <SheetClose>
                  <Button
                    variant="outline"
                    className="bg-background text-primary"
                  >
                    Home
                  </Button>
                </SheetClose>
              </Link>
              <Link href={"/about"}>
                <SheetClose>
                  <Button
                    variant="outline"
                    className="bg-background text-primary"
                  >
                    About
                  </Button>
                </SheetClose>
              </Link>
              <Link href={"/projects"}>
                <SheetClose>
                  <Button
                    variant="outline"
                    className="bg-background text-primary"
                  >
                    Project
                  </Button>
                </SheetClose>
              </Link>
              <div className="iconcontainer flex flex-col gap-5 absolute bottom-5">
              <ContactForm icon={"Contact"}/>
                <p >Social Media</p>
                <div className="iconcontainer flex gap-5 justify-center items-center">
                  <Link
                    href={"https://github.com/vikashkhati007"}
                    className="hover:scale-105 transition-transform"
                  >
                    <GitHubLogoIcon width={20} height={20} />
                  </Link>
                  <Link
                    href={"https://instagram.com/vikashkhati007"}
                    className="hover:scale-105 transition-transform"
                  >
                    <InstagramLogoIcon width={20} height={20} />
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/vikash-khati-564221265/"}
                    className="hover:scale-105 transition-transform"
                  >
                    <LinkedInLogoIcon width={20} height={20} />
                  </Link>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavDrawer;

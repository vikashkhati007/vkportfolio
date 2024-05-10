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
  HamburgerMenuIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const MobileNavbar = () => {
  return (
    <Sheet>
      <div className="menucontainer flex justify-center items-center gap-3">
        <SheetTrigger>
          <HamburgerMenuIcon width={20} height={20} />
        </SheetTrigger>
      </div>
      <SheetContent
        id="sheet"
        side={"top"}
        className="w-full rounded-none scroll-smooth"
      >
        <SheetHeader>
          <SheetTitle className="my-5 mb-5 text-center">Menu</SheetTitle>
          <SheetDescription className="flex flex-col gap-2 w-full justify-center items-center">
            <a href={"#intro"}>
              <SheetClose>
                <Button
                  id="sheet"
                  variant="outline"
                  className="bg-background text-primary w-72 md:w-96"
                >
                  Home
                </Button>
              </SheetClose>
            </a>
            <a href={"#about"}>
              <SheetClose>
                <Button
                  id="sheet"
                  variant="outline"
                  className="bg-background text-primary w-72 md:w-96"
                >
                  About
                </Button>
              </SheetClose>
            </a>
            <a href={"#projects"}>
              <SheetClose>
                <Button
                  id="sheet"
                  variant="outline"
                  className="bg-background text-primary w-72 md:w-96"
                >
                  Project
                </Button>
              </SheetClose>
            </a>
            <a href="#contact">
              <SheetClose>
                <Button
                  id="sheet"
                  variant="outline"
                  className="bg-background text-primary w-72 md:w-96"
                >
                  Contact
                </Button>
              </SheetClose>
            </a>
            <div className="footercontainer pt-5">
              <p className="pb-5">Social Medias</p>
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
  );
};

export default MobileNavbar;

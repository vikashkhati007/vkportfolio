import React from "react";
import { ModeToggle } from "../thememode/theme";
import Link from "next/link";
import ContactForm from "../ContactForm";
import { Button } from "@/components/ui/button";
import { HomeIcon, PersonIcon, FileIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
const Header = () => {
  return (
    <header>
      <nav className="absolute z-50 top-0 flex justify-between md:justify-around h-[70px] p-5 items-center w-full border-b ">
        <Link href={"/"}>
          <h1 className="font-bold text-2xl cursor-pointer">VK</h1>
        </Link>
        <ul className="flex justify-center items-center gap-4">
          <li className="border rounded-md p-3 cursor-pointer active:border-svg-icon md:hidden">
            <HamburgerMenuIcon />
          </li>
          <div className="hidden md:flex gap-4">
            <Link href={"/"}>
              <Button variant="outline"><HomeIcon/></Button>
            </Link>
            <Link href={"/projects"}>
              <Button variant="outline"><FileIcon/></Button>
            </Link>
            <Link href={"/about"}>
              <Button variant="outline"><PersonIcon/></Button>
            </Link>
            <p className="font-semibold hover:text-primary cursor-pointer hover:underline">
             <ContactForm/>
            </p>
          </div>
          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

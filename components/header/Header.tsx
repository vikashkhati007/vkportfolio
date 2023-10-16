import React from "react";
import { ModeToggle } from "../thememode/theme";
import Link from "next/link";
import HomeSvg from "../svg/HomeSvg";
import ContactForm from "../ContactForm";

const Header = () => {
  return (
    <header>
      <nav className="flex w-full md:w-[80%] m-auto p-5 px-10 justify-between items-center">
        <Link href={"/"}>
          <h1 className="font-bold text-2xl cursor-pointer">VK</h1>
        </Link>
        <ul className="flex justify-center items-center gap-4">
          <li className="border rounded-md p-1 cursor-pointer active:border-svg-icon md:hidden">
            <HomeSvg />
          </li>
          <div className="hidden md:flex gap-4">
            <Link href={"/"} >
              <p className="font-semibold hover:text-primary cursor-pointer hover:underline">
                Home
              </p>
            </Link>
            <Link href={"/projects"}>
              <p className="font-semibold hover:text-primary cursor-pointer hover:underline">
                Projects
              </p>
            </Link>
            <Link href={"/about"}>
              <p className="font-semibold hover:text-primary cursor-pointer hover:underline">
                About
              </p>
            </Link>
              <p className="font-semibold hover:text-primary cursor-pointer hover:underline">
                <ContactForm text={"Contact"}/>
              </p>
          </div>
          <ModeToggle />
        </ul>
      </nav>
    </header>
  );
};

export default Header;



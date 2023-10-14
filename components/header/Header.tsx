import React from "react";
import { ModeToggle } from "../thememode/theme";

const Header = () => {
  return (
    <header>
      <nav className="flex w-full justify-between p-5 border items-center lg:justify-around">
        <div className="logocontainer">
          <h1>Hello World</h1>
        </div>
        <ul>
          <li>
            <ModeToggle />
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

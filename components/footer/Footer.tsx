import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <footer className="w-full h-[60px] absolute z-50 bottom-0 flex items-center justify-center p-5 border-t bg-background">
      <div className="iconcontainer flex gap-5">
        <Link href={"https://github.com/vikashkhati007"} className="hover:scale-105 transition-transform">
          <GitHubLogoIcon width={20} height={20} />
        </Link>
        <Link href={"https://instagram.com/vikashkhati007"} className="hover:scale-105 transition-transform">
          <InstagramLogoIcon width={20} height={20} />
        </Link>
        <Link href={"https://www.linkedin.com/in/vikash-khati-564221265/"} className="hover:scale-105 transition-transform">
          <LinkedInLogoIcon width={20} height={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

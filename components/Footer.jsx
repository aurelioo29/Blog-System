import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-[#9d1520] py-5 items-center">
      <Image src={assets.logo_light} alt="" width={120}></Image>
      <p className="text-white text-lg">
        Copyright &copy; {currentYear} by{" "}
        <span className="font-bold">Aurelio</span> - All rights reserved.
      </p>
      <div className="flex gap-5">
        <Link target="_blank" href="https://github.com/aurelioo29">
          <Image
            src={assets.github}
            alt=""
            width={40}
            className="color-white"
          />
        </Link>

        <Link target="_blank" href="https://instagram.com/aurelio29_">
          <Image src={assets.instagram} alt="" width={40} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

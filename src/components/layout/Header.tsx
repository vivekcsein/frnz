import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../ui/navbar/Navbar";
import "../../styles/layout/Header.scss";
import SVG_FRNZ from "../ui/svgImg/SVG_FRNZ";

type HeaderProps = {
  HeaderData: HeaderData;
  productsData: productsData;
  gameData: gameData;
};

const Header = ({
  HeaderData: { header_Logo, navbar },
  productsData,
  gameData,
}: HeaderProps) => {
  return (
    <>
      <header className="Header sticky">
        <Link className="Header_logo flex_center" href={header_Logo.href}>
          <SVG_FRNZ />
          {/* <Image
            src={"/FRNZ-logo-white-online.svg"}
            width={250}
            height={5}
            alt={header_Logo.alt}
            className="w-[200px] h-auto md:w-[250px] Animate_logo"
          /> */}
        </Link>
        <nav className="Navbar">
          <Navbar
            navbar={navbar}
            productsData={productsData}
            gameData={gameData}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;

"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { fav_colors } from "../../../libs/contants";

const Animate_Color = () => {
  const colors = Object.values(fav_colors);
  const [primaryColor, setPrimaryColor] = useState(colors[0]);

  useEffect(() => {
    const changeColor = () => {
      let randomNum = Math.floor(Math.random() * fav_colors.length);
      setPrimaryColor(fav_colors[randomNum]);
    };

    const intervalId = setInterval(changeColor, 5000); // Changes color every 5 seconds
    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  useEffect(() => {
    let randomNum = Math.floor(Math.random() * fav_colors.length + 1);
    gsap.to("html", {
      "--primary": `${fav_colors[randomNum]}`,
      duration: 5,
      ease: "bounce",
      yoyo: true,
      repeat: -1,
    });
  }, [primaryColor]);
  return <></>;
};

export default Animate_Color;

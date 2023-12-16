"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { fav_colors } from "../../../libs/contants";

const Animate_Color = () => {
  let randomNum = Math.floor(Math.random() * fav_colors.length + 1);
  useEffect(() => {
    gsap.to("html", {
      "--primary": `${fav_colors[randomNum]}`,
      duration: 5,
      ease: "bounce",

      yoyo: true,
      repeat: -1,
    });
  }, []);
  return <></>;
};

export default Animate_Color;

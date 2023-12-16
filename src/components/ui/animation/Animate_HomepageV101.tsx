"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Animate_HomepageV101 = () => {
  useEffect(() => {
    const item = document.querySelector("#anim_homepagev101") as HTMLElement;
    const Item_child = Array.from(item.children) as HTMLElement[];

    Item_child.map((elem: HTMLElement, index: number) => {
      if (index == 0) {
        gsap.fromTo(
          elem,
          { x: "-200%", visibility: "hidden", scale: 1, color: "red" },
          {
            x: "0%",
            visibility: "visible",
            color: "var(--textLight)",
            duration: 1,
            ease: "bounce.out",
          }
        );
      } else {
        elem.style.visibility = "hidden";
        let ran = Math.floor(Math.random() * 200);
        if (Math.floor(Math.random() * 2) < 1) {
          ran = ran * -1;
        }
        gsap.fromTo(
          elem,
          { x: `${ran}%`, y: `${ran}%`, visibility: "hidden", scale: 1 },
          { x: 0, y: 0, visibility: "visible", duration: 2, ease: "bounce.out" }
        );
      }
    });

    return () => {};
  }, []);

  return <></>;
};

export default Animate_HomepageV101;

"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

const Animate_Loginform = () => {
  useEffect(() => {
    const loginForms = document.querySelector("#loginForms");
    gsap.fromTo(
      loginForms,
      { scale: 0.1 },
      { scale: 1, duration: 1, ease: "bounce.out" }
    );

    return () => {
      gsap.to(loginForms, { y: 0, duration: 0 });
    };
  }, []);

  return <></>;
};

export default Animate_Loginform;

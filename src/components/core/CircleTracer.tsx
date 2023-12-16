"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";

interface RefObject {
  moveTo(x: number, y: number): void;
}

const CircleTracer = forwardRef(
  (
    { size, delay }: { size: string; delay: number },
    ref: React.Ref<RefObject>
  ) => {
    const el = useRef<any>(null);
    useImperativeHandle(ref, () => {
      if (ref) {
        return {
          moveTo(x: number, y: number) {
            gsap.to(el?.current, { x, y, delay });
          },
        };
      }
      [delay];
    });

    return <div className={`circle ${size} gradient-blue`} ref={el}></div>;
  }
);

export default CircleTracer;

// const CircleTracer = forwardRef(
//   ({ size, delay }: { size: string; delay: number }, ref) => {
//     const el = useRef<any>(null);
//     useImperativeHandle(ref, () => {
//       return {
//         moveTo(x: number, y: number) {
//           gsap.to(el?.current, { x, y, delay });
//         },
//       }[delay];
//     });

//     return <div className={`circle ${size} gradient-blue`} ref={el}></div>;
//   }
// );

// const CircleTracer = forwardRef(
//   ({ size, delay }: { size: string; delay: number }, ref) => {
//     const el = useRef();
//     useImperativeHandle(ref, () => {
//       return {
//         moveTo(x: number, y: number) {
//           gsap.to(el?.current, { x, y, delay });
//         },
//       }[delay];
//     });

//     return <div className={`circle ${size} gradient-blue`} ref={el}></div>;
//   }
// );

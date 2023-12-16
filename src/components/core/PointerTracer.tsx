"use client";
import React, { useEffect, useRef } from "react";
import CircleTracer from "./CircleTracer";

interface RefArray extends Array<React.RefObject<typeof CircleTracer> | null> {}

function PointerTracer() {
  const circleRefs = useRef<RefArray>([]);

  const addCircleRef = (ref: React.RefObject<typeof CircleTracer>) => {
    circleRefs.current.push(ref);
  };

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    circleRefs.current?.forEach((ref) =>
      ref?.current?.moveTo(innerWidth / 2, innerHeight / 2)
    );

    const onMove = ({
      clientX,
      clientY,
    }: {
      clientX: number;
      clientY: number;
    }) => {
      circleRefs?.current?.forEach((ref) =>
        ref.current?.moveTo(clientX, clientY)
      );
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="">
      <CircleTracer size="sm" ref={addCircleRef} delay={0} />
      <CircleTracer size="md" ref={addCircleRef} delay={0.1} />
      <CircleTracer size="lg" ref={addCircleRef} delay={0.2} />
    </div>
  );
}

export default PointerTracer;

// "use client";
// import React, { useEffect, useRef } from "react";
// import CircleTracer from "../ui/others/CircleTracer";

// interface RefArray extends Array<HTMLDivElement | null> {}

// const PointerTracer = () => {
//   const circleRefs = useRef<RefArray>(null);

//   const addCircleRef = (reff: HTMLDivElement) => {
//     if (reff) {
//       circleRefs?.current?.push(reff);
//     }
//   };

//   useEffect(() => {
//     const { innerWidth, innerHeight } = window;
//     circleRefs.current?.forEach((ref) =>
//       ref?.moveTo(innerWidth / 2, innerHeight / 2)
//     );

//     const onMove = ({
//       clientX,
//       clientY,
//     }: {
//       clientX: number;
//       clientY: number;
//     }) => {
//       circleRefs?.current?.forEach((ref) => ref.moveTo(clientX, clientY));
//     };

//     window.addEventListener("pointermove", onMove);

//     return () => window.removeEventListener("pointermove", onMove);
//   }, []);

//   return (
//     <div className="">
//       <CircleTracer size="sm" ref={addCircleRef} delay={0} />
//       <CircleTracer size="md" ref={addCircleRef} delay={0.1} />
//       <CircleTracer size="lg" ref={addCircleRef} delay={0.2} />
//     </div>
//   );
// };

// export default PointerTracer;

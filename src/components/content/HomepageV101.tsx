import React from "react";
import Animate_HomepageV101 from "../ui/animation/Animate_HomepageV101";

const HomepageV101 = () => {
  return (
    <>
      <div className="flex flex-col items-center p-16 pt-40 textDark">
        <div className="scale-125 md:scale-150" id="anim_homepagev101">
          <h1 className="textDark text-3xl invisible">
            Hello friends welcome to <span>Frenzz.IN</span>
          </h1>
          <h3 className="textDark invisible">
            Where Learning creates experiences
          </h3>
          <h3 className="textDark invisible">
            Experinces creates opportunities
          </h3>
          <h3 className="textDark invisible">opportunities creates work</h3>
          <h3 className="textDark invisible">But,</h3>
          <h6 className="textDark invisible">
            We forget about Friends in some between work
          </h6>
          <h6 className="textDark invisible">Dont worry</h6>
          <h6 className="textDark invisible">
            We create everything so that you will enjoy{" "}
          </h6>
          <h6 className="textDark invisible">
            {" "}
            work with benefits of friendships at interesting cost
          </h6>
        </div>
      </div>
      <Animate_HomepageV101 />
    </>
  );
};

export default HomepageV101;

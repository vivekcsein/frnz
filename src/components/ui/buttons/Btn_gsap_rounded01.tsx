"use client";
import React from "react";
import { gsap } from "gsap";
import Image from "next/image";
const Btn_gsap_rounded01 = () => {
  return (
    <div>
      <button
        className="ui-button"
        data-block="ui-button"
        style={{ opacity: "1", visibility: "inherit" }}
      >
        <div className="ui-button__background">
          <div
            id="ui-button-gradient"
            className="ui-button__gradient"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(-440px, 0px)",
              opacity: "1",
            }}
          >
            <picture>
              <source
                type="image/webp"
                srcSet="/tf-assets/mNYoexaeMl-144-9336ba13.webp 144w"
                sizes="100vw"
              >
                <source
                  type="image/png"
                  srcSet="/tf-assets/mNYoexaeMl-144-58097454.png 144w"
                  sizes="100vw"
                >
                  <Image
                    alt={"hello"}
                    width={144}
                    height={214}
                    decoding={"async"}
                    loading={"lazy"}
                    src={
                      "data:image/jpeg;base64,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"
                    }
                  ></Image>
                </source>
              </source>
            </picture>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Btn_gsap_rounded01;

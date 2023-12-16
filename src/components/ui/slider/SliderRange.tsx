import React from "react";

const SliderRange = () => {
  return (
    <div>
      <div
        id="ui-range-track"
        class="ui-range__track"
        style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"
      >
        <div class="ui-range__progress">
          <div class="ui-range__progress-main">
            <div
              id="ui-range-progress"
              class="ui-range__progress-gradient"
              style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"
            ></div>
          </div>
        </div>

        <div
          id="ui-range-thumb"
          class="ui-range__thumb"
          aria-hidden="true"
          style="translate: none; rotate: none; scale: none; touch-action: pan-y; cursor: grab; transform: translate3d(0px, 0px, 0px); user-select: none;"
        >
          <div
            id="ui-range-marker"
            class="ui-range__marker"
            style="touch-action: pan-y; translate: none; rotate: none; scale: none; transform: translate(-50%, 0%);"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="45"
              fill="none"
              viewBox="0 0 38 45"
              style="touch-action: pan-y;"
            >
              <path
                fill="#FEC5FB"
                d="M32.435 5.565c7.42 7.42 7.42 19.45 0 26.87L21.831 43.038a4.004 4.004 0 0 1-5.662 0L5.565 32.435c-7.42-7.42-7.42-19.45 0-26.87 7.42-7.42 19.45-7.42 26.87 0Z"
                style="touch-action: pan-y;"
              ></path>
              <path
                fill="#E1FAFF"
                d="M34.323 19.003c0 8.462-6.86 15.322-15.323 15.322-8.462 0-15.322-6.86-15.322-15.322C3.678 10.54 10.538 3.68 19 3.68c8.463 0 15.323 6.86 15.323 15.323Z"
                style="touch-action: pan-y;"
              ></path>
            </svg>

            <div
              id="ui-range-value"
              class="ui-range__value"
              style="touch-action: pan-y;"
            >
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderRange;

import React from "react";
import styles from "./Logo.module.css";
// import logo from "../../assets/images/flagbanner.svg";

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <svg
        width="400"
        height="101"
        viewBox="0 0 400 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id={styles.flagbanner}>
          <path
            id="flagline"
            d="M14.093 9.36816C161.2 79.4698 242.47 87.3634 384.559 9.36816"
            stroke="black"
            strokeWidth="3"
          />
          <g id="flag11">
            <g filter="url(#filter0_i)">
              <path
                d="M384.026 40.9367L355.473 24.3297L383.141 9.22206L384.026 40.9367Z"
                fill="#F8781B"
              />
            </g>
            <path
              d="M384.026 40.9367L355.473 24.3297L383.141 9.22206L384.026 40.9367Z"
              stroke="black"
              strokeWidth="3"
            />
          </g>
          <path
            id={styles.flag10}
            d="M351.172 59.3091L353.416 60.8502L353.556 58.2293L355.243 26.5438L355.376 24.0329L353.043 25.09L324.233 38.1446L321.899 39.2018L324.049 40.6782L351.172 59.3091Z"
            fill="#1386C7"
            stroke="black"
            strokeWidth="3"
          />
          <path
            id="flag9"
            d="M292.187 52.2286L323.125 40.0383L319.861 70.1192L292.187 52.2286Z"
            fill="#593B3B"
            stroke="black"
            strokeWidth="3"
          />
          <path
            id="flag8"
            d="M284.001 81.7761L260.328 59.3213L290.956 50.7411L284.001 81.7761Z"
            fill="#39AC7C"
            stroke="black"
            strokeWidth="3"
          />
          <path
            id="flag7"
            d="M248.134 89.6398L227.91 64.3436L259.486 59.7898L248.134 89.6398Z"
            fill="#FF559D"
            stroke="black"
            strokeWidth="3"
          />
          <path
            id="flag6"
            d="M204.125 95.1738L205.391 97.4656L206.728 95.211L223.141 67.551L224.462 65.3243L221.875 65.2873L189.938 64.8313L187.351 64.7944L188.601 67.0578L204.125 95.1738Z"
            fill="#00F1D4"
            stroke="black"
            strokeWidth="3"
          />
          <path
            id="flag5"
            d="M166.095 90.174C164.328 80.0025 162.287 73.816 153.931 60.6121L185.621 64.3909C177.329 71.8887 173.098 77.7013 166.095 90.174Z"
            fill="#46D03A"
            stroke="black"
            strokeWidth="3"
          />
          <path
            id="flag4"
            d="M129.581 83.0828C129.748 72.6712 127.903 65.9893 120.879 52.4453L151.949 59.4593C143.447 64.994 138.498 70.9712 129.581 83.0828Z"
            fill="#C13AD7"
            stroke="black"
            strokeWidth="3"
          />
          <path
            id="flag3"
            d="M92.8262 72.6956L86.6817 41.5078L117.077 50.8001L92.8262 72.6956Z"
            fill="#FBFF3D"
            stroke="black"
            strokeWidth="3"
          />
          <path
            id="flag2"
            d="M55.8517 59.5948L51.7245 28.1106L81.4654 39.1379L55.8517 59.5948Z"
            fill="#1D3CDE"
            stroke="black"
            strokeWidth="3"
          />
          <path
            id="flag1"
            d="M16.2963 44.6026L15.9719 12.8783L44.1979 27.0315L16.2963 44.6026Z"
            fill="#CF2222"
            stroke="black"
            strokeWidth="3"
          />
        </g>
        <defs>
          <filter
            id="filter0_i"
            x="352.452"
            y="6.71777"
            width="35.1771"
            height="38.8511"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="3" dy="4" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.229167 0 0 0 0 0.0261632 0 0 0 0 0.0261632 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

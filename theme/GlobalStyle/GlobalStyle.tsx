"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Fonts */
  @font-face {
      font-family: "primary";
      src: url('/assets/fonts/Poppins-Regular.ttf') format("truetype");
      font-weight: 400;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'latoBold';
      src: url('/assets/fonts/Lato-Bold.ttf') format('truetype');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'primarySemiBold';
      src: url('/assets/fonts/Poppins-SemiBold.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'primaryMedium';
      src: url('/assets/fonts/Poppins-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'primaryMedium';
      src: url('/assets/fonts/Instink.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
  }

  /* Global Resets */
  * {
      font-family: "primary";
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  body {
      margin: 0;
      overflow-x: hidden;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
      display: none;
  }

  -ms-overflow-style: none;  
  scrollbar-width: none;  

  /* Swiper Pagination Styles */
  .swiper-pagination-clickable .swiper-pagination-bullet {
      background: #385E72 !important;
  }

  .slider .swiper-pagination-clickable .swiper-pagination-bullet-active {
      width: 30px !important;
      height: 8px;
      border-radius: 10px 10px;
      transition: all ease-in-out 0.5s;
  }

  .swiper-pagination {
      position: relative !important;
      margin-top: 40px !important;
  }
`;

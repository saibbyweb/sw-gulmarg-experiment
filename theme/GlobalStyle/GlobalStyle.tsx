"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
    * {
    font-family: "primary";
    }

    body {
        margin: 0;
    }

    * {
    box-sizing: border-box;
    }

 
 ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;  
  scrollbar-width: none;  
`;

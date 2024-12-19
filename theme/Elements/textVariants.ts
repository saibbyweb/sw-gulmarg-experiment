import { BASE_FONTS } from ".";

export const BASE_TEXT_VARIANTS = {
  default: {
    fontSize: 16,
    fontFamily: BASE_FONTS.primary,
    display: "block",
    "@media screen and (max-width: 768px)": {
      fontSize: 14,
    },
  },
  H1: {
    fontSize: 62,
    fontFamily: BASE_FONTS.latoBold,
    display: "block",
    "@media screen and (max-width: 768px)": {
      fontSize: 32,
    },
  },
  H2: {
    fontSize: 56,
    fontFamily: BASE_FONTS.latoBold,
    display: "block",
    "@media screen and (max-width: 768px)": {
      fontSize: 24,
    },
  },
  body: {
    fontSize: 19,
    fontFamily: BASE_FONTS.primary,
    display: "block",
    "@media screen and (max-width: 768px)": {
      fontSize: 16,
    },
  },
  small: {
    fontSize: 14,
    fontFamily: BASE_FONTS.primary,
    display: "block",
    "@media screen and (max-width: 768px)": {
      fontSize: 12,
    },
  },
  quote: {
    fontSize: 40,
    fontFamily: BASE_FONTS.instink,
    display: "block",
    "@media screen and (max-width: 768px)": {
      fontSize: 30,
    },
  },
};

export type TextVariantsType =  keyof typeof BASE_TEXT_VARIANTS

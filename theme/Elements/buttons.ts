import { BASE_COLORS, BASE_BORDER_RADII, BASE_SPACING } from ".";

export const BASE_BUTTON_VARIANTS = {
  primary: {
    backgroundColor: BASE_COLORS.primary,
    color: BASE_COLORS.white,
    border: "none",
    borderRadius: BASE_BORDER_RADII.xs,
    paddingLeft: BASE_SPACING["2xl"],
    paddingRight: BASE_SPACING["2xl"],
    paddingTop: BASE_SPACING.md,
    paddingBottom: BASE_SPACING.lg,
    fontSize: BASE_SPACING["2xl"],
  },
};
export type AppButtonVariants = keyof typeof BASE_BUTTON_VARIANTS;

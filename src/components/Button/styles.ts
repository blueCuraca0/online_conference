import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  button: {
    py: 4,
    px: 6,
    borderRadius: 2,
    bgcolor: mainPalette.black,
    "&:hover": {
      bgcolor: mainPalette.primaryLight,
    },
    // "&&&.Mui-disabled": {
    //   bgcolor: "transparent",
    // },
  },
  buttonPrimary: {
    bgcolor: mainPalette.primary,
    "&:hover": { bgcolor: "#4A5E38" },
    ".MuiTypography-root": { color: mainPalette.white },
  },
  buttonSecondary: {
    bgcolor: mainPalette.primaryLight,
    ".MuiTypography-root": { color: mainPalette.white },
  },
  buttonOutlined: {
    bgcolor: "transparent",
    border: "1.5px solid rgba(0,0,0,0.12)",
    "&:hover": { bgcolor: "rgba(0,0,0,0.03)" },
    ".MuiTypography-root": { color: accentPalette.text },
  },
  buttonOutlinedOnDark: {
    bgcolor: "transparent",
    border: "1.5px solid rgba(255,255,255,0.35)",
    "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
    ".MuiTypography-root": { color: mainPalette.white },
    color: mainPalette.white,
  },
  buttonWhite: {
    bgcolor: mainPalette.white,
    "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
    ".MuiTypography-root": { color: mainPalette.primary },
  },
  buttonGhost: {
    bgcolor: "transparent",
    "&:hover": { bgcolor: "rgba(0,0,0,0.04)" },
    ".MuiTypography-root": { color: mainPalette.primary },
    color: mainPalette.primary,
  },
  progress: {
    marginLeft: 2,
  },
};

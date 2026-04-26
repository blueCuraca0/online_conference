import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  button: {
    py: 4,
    px: 6,
    borderRadius: 2,
    bgcolor: basicTheme.palette.mainPalette.black,
    "&:hover": {
      bgcolor: basicTheme.palette.mainPalette.primaryLight,
    },
    // "&&&.Mui-disabled": {
    //   bgcolor: "transparent",
    // },
  },
  buttonPrimary: {
    bgcolor: basicTheme.palette.mainPalette.primary,
    ".MuiTypography-root": {
      color: basicTheme.palette.mainPalette.white,
    },
  },
  buttonSecondary: {
    bgcolor: basicTheme.palette.mainPalette.primaryLight,
    ".MuiTypography-root": {
      color: basicTheme.palette.mainPalette.white,
    },
  },
};

import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  button: {
    py: 2,
    px: 3,
    borderRadius: 2,
    bgcolor: basicTheme.palette.mainPalette.black,
    "&:hover": {
      bgcolor: basicTheme.palette.mainPalette.primaryDark,
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

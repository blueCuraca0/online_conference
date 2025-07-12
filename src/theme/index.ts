import { createTheme } from "@mui/material";

const RockStarBoldFontFamily = "'RockStarBold', Arial, serif";
const RockStarMediumFontFamily = "'RockStarMedium', Arial, serif";
const ProbaProFontFamily = "'Proba Pro', Arial, serif";

export const basicTheme = createTheme({
  palette: {
    background: {
      default: "transparent",
    },
    systemPalette: {
      red: "#E84F4F",
      lightRed: "#F1D3D5",
    },
    mainPalette: {
      white: "#FFF",
      black: "#000",
      primary: "#FFD261",
      primaryLight: "#FFE9B0",
      primaryDark: "#FFB600",
    },
    accentPalette: {
      green1: "#C4ED83",
      green2: "#27E28D",
      blue2: "#236EE5",
      blue3: "#2825B7",
      blue4: "#0F1528",
      yellow1: "#F2AB16",
    },
    gradientsPalette: {
      gradient1: "linear-gradient(90deg, #C4ED83 0%, #27E28D 100%)",
      gradient1Reverse: "linear-gradient(90deg, #27E28D 0%, #C4ED83 100%)",
      gradient2: "linear-gradient(90deg, #2FC3EA 0%, #236EE5 100%)",
      gradient3: "linear-gradient(90deg, #D643A9 0%, #431984 100%)",
      gradient4: "linear-gradient(90deg, #2825B7 0%, #0F1528 100%)",
      gradient5: "linear-gradient(90deg, #0F1528 0%, #431984 100%)",
      aiGradient: "linear-gradient(103deg, #2FC3EA 0%, #D643A9 100%)",
      redGradient: "linear-gradient(90deg, #EA5151 0%, #9B3636 100%)",
      redGradientReverse: "linear-gradient(90deg,  #9B3636 0%, #EA5151 100%)",
      yellowGradient: "linear-gradient(270deg, #F2AB16 0.03%, #F0CD82 99.96%)",
      yellowGradientReverse:
        "linear-gradient(270deg, #F0CD82  0.03%, #F2AB16 99.96%)",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 744,
      laptop: 1240,
      desktop: 1440,
      large: 1920,
    },
  },
  typography: {
    fontFamily: [
      ProbaProFontFamily,
      RockStarBoldFontFamily,
      RockStarMediumFontFamily,
    ].join(","),
    h1: {
      fontFamily: RockStarBoldFontFamily,
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "100%",
    },
    h2: {
      fontFamily: RockStarBoldFontFamily,
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "normal",
    },
    h3: {
      fontFamily: RockStarBoldFontFamily,
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "normal",
    },
    h4: {
      fontFamily: RockStarMediumFontFamily,
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "normal",
    },
    h5: {
      fontFamily: ProbaProFontFamily,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "normal",
    },
    h6: {
      fontFamily: RockStarBoldFontFamily,
      fontWeight: 700,
      fontSize: "45px",
      lineHeight: "100%",
    },
    h5Secondary: {
      fontFamily: RockStarBoldFontFamily,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "normal",
    },
    buttonText: {
      fontFamily: RockStarMediumFontFamily,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "normal",
    },
    buttonTextBold: {
      fontFamily: RockStarBoldFontFamily,
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "normal",
    },
    buttonTextSmall: {
      fontFamily: RockStarMediumFontFamily,
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "normal",
    },
    buttonTextSmallSecondary: {
      fontFamily: ProbaProFontFamily,
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "normal",
    },
    bodyText: {
      fontFamily: ProbaProFontFamily,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "130%",
    },
    inputFields: {
      fontFamily: ProbaProFontFamily,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "normal",
    },
    caption: {
      fontFamily: ProbaProFontFamily,
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "normal",
    },
  },
  spacing: 4,
});

export const theme = createTheme(
  {
    components: {
      MuiTypography: {
        defaultProps: {
          variant: "bodyText",
          color: "#000",
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            subtitle1: "h2",
            subtitle2: "h2",
            buttonText: "p",
            buttonTextBold: "p",
            buttonTextSmall: "p",
            buttonTextSmallSecondary: "p",
            bodyText: "p",
            inputFields: "p",
            caption: "p",
            h5Secondary: "h5",
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: false,
        },
        styleOverrides: {
          root: {
            margin: 0,
            paddingTop: 32,
            paddingBottom: 32,
            paddingLeft: 16,
            paddingRight: 16,
            [basicTheme.breakpoints.up("tablet")]: {
              paddingLeft: 40,
              paddingRight: 40,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: 0,
            textTransform: "none",
            color: "inherit",
            "&[disabled]": {
              color: "#8D969D",
              backgroundColor: "#D1D5D8",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecorationColor: "unset",
            textDecorationThickness: 1,
            textUnderlineOffset: 1.5,
            "&:disabled": {
              color: "lightSecondaryGrey",
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  basicTheme
);

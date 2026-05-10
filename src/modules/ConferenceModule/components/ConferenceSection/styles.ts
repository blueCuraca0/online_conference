import { basicTheme } from "theme";

const { mainPalette } = basicTheme.palette;

export const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: mainPalette.background,
  },
  loader: {
    backgroundColor: mainPalette.background,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  topBarWrapper: {
    // margin: "16px 16px 0",
  },
  gridWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
};

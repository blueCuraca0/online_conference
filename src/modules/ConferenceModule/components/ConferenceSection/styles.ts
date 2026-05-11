import { basicTheme } from "theme";

const { mainPalette } = basicTheme.palette;

export const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    backgroundColor: mainPalette.background,
  },
  loader: {
    backgroundColor: mainPalette.background,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  topBarWrapper: {
    flexShrink: 0,
  },
  gridWrapper: {
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
};

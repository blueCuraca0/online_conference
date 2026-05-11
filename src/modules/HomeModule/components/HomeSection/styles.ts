import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    backgroundColor: mainPalette.backgroundLight,
  },
  content: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflowY: "auto",
  },
};

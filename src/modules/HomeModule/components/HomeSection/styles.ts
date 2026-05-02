import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#F5F0E6",
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

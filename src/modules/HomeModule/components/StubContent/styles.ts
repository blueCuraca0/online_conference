import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
    textAlign: "center",
  },
  iconPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: "20px",
    backgroundColor: "#EEF3E8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: "4px",
  },
  iconDot: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: mainPalette.primaryLight,
  },
  title: {
    color: accentPalette.text,
    fontSize: "20px !important",
  },
  subtitle: {
    fontSize: "14px !important",
    color: accentPalette.text,
    opacity: 0.45,
  },
};

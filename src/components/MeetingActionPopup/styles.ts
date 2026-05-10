import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  paper: {
    borderRadius: "14px",
    boxShadow: "0px 8px 32px rgba(0,0,0,0.12)",
    mt: "6px",
    minWidth: "180px",
    overflow: "hidden",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    py: "6px",
  },
  item: {
    px: "16px",
    py: "10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F4F7F0",
    },
  },
  itemDestructive: {
    "&:hover": {
      backgroundColor: "#FFF0F0",
    },
  },
  itemText: {
    fontSize: "14px !important",
    color: accentPalette.text,
  },
  itemTextDestructive: {
    color: "#C0392B",
  },
};

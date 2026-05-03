import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  linkCard: {
    backgroundColor: mainPalette.white,
    borderRadius: "20px",
    padding: "20px 22px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  cardTitle: {
    fontSize: "15px !important",
    color: accentPalette.text,
  },
  linkRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    // backgroundColor: "#F5F0E6",
    borderRadius: "12px",
    padding: "10px 14px",
  },
  linkIcon: {
    color: accentPalette.text,
    opacity: 0.4,
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  linkText: {
    flex: 1,
    fontSize: "13px !important",
    color: accentPalette.text,
    fontFamily: "monospace",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  
  copyButton: {
    flexShrink: 0,
    minWidth: "unset",
    py: "4px",
    px: "8px",
  },
};

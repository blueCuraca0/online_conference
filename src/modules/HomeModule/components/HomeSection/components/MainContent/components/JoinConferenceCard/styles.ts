import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    width: "380px",
    minWidth: "340px",
    backgroundColor: mainPalette.white,
    borderRadius: "20px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    position: "relative",
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: `1.5px solid rgba(0,0,0,0.12)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: accentPalette.text,
  },
  title: {
    color: accentPalette.text,
    fontSize: "22px !important",
  },
  desc: {
    color: accentPalette.text,
    opacity: 0.6,
    fontSize: "13px !important",
    lineHeight: "1.5 !important",
  },
  codeRow: {
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    flexWrap: "wrap",
    position: "relative",
    cursor: "text",
  },
  codeBox: {
    width: "30px",
    height: "36px",
    borderRadius: "8px",
    border: `1.5px solid rgba(0,0,0,0.15)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
  },
  codeBoxActive: {
    borderColor: mainPalette.primary,
    backgroundColor: "#EEF3E8",
  },
  codeChar: {
    fontSize: "14px !important",
    fontWeight: "600 !important",
    color: accentPalette.text,
    letterSpacing: "0.02em",
  },
  joinButton: {
    padding: "13px 24px",
    borderRadius: "12px",
    backgroundColor: mainPalette.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#4A5E38",
    },
  },
  joinButtonText: {
    fontSize: "14px !important",
    fontWeight: "600 !important",
    color: mainPalette.white,
  },
  pasteLinkRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    cursor: "pointer",
  },
  pasteLinkPrefix: {
    fontSize: "13px !important",
    color: accentPalette.text,
    opacity: 0.6,
  },
  pasteLinkText: {
    fontSize: "13px !important",
    color: mainPalette.primary,
    fontWeight: "600 !important",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

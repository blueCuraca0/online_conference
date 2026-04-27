import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    flex: 1,
    backgroundColor: mainPalette.primary,
    borderRadius: "20px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    minHeight: "340px",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-40px",
      right: "-40px",
      width: "200px",
      height: "200px",
      borderRadius: "24px",
      backgroundColor: "rgba(255,255,255,0.06)",
      transform: "rotate(20deg)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "20px",
      right: "40px",
      width: "120px",
      height: "120px",
      borderRadius: "16px",
      backgroundColor: "rgba(255,255,255,0.04)",
      transform: "rotate(10deg)",
    },
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1.5px solid rgba(255,255,255,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: mainPalette.white,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
    },
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  title: {
    color: mainPalette.white,
    fontSize: "28px !important",
    lineHeight: "1.15 !important",
  },
  desc: {
    color: "rgba(255,255,255,0.75)",
    fontSize: "13px !important",
    lineHeight: "1.5 !important",
    maxWidth: "340px",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    flexWrap: "wrap",
  },
  startButton: {
    padding: "11px 24px",
    borderRadius: "12px",
    backgroundColor: mainPalette.white,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.9)",
    },
  },
  startButtonText: {
    fontSize: "14px !important",
    fontWeight: "600 !important",
    color: mainPalette.primary,
  },
  scheduleButton: {
    padding: "11px 20px",
    borderRadius: "12px",
    border: "1.5px solid rgba(255,255,255,0.35)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    color: mainPalette.white,
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.08)",
    },
  },
  scheduleButtonText: {
    fontSize: "14px !important",
    fontWeight: "500 !important",
    color: mainPalette.white,
  },
};

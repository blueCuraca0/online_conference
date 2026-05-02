import { basicTheme } from "theme";

const { mainPalette } = basicTheme.palette;

export const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: mainPalette.primary,
    px: "20px",
    py: "12px",
    borderRadius: "16px 16px 0 0",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  recordingIndicator: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  recordingDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "#e84f4f",
  },
  recordingText: {
    color: "rgba(255,255,255,0.75)",
    fontSize: "12px",
    fontFamily: "'Proba Pro', Arial, serif",
  },
  title: {
    color: mainPalette.white,
    fontSize: "16px",
    fontFamily: "'RockStarBold', Arial, serif",
    fontWeight: 700,
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  badge: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: "20px",
    px: "12px",
    py: "5px",
    color: mainPalette.white,
    fontSize: "12px",
    fontFamily: "'Proba Pro', Arial, serif",
  },
};

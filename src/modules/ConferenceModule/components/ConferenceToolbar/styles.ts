import { basicTheme } from "theme";

const { mainPalette, systemPalette } = basicTheme.palette;

export const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    py: "16px",
    px: "20px",
    backgroundColor: mainPalette.background,
  },
  toolButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    backgroundColor: "rgba(84,107,65,0.08)",
    borderRadius: "12px",
    width: 68,
    height: 64,
    border: "none",
    cursor: "pointer",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "rgba(84,107,65,0.15)",
    },
  },
  toolLabel: {
    fontSize: "11px",
    color: mainPalette.primary,
    fontFamily: "'Proba Pro', Arial, serif",
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: "rgba(84,107,65,0.2)",
    mx: "4px",
  },
  leaveButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    backgroundColor: systemPalette.red,
    borderRadius: "12px",
    width: 68,
    height: 64,
    border: "none",
    cursor: "pointer",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#c94040",
    },
  },
  leaveLabel: {
    fontSize: "11px",
    color: mainPalette.white,
    fontFamily: "'Proba Pro', Arial, serif",
  },
};

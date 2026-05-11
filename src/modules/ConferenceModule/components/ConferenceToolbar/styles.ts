import { basicTheme } from "theme";

const { mainPalette, systemPalette } = basicTheme.palette;

export const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    paddingBottom: "16px",
    px: "20px",
  },
  
  toolButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    gap: "4px",
    backgroundColor: "rgba(84,107,65,0.08)",
    borderRadius: "12px",
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

  toolButtonActive: {
    backgroundColor: systemPalette.red,
    "&:hover": {
      backgroundColor: "#c94040",
    },
  },
  toolLabelActive: {
    fontSize: "11px",
    color: mainPalette.white,
    fontFamily: "'Proba Pro', Arial, serif",
  },

  divider: {
    width: 2,
    maxWidth: 2,
    borderRadius: 2,
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
    padding: "1rem",
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

  popoverPaper: {
    borderRadius: "16px",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
    minWidth: 200,
  },
  popoverItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "12px",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    width: "100%",
    textAlign: "left" as const,
    "&:hover": {
      backgroundColor: "rgba(84,107,65,0.08)",
    },
  },
  popoverItemIcon: {
    color: mainPalette.primary,
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  popoverItemLabel: {
    fontSize: "14px !important",
    color: "#4a4a3a",
    fontFamily: "'Proba Pro', Arial, serif",
  },
};

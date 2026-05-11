import { basicTheme } from "theme";

const { mainPalette } = basicTheme.palette;

export const styles = {
  drawer: {
    "& .MuiDrawer-paper": {
      width: 320,
      backgroundColor: mainPalette.background,
      borderLeft: `1px solid rgba(84,107,65,0.15)`,
      display: "flex",
      flexDirection: "column",
      padding: "24px 20px",
      gap: "16px",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
  },
  title: {
    fontSize: "18px !important",
    fontWeight: 600,
    color: mainPalette.primary,
  },
  closeButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "4px",
    borderRadius: "8px",
    color: mainPalette.primary,
    "&:hover": {
      backgroundColor: "rgba(84,107,65,0.08)",
    },
  },
  content: {
    flex: 1,
    overflowY: "auto",
    "& h1, & h2, & h3, & h4": {
      color: mainPalette.primary,
      fontFamily: "'Proba Pro', Arial, serif",
      marginTop: "16px",
      marginBottom: "6px",
      "&:first-of-type": { marginTop: 0 },
    },
    "& h1": { fontSize: "20px" },
    "& h2": { fontSize: "16px" },
    "& h3": { fontSize: "14px" },
    "& p": { color: "#4a4a3a", fontSize: "14px", lineHeight: 1.6, marginBottom: "8px" },
    "& ul, & ol": { paddingLeft: "20px", color: "#4a4a3a", fontSize: "14px", lineHeight: 1.8 },
    "& pre": {
      backgroundColor: "rgba(84,107,65,0.06)",
      borderRadius: "8px",
      padding: "12px",
      fontSize: "12px",
      overflowX: "auto",
      whiteSpace: "pre-wrap",
      fontFamily: "monospace",
      color: "#4a4a3a",
    },
  },
  emptyText: {
    color: "rgba(84,107,65,0.5)",
    fontSize: "14px !important",
  },
};

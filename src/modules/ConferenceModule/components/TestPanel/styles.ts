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
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  question: {
    fontSize: "16px !important",
    fontWeight: 600,
    color: mainPalette.primary,
  },
  optionButton: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: `1.5px solid rgba(84,107,65,0.25)`,
    backgroundColor: "transparent",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "14px",
    color: mainPalette.primary,
    fontFamily: "'Proba Pro', Arial, sans-serif",
    transition: "background-color 0.15s, border-color 0.15s",
    "&:hover": {
      backgroundColor: "rgba(84,107,65,0.07)",
      borderColor: mainPalette.primary,
    },
  },
  optionSelected: {
    backgroundColor: "rgba(84,107,65,0.12)",
    borderColor: mainPalette.primary,
    fontWeight: 600,
  },
  optionCorrect: {
    backgroundColor: "rgba(84,107,65,0.18)",
    borderColor: mainPalette.primary,
  },
  optionWrong: {
    backgroundColor: "rgba(200,60,60,0.1)",
    borderColor: "#c83c3c",
    color: "#c83c3c",
  },
  submitButton: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: mainPalette.primary,
    color: "#fff",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "'Proba Pro', Arial, sans-serif",
    cursor: "pointer",
    marginTop: "8px",
    "&:hover": {
      opacity: 0.88,
    },
    "&:disabled": {
      opacity: 0.4,
      cursor: "default",
    },
  },
  resultText: {
    fontSize: "14px !important",
    color: mainPalette.primary,
    marginTop: "4px",
  },
};

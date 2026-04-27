import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    flex: 1,
    overflowY: "auto",
    padding: "32px 40px",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    maxWidth: "720px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  title: {
    color: accentPalette.text,
    fontSize: "24px !important",
  },
  subtitle: {
    fontSize: "14px !important",
    color: accentPalette.text,
    opacity: 0.55,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  sectionTitle: {
    fontSize: "13px !important",
    fontWeight: "600 !important",
    color: accentPalette.text,
    opacity: 0.5,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  avatarRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: "50%",
    backgroundColor: accentPalette.text,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  avatarInitials: {
    fontSize: "22px !important",
    fontWeight: "600 !important",
    color: mainPalette.white,
  },
  avatarActions: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  uploadButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    padding: "9px 18px",
    borderRadius: "10px",
    border: `1.5px solid rgba(0,0,0,0.12)`,
    cursor: "pointer",
    width: "fit-content",
    color: accentPalette.text,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.03)",
    },
  },
  uploadButtonText: {
    fontSize: "13px !important",
    fontWeight: "500 !important",
    color: accentPalette.text,
  },
  avatarHint: {
    fontSize: "12px !important",
    color: accentPalette.text,
    opacity: 0.45,
    pl: "2px",
  },
  fieldsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },
  fieldLabel: {
    fontSize: "12px !important",
    color: accentPalette.text,
    opacity: 0.55,
    fontWeight: "500 !important",
  },
  fieldInput: {
    borderRadius: "12px",
    border: `1.5px solid rgba(0,0,0,0.1)`,
    padding: "11px 14px",
    backgroundColor: mainPalette.white,
    cursor: "text",
    "&:hover": {
      borderColor: "rgba(0,0,0,0.2)",
    },
  },
  fieldValue: {
    fontSize: "14px !important",
    color: accentPalette.text,
  },
  divider: {
    height: "1px",
    backgroundColor: "rgba(0,0,0,0.07)",
  },
  dangerButton: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "1.5px solid rgba(220,50,50,0.3)",
    cursor: "pointer",
    width: "fit-content",
    "&:hover": {
      backgroundColor: "rgba(220,50,50,0.04)",
    },
  },
  dangerButtonText: {
    fontSize: "13px !important",
    fontWeight: "500 !important",
    color: "#C03030",
  },
};

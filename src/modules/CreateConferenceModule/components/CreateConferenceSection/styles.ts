import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#F5F0E6",
  },
  header: {
    backgroundColor: mainPalette.primary,
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px",
    padding: "20px 32px 24px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
  },
  backButton: {
    width: 36,
    height: 36,
    minWidth: "unset",
    borderRadius: "10px",
    p: 0,
  },
  newRoomLabel: {
    fontSize: "12px !important",
    color: "rgba(255,255,255,0.6)",
    mb: "2px",
  },
  pageTitle: {
    color: mainPalette.white,
    fontSize: "26px !important",
  },
  modeTabs: {
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    backgroundColor: "rgba(0,0,0,0.15)",
    borderRadius: "12px",
    padding: "4px",
  },
  modeTab: {
    padding: "8px 18px",
    borderRadius: "9px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.08)",
    },
  },
  modeTabActive: {
    backgroundColor: mainPalette.white,
    "&:hover": {
      backgroundColor: mainPalette.white,
    },
  },
  modeTabText: {
    fontSize: "14px !important",
    fontWeight: "500 !important",
    color: "rgba(255,255,255,0.75)",
  },
  modeTabTextActive: {
    color: accentPalette.text,
    fontWeight: "600 !important",
  },
  body: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    padding: "24px 32px",
    flex: 1,
    alignItems: "flex-start",
  },
};

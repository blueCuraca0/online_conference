import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px 28px 28px",
    overflowY: "auto",
  },
  headerBanner: {
    backgroundColor: mainPalette.primary,
    borderRadius: "20px",
    padding: "24px 28px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  dateLine: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    backgroundColor: "#8DB870",
  },
  dateText: {
    fontSize: "13px !important",
    color: "rgba(255,255,255,0.75)",
  },
  bannerTitle: {
    color: mainPalette.white,
    fontSize: "32px !important",
    lineHeight: "1.1 !important",
    maxWidth: "520px",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "12px",
    flexShrink: 0,
  },
  searchBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: "12px",
    padding: "8px 14px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.18)",
    },
    color: "rgba(255,255,255,0.7)",
  },
  searchText: {
    fontSize: "13px !important",
    color: "rgba(255,255,255,0.65)",
  },
  searchKbd: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: "6px",
    padding: "2px 6px",
  },
  searchKbdText: {
    fontSize: "11px !important",
    color: "rgba(255,255,255,0.7)",
    fontFamily: "monospace",
  },
  avatarText: {
    fontSize: "13px !important",
    fontWeight: "600 !important",
    color: mainPalette.white,
  },
  cardsRow: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "stretch",
  },
};

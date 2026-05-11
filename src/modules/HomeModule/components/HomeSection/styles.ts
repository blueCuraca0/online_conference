import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    backgroundColor: mainPalette.backgroundLight,
  },
  content: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  },
  contentInner: {
    flex: 1,
    minHeight: 0,
    overflowY: "auto",
  },
  mobileHeader: {
    display: { mobile: "flex", tablet: "none" },
    alignItems: "center",
    gap: "12px",
    padding: "14px 16px",
    backgroundColor: mainPalette.white,
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    flexShrink: 0,
  },
  hamburger: {
    width: 36,
    height: 36,
    minWidth: "unset",
    borderRadius: "10px",
    p: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: mainPalette.primary,
    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
  },
  mobileTitle: {
    color: mainPalette.primary,
    fontSize: "16px !important",
    fontWeight: "600 !important",
  },
  backdrop: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1200,
    display: { tablet: "none" },
  },
};

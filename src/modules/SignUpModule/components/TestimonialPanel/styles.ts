import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const panelBg = "#E8E4D4";

export const styles: SxStyles = {
  root: {
    display: { mobile: "none", tablet: "flex" },
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    bgcolor: panelBg,
    borderRadius: 6,
    p: 10,
    m: 4,
    overflow: "hidden",
  },
  quoteBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    maxWidth: 460,
  },
  quoteText: {
    lineHeight: "1.2",
  },
  authorRow: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  authorAvatar: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    bgcolor: basicTheme.palette.mainPalette.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  statsRow: {
    display: "flex",
    gap: 3,
    alignItems: "stretch",
  },
  statCard: {
    flex: 1,
    bgcolor: basicTheme.palette.mainPalette.white,
    borderRadius: 4,
    px: 5,
    py: 4,
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
};

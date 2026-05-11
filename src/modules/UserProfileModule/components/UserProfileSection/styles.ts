import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    flex: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: mainPalette.backgroundLight,
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100%",
  },
  heroBanner: {
    borderRadius: "0px 0px 16px 16px",
    backgroundColor: mainPalette.primary,
    padding: "28px 32px 32px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flexShrink: 0,
  },
  heroTitle: {
    color: mainPalette.white,
    fontFamily: "'RockStarBold', Arial, serif",
    fontSize: "36px !important",
    fontWeight: "700 !important",
    lineHeight: "1.1 !important",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    gap: "8px",
  },
  card: {
    backgroundColor: mainPalette.white,
    borderRadius: "16px",
    padding: "24px 28px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  profileCardRow: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  avatar: {
    flexShrink: 0,
  },
  profileInfo: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  profileName: {
    fontFamily: "'RockStarBold', Arial, serif",
    fontSize: "20px !important",
    fontWeight: "700 !important",
    color: accentPalette.text,
  },
  profileMeta: {
    fontSize: "13px !important",
    color: accentPalette.text,
    opacity: 0.6,
  },
  badges: {
    display: "flex",
    gap: "6px",
    mt: "4px",
  },
  badge: {
    fontSize: "12px",
    fontFamily: "'Proba Pro', Arial, serif",
    color: accentPalette.text,
    backgroundColor: "rgba(84,107,65,0.1)",
    borderRadius: "20px",
    px: "10px",
    py: "3px",
  },
  cardTitle: {
    fontSize: "15px !important",
    fontWeight: "600 !important",
    fontFamily: "'RockStarBold', Arial, serif",
    color: accentPalette.text,
  },
  fieldsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },
  fieldLabel: {
    fontSize: "12px !important",
    color: accentPalette.text,
    opacity: 0.55,
    mb: "4px",
  },
  fieldValue: {
    fontSize: "14px !important",
    color: accentPalette.text,
  },
};

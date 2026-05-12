import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    flex: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: { mobile: "0 0 32px", tablet: "0 24px 40px" },
    width: "100%",
  },
  heroBanner: {
    borderRadius: { mobile: "0 0 16px 16px", tablet: "16px" },
    backgroundColor: mainPalette.primary,
    padding: { mobile: "20px 20px 24px", tablet: "28px 32px 32px" },
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flexShrink: 0,
  },
  breadcrumb: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "rgba(255,255,255,0.6)",
    fontSize: "13px",
    fontFamily: "'Proba Pro', Arial, serif",
  },
  heroTitle: {
    color: mainPalette.white,
    fontSize: { mobile: "22px", tablet: "26px" },
    fontWeight: 700,
    fontFamily: "'RockStar', Arial, serif",
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "13px",
    fontFamily: "'Proba Pro', Arial, serif",
  },
  card: {
    backgroundColor: mainPalette.white,
    borderRadius: "16px",
    padding: { mobile: "20px 16px", tablet: "24px 28px" },
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: mainPalette.black,
    fontFamily: "'RockStar', Arial, serif",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  sectionTitle: {
    fontSize: "13px",
    fontWeight: 600,
    color: mainPalette.primary,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    fontFamily: "'Proba Pro', Arial, serif",
  },
  body: {
    fontSize: "14px",
    color: "#4A4A3E",
    lineHeight: 1.65,
    fontFamily: "'Proba Pro', Arial, serif",
  },
  divider: {
    borderColor: "#EDE8DF",
    my: "4px",
  },
  acceptedBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#EBF2E6",
    color: mainPalette.primary,
    borderRadius: "20px",
    padding: "4px 12px",
    fontSize: "12px",
    fontWeight: 600,
    fontFamily: "'Proba Pro', Arial, serif",
    alignSelf: "flex-start",
  },
};

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
  card: {
    backgroundColor: mainPalette.white,
    borderRadius: "16px",
    padding: { mobile: "20px 16px", tablet: "24px 28px" },
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  cardTitle: {
    fontSize: "15px",
    fontWeight: 600,
    color: mainPalette.black,
    fontFamily: "'Proba Pro', Arial, serif",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  },
  label: {
    fontSize: "14px",
    color: mainPalette.black,
    fontFamily: "'Proba Pro', Arial, serif",
  },
  optionGroup: {
    display: "flex",
    gap: "8px",
  },
  option: {
    padding: "8px 18px",
    borderRadius: "20px",
    border: "1.5px solid #D0C9BE",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "'Proba Pro', Arial, serif",
    color: mainPalette.black,
    backgroundColor: "transparent",
    transition: "all 0.15s",
    userSelect: "none",
  },
  optionActive: {
    backgroundColor: mainPalette.primary,
    borderColor: mainPalette.primary,
    color: mainPalette.white,
  },
};

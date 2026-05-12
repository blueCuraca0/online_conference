import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    px: 12,
    py: 10,
    bgcolor: basicTheme.palette.mainPalette.secondary,
    minHeight: "100vh",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: 3,
  },
  logoIconBox: {
    width: 40,
    height: 40,
    borderRadius: 2,
    bgcolor: basicTheme.palette.mainPalette.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flexShrink: 0,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    maxWidth: 540,
  },
  stepsRow: {
    display: "flex",
    alignItems: "center",
    gap: 0,
  },
  stepItem: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  stepCircleActive: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    bgcolor: basicTheme.palette.mainPalette.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  stepCircleInactive: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    border: `1.5px solid #C8C4B0`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  stepConnector: {
    width: 40,
    height: 1,
    bgcolor: "#C8C4B0",
    mx: 2,
  },
  titleBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    marginTop: 4,
  },
  nameRow: {
    display: "flex",
    gap: 4,
  },
  nameField: {
    flex: 1,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  fieldBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  textField: {
    bgcolor: basicTheme.palette.mainPalette.white,
    borderRadius: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      "& fieldset": {
        borderColor: "#E0D9CC",
      },
      "&:hover fieldset": {
        borderColor: basicTheme.palette.mainPalette.primary,
      },
      "&.Mui-focused fieldset": {
        borderColor: basicTheme.palette.mainPalette.primary,
      },
    },
  },
  passwordStrengthRow: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  strengthBars: {
    display: "flex",
    gap: 1.5,
  },
  strengthBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  strengthMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkboxRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 2,
  },
  checkbox: {
    color: basicTheme.palette.mainPalette.primary,
    "&.Mui-checked": {
      color: basicTheme.palette.mainPalette.primary,
    },
    p: 0,
    mt: 0.5,
  },
  continueButton: {
    py: 4,
    borderRadius: 3,
    width: "100%",
    bgcolor: basicTheme.palette.mainPalette.primary,
    "&:hover": {
      bgcolor: basicTheme.palette.mainPalette.primaryLight,
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  footer: {
    mt: 2,
  },
  footerLink: {
    fontWeight: 700,
    cursor: "pointer",
    color: basicTheme.palette.accentPalette.text,
  },
};

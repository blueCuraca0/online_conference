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
    maxWidth: 480,
  },
  titleBlock: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  socialButtons: {
    display: "flex",
    gap: 4,
  },
  socialButton: {
    flex: 1,
    py: 3,
    px: 4,
    borderRadius: 2,
    bgcolor: basicTheme.palette.mainPalette.white,
    border: `1px solid ${basicTheme.palette.mainPalette.secondary}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    cursor: "pointer",
  },
  dividerRow: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  dividerLine: {
    flex: 1,
    height: "1px",
    bgcolor: "#E0D9CC",
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
  passwordLabel: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  checkboxRow: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  checkbox: {
    color: basicTheme.palette.mainPalette.primary,
    "&.Mui-checked": {
      color: basicTheme.palette.mainPalette.primary,
    },
    p: 0,
  },
  signInButton: {
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
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  footerMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

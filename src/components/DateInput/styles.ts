import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flex: 1,
  },
  label: {
    fontSize: "12px !important",
    fontWeight: "500 !important",
    color: accentPalette.text,
    opacity: 0.55,
  },
  picker: {
    width: "100%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "#FAFAFA",
      fontFamily: "inherit",
      fontSize: "15px",
      color: "#4a4a3a",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: "1.5px",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(0,0,0,0.1)",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: mainPalette.primary,
        borderWidth: "1.5px",
      },
      "&.Mui-focused": {
        backgroundColor: mainPalette.white,
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "12px 14px",
      fontFamily: "inherit",
      fontSize: "15px",
      color: "#4a4a3a",
    },
    "& .MuiInputAdornment-root .MuiIconButton-root": {
      color: accentPalette.text,
      opacity: 0.45,
      padding: "4px",
      marginRight: "4px",
    },
  },
};

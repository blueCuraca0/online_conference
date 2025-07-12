import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    [basicTheme.breakpoints.up("laptop")]: {
      width: "100%",
      maxWidth: "calc((100% / 2) - 16px)",
    },
  },
};

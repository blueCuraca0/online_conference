import { theme } from "theme";
import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    width: '100%',
    height: '100%',
  },
  header: {
    background: theme.palette.mainPalette.primary, 
    padding: 12, 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30, 
    flexDirection: 'row',
  },
  contentContainer: {
    px: 4,
    py: 4,
  },
};

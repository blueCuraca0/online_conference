import { SxStyles } from "types/styles";

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: 8,
  },
  container: {
    width: "100%",
    maxWidth: 400,
    height: 400,
    mx: "auto",
    my: "auto",
    p: 10,
    borderRadius: 6,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    mb: 6,
  },
  subtitle: {
    mt: 6,
    mb: 8,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 2,
  },
};

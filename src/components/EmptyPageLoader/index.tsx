import { FC } from "react";

import { CircularProgress } from "ui/CircularProgress";
import { Container } from "ui/Container";

import { styles } from "./styles";

export interface EmptyPageLoaderProps {}

export const EmptyPageLoader: FC<EmptyPageLoaderProps> = () => {
  return (
    <Container sx={styles.root}>
      <CircularProgress sx={styles.loader} />
    </Container>
  );
};

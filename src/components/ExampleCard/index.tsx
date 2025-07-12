import React, { FC, memo } from "react";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";

import { styles } from "./styles";

export interface ExampleCardProps {
  id: string;
  title: string;
}

export const ExampleCard: FC<ExampleCardProps> = memo(({ title }) => {
  return (
    <Box sx={styles.root}>
      <Typography variant="buttonTextBold">
        Example {title} Component
      </Typography>
    </Box>
  );
});

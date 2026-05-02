import { FC } from "react";

import { Box } from "ui/Box";
import SignUpPanel from "../SignUpPanel";
import TestimonialPanel from "../TestimonialPanel";
import { styles } from "./styles";

const SignUpSection: FC = () => {
  return (
    <Box sx={styles.root}>
      <SignUpPanel />
      <TestimonialPanel />
    </Box>
  );
};

export default SignUpSection;

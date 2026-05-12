import { FC } from "react";

import { Box } from "ui/Box";
import SignUpPanel from "../SignUpPanel";
import TestimonialPanel from "../TestimonialPanel";
import { styles } from "./styles";
import DecorativePanel from "modules/WelcomeModule/components/DecorativePanel";

const SignUpSection: FC = () => {
  return (
    <Box sx={styles.root}>
      <SignUpPanel />
      <DecorativePanel />
      {/* <TestimonialPanel /> */}
    </Box>
  );
};

export default SignUpSection;

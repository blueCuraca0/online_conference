import { FC } from "react";

import { Box } from "ui/Box";
import SignInPanel from "./components/SignInPanel";
import DecorativePanel from "./components/DecorativePanel";
import { styles } from "./styles";

const WelcomeSection: FC = () => {
  return (
    <Box sx={styles.root}>
      <SignInPanel />
      <DecorativePanel />
    </Box>
  );
};

export default WelcomeSection;

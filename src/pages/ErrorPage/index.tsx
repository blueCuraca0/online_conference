import { FC } from "react";

import DandruffImage from "assets/IllustrationIcons/dandruff-gray-illustration.png";
import { Button, EButtonType } from "components/Button";
import Image from "mui-image";
import { Box } from "ui/Box";
import { Container } from "ui/Container";
import { Typography } from "ui/Typography";

import { styles } from "./styles";

import { useNavigate } from "react-router-dom";

interface ErrorPageProps {}

const ErrorPage: FC<ErrorPageProps> = () => {
  const navigate = useNavigate();

  return (
    <Container sx={styles.root}>
      <Box sx={styles.container}>
        <Box sx={styles.image}>
          <Image src={DandruffImage} duration={0} fit="cover" />
        </Box>
        <Typography variant="h1" sx={styles.title}>
          404
        </Typography>
        <Typography variant="h5" sx={styles.subtitle}>
          Page not found
        </Typography>
        <Button
          variantType={EButtonType.SECONDARY}
          buttonTitle="Back to Home"
          onClick={() => navigate("/Home")}
        />
      </Box>
    </Container>
  );
};

export default ErrorPage;

import { FC } from "react";

import { Container } from "ui/Container";

import { styles } from "./styles";
import HomeSection from "modules/HomeModule/components/HomeSection";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <Container sx={styles.root}>
      <HomeSection />
    </Container>
  );
};

export default HomePage;

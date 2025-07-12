import { FC } from "react";

import { Container } from "ui/Container";

import { styles } from "./styles";
import { Button, EButtonType } from "components/Button";

interface HomeSectionProps {}

// TODO: create a component for header (with logo or title)
// TODO: create avatar component with icon for absent image

const HomeSection: FC<HomeSectionProps> = () => {
  return (
    <Container sx={styles.root}>
      <Container sx={styles.buttons}>
        <Button buttonTitle="Join a conference room" />
        <Button buttonTitle="Create a conference" />
        <Button buttonTitle="Settings" variantType={EButtonType.SECONDARY} />
      </Container>

      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        style={{ objectFit: "cover" }}
        height={100}
        width={100}
        src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
      />
    </Container>
  );
};

export default HomeSection;

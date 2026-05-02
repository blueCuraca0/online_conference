import { FC } from "react";

import { Box } from "ui/Box";
import MainContent from "../MainContent";
import { ProfileSection } from "modules/ProfileModule";
import { styles } from "./styles";
import { useHomeSectionController } from "./useHomeSectionController";
import StubContent from "../StubContent";
import Sidebar from "../Sidebar";

const HomeSection: FC = () => {
  const { activeSection, setActiveSection } = useHomeSectionController();

  const renderContent = () => {
    switch (activeSection) {
      case "conferences":
        return <MainContent />;
      case "profile":
        return <ProfileSection />;
      default:
        return <StubContent section={activeSection} />;
    }
  };

  return (
    <Box sx={styles.root}>
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <Box sx={styles.content}>{renderContent()}</Box>
    </Box>
  );
};

export default HomeSection;

import { FC, useState } from "react";

import { Box } from "ui/Box";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import SettingsContent from "./components/SettingsContent";
import StubContent from "./components/StubContent";
import { styles } from "./styles";
import { ActiveSection } from "./types";

const HomeSection: FC = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>("conferences");

  const renderContent = () => {
    switch (activeSection) {
      case "conferences":
        return <MainContent />;
      case "profile":
        return <SettingsContent />;
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

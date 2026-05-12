import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import MainContent from "../MainContent";
import { ProfileSection } from "modules/ProfileModule";
import { AppearanceSection } from "modules/AppearanceModule";
import { PrivacySection } from "modules/PrivacyModule";
import { styles } from "./styles";
import { useHomeSectionController } from "./useHomeSectionController";
import StubContent from "../StubContent";
import Sidebar from "../Sidebar";

const HomeSection: FC = () => {
  const { t } = useTranslation();
  const { activeSection, setActiveSection } = useHomeSectionController();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSectionChange = (section: Parameters<typeof setActiveSection>[0]) => {
    setActiveSection(section);
    setSidebarOpen(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "conferences":
        return <MainContent />;
      case "profile":
        return <ProfileSection />;
      case "appearance":
        return <AppearanceSection />;
      case "privacySecurity":
        return <PrivacySection />;
      default:
        return <StubContent section={activeSection} />;
    }
  };

  return (
    <Box sx={styles.root}>
      {sidebarOpen && (
        <Box sx={styles.backdrop} onClick={() => setSidebarOpen(false)} />
      )}
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        open={sidebarOpen}
      />
      <Box sx={styles.content}>
        <Box sx={styles.mobileHeader}>
          <Box sx={styles.hamburger} onClick={() => setSidebarOpen(true)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect y="3" width="20" height="2" rx="1" fill="currentColor" />
              <rect y="9" width="20" height="2" rx="1" fill="currentColor" />
              <rect y="15" width="20" height="2" rx="1" fill="currentColor" />
            </svg>
          </Box>
          <Box sx={styles.mobileTitle}>{t("appName")}</Box>
        </Box>
        <Box sx={styles.contentInner}>{renderContent()}</Box>
      </Box>
    </Box>
  );
};

export default HomeSection;

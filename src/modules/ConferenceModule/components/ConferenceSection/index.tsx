import { FC } from "react";
import { SxProps } from "@mui/material";

import { Box } from "ui/Box";
import ConferenceTopBar from "../ConferenceTopBar";
import VideoGrid from "../VideoGrid";
import ConferenceToolbar from "../ConferenceToolbar";
import { styles } from "./styles";
import { useConferenceSectionController, STUB_PARTICIPANTS } from "./useConferenceSectionController";

const ConferenceSection: FC = () => {
  const {
    id,
    handleMute,
    handleCamera,
    handleShare,
    handleCaptions,
    handleRaise,
    handleChat,
    handlePeople,
    handleMore,
    handleLeave,
  } = useConferenceSectionController();

  return (
    <Box sx={{ ...styles.root } as SxProps}>
      <Box sx={styles.topBarWrapper as SxProps}>
        <ConferenceTopBar
          title="Q3 Roadmap — Studio Sync"
          participantCount={5}
          passcode="4·7·9·2"
          link={`confly.app/r/quiet-river-${id ?? "204"}`}
          recordingTime="24:18"
        />
      </Box>

      <Box sx={styles.gridWrapper as SxProps}>
        <VideoGrid participants={STUB_PARTICIPANTS} />
      </Box>

      <ConferenceToolbar
        onMute={handleMute}
        onCamera={handleCamera}
        onShare={handleShare}
        onCaptions={handleCaptions}
        onRaise={handleRaise}
        onChat={handleChat}
        onPeople={handlePeople}
        onMore={handleMore}
        onLeave={handleLeave}
      />
    </Box>
  );
};

export default ConferenceSection;

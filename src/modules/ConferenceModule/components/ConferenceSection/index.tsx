import { FC } from "react";
import { SxProps } from "@mui/material";

import { Box } from "ui/Box";
import ConferenceTopBar from "../ConferenceTopBar";
import ConferenceToolbar from "../ConferenceToolbar";
import { styles } from "./styles";
import { useConferenceSectionController } from "./useConferenceSectionController";
import { AgoraWrapper } from "../AgoraWrapper";
import VideoGrid from "../VideoGrid";

const ConferenceSectionInner: FC = () => {
  const {
    localMicrophoneTrack,
    localCameraTrack,
    micOn,
    cameraOn,
    channelName,
    actions,
  } = useConferenceSectionController();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.topBarWrapper as SxProps}>
        <ConferenceTopBar
          title="Q3 Roadmap — Studio Sync"
          participantCount={5}
          code={channelName ?? "204"}
          recordingTime="24:18"
        />
      </Box>

      <Box sx={styles.gridWrapper as SxProps}>
        <VideoGrid localCameraTrack={localCameraTrack} localMicrophoneTrack={localMicrophoneTrack} micOn={micOn} cameraOn={cameraOn} />
      </Box>

      <ConferenceToolbar
        micOn={micOn}
        cameraOn={cameraOn}
        onMute={actions.handleMute}
        onCamera={actions.handleCamera}
        onShare={actions.handleShare}
        onCaptions={actions.handleCaptions}
        onRaise={actions.handleRaise}
        onChat={actions.handleChat}
        onPeople={actions.handlePeople}
        onMore={actions.handleMore}
        onLeave={actions.handleLeave}
      />
    </Box>
  );
};

const ConferenceSection: FC = () => (
  <AgoraWrapper>
    <ConferenceSectionInner />
  </AgoraWrapper>
);

export default ConferenceSection;

import { FC, memo } from "react";
import { CircularProgress, SxProps } from "@mui/material";

import { Box } from "ui/Box";
import ConferenceTopBar from "../ConferenceTopBar";
import ConferenceToolbar from "../ConferenceToolbar";
import { styles } from "./styles";
import { useConferenceSectionController } from "./useConferenceSectionController";
import { AgoraWrapper } from "../AgoraWrapper";
import VideoGrid from "../VideoGrid";
import NotesPanel from "../NotesPanel";
import TestPanel from "../TestPanel";
import { useConferenceStore } from "stores/conferenceStore";
import { useConferenceTestController } from "modules/ConferenceModule/useConferenceTestController";

const ConferenceSectionInner: FC = () => {
  const {
    localMicrophoneTrack,
    localCameraTrack,
    micOn,
    cameraOn,
    notesOpen,
    testOpen,
    channelName,
    actions,
    isLoading,
    isConnected,
  } = useConferenceSectionController();
  const { currentConference, currentTest } = useConferenceStore();
  const { submitAnswer } = useConferenceTestController(currentConference?.id, currentConference?.isHost ?? false);

  if (isLoading) {   
    return (
      <Box sx={styles.loader}>
        <CircularProgress />
      </Box>
    );
  }

  console.log(currentConference);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.topBarWrapper as SxProps}>
        <ConferenceTopBar
          title={isConnected ? (currentConference?.name || "Connected") : "Not connected"}
          participantCount={(currentConference?.participantCount || 0) + 1}
          code={channelName ?? "204"}
          recordingTime="24:18"
        />
      </Box>

      <Box sx={styles.gridWrapper as SxProps}>
        <VideoGrid currentConference={currentConference} localCameraTrack={localCameraTrack} localMicrophoneTrack={localMicrophoneTrack} micOn={micOn} cameraOn={cameraOn} />
      </Box>

      <ConferenceToolbar
        micOn={micOn}
        cameraOn={cameraOn}
        testAvailable={currentTest !== null}
        onMute={actions.handleMute}
        onCamera={actions.handleCamera}
        onShare={actions.handleShare}
        onCaptions={actions.handleCaptions}
        onRaise={actions.handleRaise}
        onChat={actions.handleChat}
        onPeople={actions.handlePeople}
        onNotes={actions.handleNotes}
        onTest={actions.handleTest}
        onMore={actions.handleMore}
        onLeave={actions.handleLeave}
      />

      <NotesPanel
        open={notesOpen}
        notes={currentConference?.agenda ?? null}
        onClose={actions.handleNotes}
      />

      {currentTest && (
        <TestPanel
          open={testOpen}
          question={currentTest.question}
          onClose={actions.handleTest}
          onSubmit={submitAnswer}
        />
      )}
    </Box>
  );
};

const ConferenceSection: FC = () => (
  <AgoraWrapper>
    <ConferenceSectionInner />
  </AgoraWrapper>
);

export default memo(ConferenceSection);

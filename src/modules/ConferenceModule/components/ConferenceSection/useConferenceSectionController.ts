import { useNavigate, useParams } from "react-router-dom";
import { Participant } from "./types";
import { useState } from "react";
import { useJoin, useLocalCameraTrack, useLocalMicrophoneTrack, usePublish } from "agora-rtc-react";
export const STUB_PARTICIPANTS: Participant[] = [
  { id: "1", name: "Mira Gupta", isHost: true, isSpeaking: true },
  { id: "2", name: "Sasha Khan", isMuted: true },
  { id: "3", name: "Jules Reyes" },
  { id: "4", name: "Alex Morrow", isYou: true, isMuted: true },
  { id: "5", name: "Naomi Kestrel", isMuted: true, isCameraOff: true, initials: "NK" },
];

// TODO: use real token generated from backend; 
// when user opens the page with code, fetch their conferences and find the one with this code
const TOKEN = 
 "007eJxTYNjatqZas75yD8PJKP+Fu0s1vF7o6M8v/rRTWI1HxNB7wy8FBjPTJCOztFTL5FRzc5O0pOREEwPLtORkU3MzI6PkVCODT87fMxsCGRmiJC6yMDJAIIjPzVCSWlySnJGYl5eaw8AAAAZiIgQ=";
const appId = process.env.REACT_APP_AGORA_APP_ID || "";

const IS_READY = true;

export const useConferenceSectionController = () => {
  // TODO: store current conference object
  const { id: channelName } = useParams<{ id: string }>();

  const [token, setToken] = useState(TOKEN);

  const [micOn, setMic] = useState(true);
  const [cameraOn, setCamera] = useState(true);
  
  const navigate = useNavigate();

  useJoin({ 
    appid: appId, 
    channel: channelName || "", 
    token: token ? token : null
  }, IS_READY);

  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);

  usePublish([localMicrophoneTrack, localCameraTrack]);

  const handleMute = () => {
    setMic((prev) => !prev);
  };

  const handleCamera = () => {
    setCamera((prev) => !prev);
  };

  const handleShare = () => {
    // TODO: open screen share picker
  };

  const handleCaptions = () => {
    // TODO: toggle live captions overlay
  };

  const handleRaise = () => {
    // TODO: send raise-hand signal to all participants
  };

  const handleChat = () => {
    // TODO: open chat panel
  };

  const handlePeople = () => {
    // TODO: open participants panel
  };

  const handleMore = () => {
    // TODO: open overflow menu with extra options
  };

  const handleLeave = () => {
    // TODO: send leave-room event, cleanup media streams
    navigate("/home");
  };

  return {
    channelName,
    localMicrophoneTrack,
    localCameraTrack,
    micOn,
    cameraOn,
    actions: {
      handleMute,
      handleCamera,
      handleShare,
      handleCaptions,
      handleRaise,
      handleChat,
      handlePeople,
      handleMore,
      handleLeave,
    }
  };
};

import { useNavigate, useParams } from "react-router-dom";
import { Participant } from "./types";

export const STUB_PARTICIPANTS: Participant[] = [
  { id: "1", name: "Mira Gupta", isHost: true, isSpeaking: true },
  { id: "2", name: "Sasha Khan", isMuted: true },
  { id: "3", name: "Jules Reyes" },
  { id: "4", name: "Alex Morrow", isYou: true, isMuted: true },
  { id: "5", name: "Naomi Kestrel", isMuted: true, isCameraOff: true, initials: "NK" },
];

export const useConferenceSectionController = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleMute = () => {
    // TODO: toggle local microphone mute state
  };

  const handleCamera = () => {
    // TODO: toggle local camera on/off state
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
  };
};

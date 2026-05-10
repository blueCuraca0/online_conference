import { useNavigate, useParams } from "react-router-dom";
import { Participant } from "./types";
import { useEffect, useMemo, useState } from "react";
import { useJoin, useLocalCameraTrack, useLocalMicrophoneTrack, usePublish, useRTCClient } from "agora-rtc-react";
import { useConferenceController } from "hooks/useConferenceController";
import { useProfileStore } from "stores/profileStore";
export const STUB_PARTICIPANTS: Participant[] = [
  { id: "1", name: "Mira Gupta", isHost: true, isSpeaking: true },
  { id: "2", name: "Sasha Khan", isMuted: true },
  { id: "3", name: "Jules Reyes" },
  { id: "4", name: "Alex Morrow", isYou: true, isMuted: true },
  { id: "5", name: "Naomi Kestrel", isMuted: true, isCameraOff: true, initials: "NK" },
];

const appId = process.env.REACT_APP_AGORA_APP_ID || "";

export const useConferenceSectionController = () => {
  const { id: channelName } = useParams<{ id: string }>();
  const { currentConference, setCurrentConference, joinConference } = useConferenceController(true);
  const { profile } = useProfileStore();

  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [micOn, setMic] = useState(true);
  const [cameraOn, setCamera] = useState(true);

  const client = useRTCClient();
  
  const navigate = useNavigate();

  useEffect(() => {
    if (channelName && profile?.connectionId) {
      joinConference(channelName, profile.connectionId).then((success) => {
        if (!success) {
          navigate("/home");
        }
      });
    }
  }, [profile?.connectionId]);

  const isReady = useMemo(() => 
    !!currentConference && !!profile?.connectionId && !!channelName, 
  [currentConference, profile?.connectionId, channelName]);

  const result = useJoin({ 
    appid: appId, 
    channel: channelName || "", 
    token: currentConference?.token || "",
    uid: profile?.connectionId || 0,
  }, isReady);

  useEffect(() => {
    setIsConnected(result.isConnected);
    setIsLoading(result.isLoading);

    console.log({TEST_JOIN_RESULT: result})
    console.log({ 
    TEST_appid: appId, 
    channel: channelName || "", 
    token: currentConference?.token || "",
    uid: profile?.connectionId || 0,
  })
  }, [result])

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

  const handleLeave = async () => {
    localCameraTrack?.stop();
    localCameraTrack?.close();
    localMicrophoneTrack?.stop();
    localMicrophoneTrack?.close();
    await client.leave();
    setCurrentConference(undefined);
    navigate("/home");
  };


  return {
    channelName,
    localMicrophoneTrack,
    localCameraTrack,
    micOn,
    cameraOn,
    isLoading,
    isConnected,
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

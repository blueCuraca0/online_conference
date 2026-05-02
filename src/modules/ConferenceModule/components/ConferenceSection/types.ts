export interface Participant {
  id: string;
  name: string;
  isHost?: boolean;
  isYou?: boolean;
  isMuted?: boolean;
  isSpeaking?: boolean;
  isCameraOff?: boolean;
  initials?: string;
}

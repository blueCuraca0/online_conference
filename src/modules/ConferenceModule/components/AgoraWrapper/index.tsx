import { FC, memo } from 'react';
import AgoraRTC, { AgoraRTCProvider } from 'agora-rtc-react';

interface AgoraWrapperProps {
  children: React.ReactNode;
};

const AgoraWrapperComponent: FC<AgoraWrapperProps> = ({children}) => {
  const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  
  return (
    <AgoraRTCProvider client={client}>
      {children}
    </AgoraRTCProvider>
  );
};

export const AgoraWrapper = memo(AgoraWrapperComponent);
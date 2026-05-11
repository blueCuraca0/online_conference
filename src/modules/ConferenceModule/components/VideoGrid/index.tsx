import { FC } from "react";
import { SxProps } from "@mui/material";

import { Box } from "ui/Box";
import ParticipantTile from "../ParticipantTile";
import { styles } from "./styles";
import { getVideoGridLayout, getVideoWidth } from "./helpers";
import { ILocalAudioTrack, ILocalVideoTrack, LocalUser, RemoteUser, useRemoteUsers } from "agora-rtc-react";
import { JoinableConference } from "types/conference";

interface Props {
  currentConference: JoinableConference | undefined,
  localMicrophoneTrack: ILocalAudioTrack | null;
  localCameraTrack: ILocalVideoTrack | null;
  micOn: boolean;
  cameraOn: boolean;
}

const VideoGrid: FC<Props> = ({ currentConference, localMicrophoneTrack, localCameraTrack, micOn, cameraOn }) => {
  const remoteUsers = useRemoteUsers();
  // const remoteUsers = new Array(4).fill(remoteUsers1[0]);
  const totalCount = remoteUsers.length + 1;
  const { maxRemoteTiles, columns, rows } = getVideoGridLayout(totalCount);
  const widthSx = getVideoWidth(totalCount, rows);
  const visibleRemote = remoteUsers.slice(0, maxRemoteTiles);

  console.log({ remoteUsers });

  return (
    <Box sx={[styles.root, widthSx, { gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }] as SxProps}>
      {visibleRemote.map((user) => {
        const participant = currentConference.participants.find((p) => p.connectionId === Number(user.uid));

        return (
          <ParticipantTile
            key={user.uid}
            participant={{
              id: String(user.uid),
              name: participant?.name ?? String(user.uid),
              isMuted: !user.hasAudio,
              isCameraOff: !user.hasVideo,
            }}
          >
            <RemoteUser user={user} playAudio={user.hasAudio} style={{ width: "100%", height: "100%" }} />
          </ParticipantTile>
        )
      })}

      <ParticipantTile
        participant={{
          id: "local",
          name: "You",
          isYou: true,
          isMuted: !micOn,
          isCameraOff: !cameraOn,
        }}
      >
        <LocalUser
          cameraOn={cameraOn}
          micOn={micOn}
          videoTrack={localCameraTrack}
          style={{ width: "100%", height: "100%", minHeight: 0 }}
        />
      </ParticipantTile>
    </Box>
  )
};

export default VideoGrid;

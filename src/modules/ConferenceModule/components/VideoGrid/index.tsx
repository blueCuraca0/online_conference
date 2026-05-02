import { FC } from "react";

import { Box } from "ui/Box";
import { Participant } from "../ConferenceSection/types";
import ParticipantTile from "../ParticipantTile";
import { styles } from "./styles";

interface Props {
  participants: Participant[];
}

const VideoGrid: FC<Props> = ({ participants }) => (
  <Box sx={styles.root}>
    {participants.map((p) => (
      <ParticipantTile key={p.id} participant={p} />
    ))}
  </Box>
);

export default VideoGrid;

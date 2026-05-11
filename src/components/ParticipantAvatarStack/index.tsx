import { FC } from "react";
import { SxProps } from "@mui/material";

import { Box } from "ui/Box";
import ProfileAvatar from "components/ProfileAvatar";
import { basicTheme } from "theme";

const { mainPalette } = basicTheme.palette;

const MAX_VISIBLE = 5;
const OVERLAP = 8;

interface Participant {
  userId: string;
  name: string | null;
}

interface Props {
  participants: Participant[];
  size?: number;
  sx?: SxProps;
}

const ParticipantAvatarStack: FC<Props> = ({ participants, size = 24, sx }) => {
  const visible = participants.slice(0, MAX_VISIBLE);
  const overflow = participants.length - MAX_VISIBLE;
  const totalWidth = (visible.length + (overflow > 0 ? 1 : 0)) * (size - OVERLAP) + OVERLAP;

  return (
    <Box sx={{ position: "relative", width: totalWidth, height: size, flexShrink: 0, ...sx }}>
      {visible.map((p, i) => (
        <Box
          key={p.userId}
          sx={{
            position: "absolute",
            left: i * (size - OVERLAP),
            zIndex: i,
            borderRadius: "50%",
            border: `2px solid ${mainPalette.white}`,
            boxSizing: "content-box",
          }}
        >
          <ProfileAvatar name={p.name || "?"} userId={p.userId} size={size} />
        </Box>
      ))}
      {overflow > 0 && (
        <Box
          sx={{
            position: "absolute",
            left: visible.length * (size - OVERLAP),
            zIndex: visible.length,
            borderRadius: "50%",
            border: `2px solid ${mainPalette.white}`,
            boxSizing: "content-box",
          }}
        >
          <ProfileAvatar name="" label="···" size={size} sx={{ background: "rgba(0,0,0,0.18)" }} />
        </Box>
      )}
    </Box>
  );
};

export default ParticipantAvatarStack;

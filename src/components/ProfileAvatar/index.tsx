import { FC } from "react";
import { SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { basicTheme } from "theme";

const { mainPalette } = basicTheme.palette;

interface Props {
  name?: string;
  size?: number;
  label?: string;
  userId?: string;
  onClick?: () => void;
  sx?: SxProps;
}

const ProfileAvatar: FC<Props> = ({ name, size = 24, label, userId, onClick, sx }) => {
  const navigate = useNavigate();

  const initials = label ?? (() => {
    if (!name) return "  ";
    const words = name.trim().split(/\s+/);
    return words.length >= 2
      ? (words[0][0] + words[1][0]).toUpperCase()
      : name.slice(0, 2).toUpperCase();
  })();

  const fontSize = Math.round(size * 0.375);

  const handleClick = onClick ?? (userId ? () => navigate(`/user/${userId}`) : undefined);

  return (
    <Box
      onClick={handleClick}
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle at 35% 35%, ${mainPalette.primaryLight}, ${mainPalette.primary})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        cursor: handleClick ? "pointer" : "default",
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontSize: `${fontSize}px !important`,
          fontWeight: "700 !important",
          color: mainPalette.white,
          fontFamily: "'RockStarBold', Arial, serif",
          lineHeight: "1 !important",
        }}
      >
        {initials}
      </Typography>
    </Box>
  );
};

export default ProfileAvatar;

import { SxProps } from "@mui/material";

interface GridLayout {
  maxRemoteTiles: number;
  columns: number;
  rows: number;
}

// Determines grid dimensions and tile cap based on total participant count (remote + 1 local).
export function getVideoGridLayout(totalCount: number): GridLayout {
  const capped = Math.min(totalCount, 9);

  if (capped <= 1) return { maxRemoteTiles: 0, columns: 1, rows: 1 };
  if (capped === 2) return { maxRemoteTiles: 1, columns: 2, rows: 1 };
  if (capped === 3) return { maxRemoteTiles: 2, columns: 3, rows: 1 };
  if (capped === 4) return { maxRemoteTiles: 3, columns: 2, rows: 2 };
  if (capped <= 6) return { maxRemoteTiles: capped - 1, columns: 3, rows: 2 };

  return { maxRemoteTiles: 8, columns: 3, rows: 3 };
}

export function getVideoWidth(totalCount: number, rows: number): SxProps {
  if (totalCount === 1) return { width: { mobile: "100%", tablet: "80%", laptop: "65%" }};
  return {width: { mobile: "100%", laptop: rows === 1 ? "100%" : "75%" }}
}

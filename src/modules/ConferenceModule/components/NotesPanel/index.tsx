import { FC } from "react";
import { Drawer, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "./styles";

interface Props {
  open: boolean;
  notes: string | null;
  onClose: () => void;
}

const NotesPanel: FC<Props> = ({ open, notes, onClose }) => {
  const { t } = useTranslation();

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={styles.drawer as SxProps}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>{t("toolbarNotes")}</Typography>
        <Box component="button" sx={styles.closeButton as SxProps} onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <line x1="18" y1="6" x2="6" y2="18" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="6" y1="6" x2="18" y2="18" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </Box>
      </Box>

      <Box sx={styles.content}>
        {notes ? (
          <Box dangerouslySetInnerHTML={{ __html: notes }} />
        ) : (
          <Typography sx={styles.emptyText}>{t("notesEmpty")}</Typography>
        )}
      </Box>
    </Drawer>
  );
};

export default NotesPanel;

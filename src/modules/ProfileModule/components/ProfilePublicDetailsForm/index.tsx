import { FC } from "react";
import { SxProps } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "../ProfileSection/styles";

interface ProfileFormValues {
  displayName: string;
  pronouns: string;
  role: string;
  timezone: string;
  bio: string;
}

interface Props {
  register: UseFormRegister<ProfileFormValues>;
  onSave: () => void;
}

const ProfilePublicDetailsForm: FC<Props> = ({ register, onSave }) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.card as SxProps}>
      <Typography sx={styles.cardTitle}>{t("profilePublicDetails")}</Typography>

      <Box sx={styles.fieldsGrid as SxProps}>
        <Box>
          <Typography sx={styles.fieldLabel}>{t("profileDisplayName")}</Typography>
          <Box component="input" sx={styles.fieldInput as SxProps} {...register("displayName")} />
        </Box>
        <Box>
          <Typography sx={styles.fieldLabel}>{t("profilePronouns")}</Typography>
          <Box component="input" sx={styles.fieldInput as SxProps} {...register("pronouns")} />
        </Box>
        <Box>
          <Typography sx={styles.fieldLabel}>{t("settingsRole")}</Typography>
          <Box component="input" sx={styles.fieldInput as SxProps} {...register("role")} />
        </Box>
        <Box>
          <Typography sx={styles.fieldLabel}>{t("profileTimezone")}</Typography>
          <Box component="input" sx={styles.fieldInput as SxProps} {...register("timezone")} />
        </Box>
      </Box>

      <Box>
        <Typography sx={styles.bioHint}>{t("profileShortBio")}</Typography>
        <Box component="textarea" sx={styles.bioInput as SxProps} {...register("bio")} />
      </Box>

      <Box component="button" sx={styles.saveBtn as SxProps} onClick={onSave}>
        {t("profileSaveChanges")}
      </Box>
    </Box>
  );
};

export default ProfilePublicDetailsForm;

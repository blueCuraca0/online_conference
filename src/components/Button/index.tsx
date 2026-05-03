import { FC, ReactNode } from "react";

import { CircularProgress, ButtonProps as MuiButtonProps } from "@mui/material";
import { Button as MuiButton } from "ui/Button";
import { Typography } from "ui/Typography";

import { SxProps } from "@mui/material";
import { styles } from "./styles";
import { basicTheme } from "theme";

export enum EButtonType {
  PRIMARY,
  SECONDARY,
  OUTLINED,
  OUTLINED_ON_DARK,
  WHITE,
  GHOST,
}

export interface ButtonProps extends MuiButtonProps {
  variantType?: EButtonType;
  buttonTitle: string | ReactNode;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  variantType = EButtonType.PRIMARY,
  buttonTitle,
  loading = false,
  ...rest
}) => {
  const buttonStyle = (variantType: EButtonType): SxProps => {
    const variantStyles: Record<EButtonType, SxProps> = {
      [EButtonType.PRIMARY]: styles.buttonPrimary,
      [EButtonType.SECONDARY]: styles.buttonSecondary,
      [EButtonType.OUTLINED]: styles.buttonOutlined,
      [EButtonType.OUTLINED_ON_DARK]: styles.buttonOutlinedOnDark,
      [EButtonType.WHITE]: styles.buttonWhite,
      [EButtonType.GHOST]: styles.buttonGhost,
    };
    return { ...styles.button, ...variantStyles[variantType], ...rest.sx } as SxProps;
  };

  return (
    <MuiButton {...rest} sx={buttonStyle(variantType)} disableRipple disabled={loading || rest.disabled}>
      {typeof buttonTitle === "string" ? (
        <Typography variant="buttonTextSmall">{buttonTitle}</Typography>
      ) : (
        buttonTitle
      )}

      {loading && <CircularProgress size={"1rem"} sx={styles.progress}/>}
    </MuiButton>
  );
};

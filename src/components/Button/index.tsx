import { FC, ReactNode } from "react";

import { ButtonProps as MuiButtonProps } from "@mui/material";
import { Button as MuiButton } from "ui/Button";
import { Typography } from "ui/Typography";

import { SxProps } from "@mui/material";
import { styles } from "./styles";
import { basicTheme } from "theme";

export enum EButtonType {
  PRIMARY,
  SECONDARY,
}

export interface ButtonProps extends MuiButtonProps {
  variantType?: EButtonType;
  buttonTitle: string | ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variantType = EButtonType.PRIMARY,
  buttonTitle,
  ...rest
}) => {
  const buttonStyle = (variantType: EButtonType): SxProps => {
    if (variantType === EButtonType.SECONDARY) {
      return {
        ...styles.button,
        ...styles.buttonSecondary,
        ...rest.sx,
      } as SxProps;
    }

    return {
      ...styles.button,
      ...styles.buttonPrimary,
      ...rest.sx,
    } as SxProps;
  };

  return (
    <MuiButton {...rest} sx={buttonStyle(variantType)} disableRipple>
      {typeof buttonTitle === "string" ? (
        <Typography variant="buttonTextSmall">{buttonTitle}</Typography>
      ) : (
        buttonTitle
      )}
    </MuiButton>
  );
};

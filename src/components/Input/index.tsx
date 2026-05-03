import { ReactNode, forwardRef } from "react";
import { OutlinedInputProps, SxProps } from "@mui/material";
import { OutlinedInput } from "ui/OutlinedInput";
import { InputAdornment } from "ui/InputAdornment";
import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "./styles";

export enum EInputType {
  DEFAULT,
  MULTILINE,
}

export interface InputProps extends Omit<OutlinedInputProps, "startAdornment"> {
  variantType?: EInputType;
  startAdornment?: ReactNode;
  label?: string;
  wrapperSx?: SxProps;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variantType = EInputType.DEFAULT, startAdornment, label, wrapperSx, sx, ...rest }, ref) => {
    const isMultiline = variantType === EInputType.MULTILINE;

    const input = (
      <OutlinedInput
        {...rest}
        inputRef={ref}
        multiline={isMultiline}
        startAdornment={
          startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : undefined
        }
        sx={{ ...styles.root, ...(isMultiline ? styles.multiline : {}), ...sx } as SxProps}
      />
    );

    if (!label) return input;

    return (
      <Box sx={{ ...styles.wrapper, ...wrapperSx } as SxProps}>
        <Typography sx={styles.label}>{label}</Typography>
        {input}
      </Box>
    );
  }
);

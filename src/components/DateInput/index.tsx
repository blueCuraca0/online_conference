import { FC } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { SxProps } from "@mui/material";
import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "./styles";

export enum EDateInputType {
  DATE,
  TIME,
}

interface DateInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  variantType?: EDateInputType;
  label?: string;
  wrapperSx?: SxProps;
  sx?: SxProps;
}

export const DateInput = <T extends FieldValues>({
  name,
  control,
  variantType = EDateInputType.DATE,
  label,
  wrapperSx,
  sx,
}: DateInputProps<T>) => {
  const pickerSx = { ...styles.picker, ...sx } as SxProps;

  const picker = (
    <Controller
      name={name}
      control={control}
      render={({ field }) =>
        variantType === EDateInputType.TIME ? (
          <TimePicker
            value={field.value}
            onChange={field.onChange}
            sx={pickerSx}
          />
        ) : (
          <DatePicker
            value={field.value}
            onChange={field.onChange}
            sx={pickerSx}
          />
        )
      }
    />
  );

  if (!label) return picker;

  return (
    <Box sx={{ ...styles.wrapper, ...wrapperSx } as SxProps}>
      <Typography sx={styles.label}>{label}</Typography>
      {picker}
    </Box>
  );
};

export default DateInput as FC;

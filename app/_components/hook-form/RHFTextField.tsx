import { useFormContext, Controller } from 'react-hook-form';
import { InputProps, TextField, TextFieldProps } from '@mui/material';
import React from 'react';

interface RHFTextFieldProps {
  name: string;
  helperText?: React.ReactNode;
  label?: string;
  type?: string;
  InputProps?: InputProps
}

export default function RHFTextField({ name, helperText, ...other }: RHFTextFieldProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        />
      )}
    />
    
  );
}

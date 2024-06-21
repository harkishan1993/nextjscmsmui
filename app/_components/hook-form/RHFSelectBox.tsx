import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface RHFSelectBoxProps {
    name: string;
    helperText?: React.ReactNode;
    label?: string;
    type?: string;
}

function RHFSelectBox({ name, helperText, label, ...other }: RHFSelectBoxProps) {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <FormControl sx={{ m: 1, minWidth: 120 }} error={!!error}>
                    <InputLabel id={`${name}-label`}>{label}</InputLabel>
                    <Select
                        {...field}
                        labelId={`${name}-label`}
                        id={name}
                        value={field.value || ''}
                        label={label}
                        {...other}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>{error ? error.message : helperText}</FormHelperText>
                </FormControl>
            )}
        />
    );
}

export default RHFSelectBox;

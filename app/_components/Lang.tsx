'use client'
import * as React from 'react';
import Image from "next/image";
import TablePagination from '@mui/material/TablePagination';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createTheme, styled, ThemeProvider, useTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';
import { Button, Checkbox, Stack, Typography } from '@mui/material'
import { ThemeList } from '../_theme/palette';
import { useSelector, useDispatch } from '../_redux/store';
import { setTheme } from '../_redux/slice/theme';
type SupportedLocales = keyof typeof locales;


export default function Lang() {
  const dispatch = useDispatch()
  const {selectedTheme} = useSelector((state)=> state.theme)
  const theme = useTheme();
  const handleChange = (
    event: any,
    newAlignment: string | any,
  ) => {
    dispatch(setTheme(event.target.value))
  };
  return (
        <Button variant='outlined'>
            button
        </Button>
  );
}
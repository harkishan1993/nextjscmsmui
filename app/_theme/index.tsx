'use client'
import * as React from 'react';
import { StyledEngineProvider, ThemeProvider as MUIThemeProvider, createTheme, styled, ThemeOptions, Theme } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import palette, { ThemeTypeProp } from './palette';
import typography, { TypographyTypeProp } from './typography';
import breakpoints, { BreackpointType } from './breakpoints';
import shadows, { customShadows, TypeOfShadow } from './shadows';
import { useSelector } from '../_redux/store';
import { RootState } from '../_redux/rootReducer';
import ComponentsOverrides from './overrides';
import Loader from '../_components/custom/Loader';


declare module '@mui/material/styles' {
  interface TypeBackground {
    neutral: string;
  }
}
declare module '@mui/material/styles' {
  interface Theme {
    Shadows: Array<string> | undefined;
    customShadows: TypeOfShadow;
    shape: {
      borderRadius: number;
    }
    direction: 'ltr' | 'rtl'
  }

  interface Breackpoint {
    breakpoints: BreackpointType;
  }
  interface BreackpointOptions {
    breakpoints?: BreackpointType;
  }
  interface ThemeOptions {
    Shadows?: string[]
    customShadows?: TypeOfShadow
    shape?: {
      borderRadius: number;
    }
    direction?: 'ltr' | 'rtl'
  }
  interface Palette {
    palette: ThemeTypeProp;
  }
  interface PaletteOptions {
    palette?: ThemeTypeProp;
  }
  interface Typography {
    typography: TypographyTypeProp;
  }
  interface TypographyOptions {
    typography?: TypographyTypeProp
  }
}

// ----------------------------------------------------------------------
export default function Themeprovider({
  children,
}: {
  children: React.ReactNode;
}) {

  const { themeMode, themeDirection, themeFontFamily } = useSelector((state: RootState) => state.theme)
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setLoading(false)
  }, [])
  const ThemeOption: ThemeOptions = React.useMemo(() => {
    return {
      palette: palette[themeMode],
      typography : {...typography, fontFamily: themeFontFamily},
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      Shadows: shadows[themeMode],
      customShadows: customShadows[themeMode]
    }
  }, [themeDirection, themeMode, themeFontFamily]);
  ThemeOption.components = ComponentsOverrides(ThemeOption);
  const theme = createTheme(ThemeOption);
  if (loading) {
    return (
      <Loader />
    )
  }
  return (
    <>
      <StyledEngineProvider>
        <MUIThemeProvider theme={theme} >
          <CssBaseline />
          {children}
        </ MUIThemeProvider>
      </StyledEngineProvider>
    </>
  );
}


import React, { useMemo } from 'react';
// @mui
import { alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import ComponentsOverrides from '@/app/_theme/overrides';
import { useSelector } from '@/app/_redux/store';
import { RootState } from '@/app/_redux/rootReducer';
// hooks

//


// ----------------------------------------------------------------------


export default function ThemeColorPresets({ children }: {children: React.ReactNode}) {
  const defaultTheme = useTheme();
  const { setColor } = useSelector((state: RootState)=>state.theme);
  const themeOptions: any = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        primary: setColor,
      },
      customShadows: {
        ...defaultTheme.customShadows,
        primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`,
      },
    }),
    [setColor, defaultTheme]
  );

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

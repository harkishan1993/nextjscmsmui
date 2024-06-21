
import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { alpha, ThemeProvider, createTheme, useTheme, ThemeOptions, Theme } from '@mui/material/styles';
// hooks

//
import componentsOverride from '@/app/_theme/overrides';
import { useSelector } from '@/app/_redux/store';
import { RootState } from '@/app/_redux/rootReducer';

// ----------------------------------------------------------------------

export default function ThemeContrast({ children }:Readonly<{children: React.ReactNode}>) {
  const defaultTheme = useTheme();

  const { themeContrast } = useSelector((state: RootState)=> state.theme);

  const isLight = defaultTheme.palette.mode === 'light';

  const shadowColor = isLight ? defaultTheme.palette.grey[500] : defaultTheme.palette.common.black;

  const styles: any = {
    bgDefault: defaultTheme.palette.background.default,
    bgBold: isLight ? defaultTheme.palette.grey[100] : defaultTheme.palette.grey[900],
    cardDefault: defaultTheme.components?.MuiCard?.styleOverrides?.root,
    cardBold: {
      zIndex: 0,
      position: 'relative',
      borderRadius: Number(defaultTheme.shape.borderRadius) * 2,
      boxShadow: `0 0 1px 0 ${alpha(shadowColor, 0.48)}, 0 2px 4px -1px ${alpha(shadowColor, 0.24)}`,
    },
  };

  const themeOptions:ThemeOptions = useMemo(
    () => ({
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        background: {
          ...defaultTheme.palette.background,
          default: themeContrast === 'bold' ? styles.bgBold : styles.bgDefault,
        },
      },
      components: {
        MuiCard: {
          styleOverrides: {
            root: themeContrast === 'bold' ? styles.cardBold : styles.cardDefault,
          },
        },
      },
    }),

    [defaultTheme, styles.bgBold,styles.bgDefault,styles.cardBold,styles.cardDefault, themeContrast]
  );

  const theme = createTheme(themeOptions);

  theme.components = {
    ...componentsOverride(theme),
    MuiCard: themeOptions.components?.MuiCard,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

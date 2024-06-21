
// @mui
import { ThemeOptions, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
// hooks
import * as locales from '@mui/material/locale';
import useLocales from '@/app/_hooks/useLocales';

// ----------------------------------------------------------------------


export default function ThemeLocalization({ children }: {children: React.ReactNode}) {
  const defaultTheme = useTheme<ThemeOptions>();
  const { currentLang } = useLocales();
  const theme = createTheme(defaultTheme,currentLang.systemValue);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

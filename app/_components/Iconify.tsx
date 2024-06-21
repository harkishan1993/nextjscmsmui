
// icons
import { Icon as iconSvg, IconifyIcon, IconProps } from '@iconify/react';
// @mui
import { Box, SxProps, useTheme } from '@mui/material';

// ----------------------------------------------------------------------
interface IconProp {
  icon: | IconifyIcon | string ;
  sx?: SxProps;
  width? : number | string;
  height? : number | string ;
}

export default function Iconify({ icon, sx, ...other } : IconProp) {
  const theme = useTheme()
  return <Box component={iconSvg} color={theme.palette.text.secondary} icon={icon} sx={{ ...sx }} {...other} />;
}

// ----------------------------------------------------------------------

import { ThemeOptions } from "@mui/material/styles";

export default function Badge(theme: ThemeOptions | any) {
  return {
    MuiBadge: {
      styleOverrides: {
        dot: {
          width: 10,
          height: 10,
          borderRadius: '50%',
        },
      },
    },
  };
}

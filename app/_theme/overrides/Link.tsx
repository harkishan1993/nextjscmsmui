// ----------------------------------------------------------------------

import { ThemeOptions } from "@mui/material/styles";

export default function Link(theme: ThemeOptions) {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  };
}

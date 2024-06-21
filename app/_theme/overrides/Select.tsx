import { ThemeOptions } from '@mui/material/styles';
import { InputSelectIcon } from './CustomIcons';

// ----------------------------------------------------------------------

export default function Select(theme: ThemeOptions) {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
    },
  };
}


// @mui
import { alpha, styled, Theme } from '@mui/material/styles';

// utils
// import cssStyles from '../../../utils/cssStyles';
//
import Iconify from '../../Iconify';
import IconButtonAnimate from '../../animate/IconButtonAnimate';
import { Tooltip } from '@mui/material';



// ----------------------------------------------------------------------

const RootStyle = styled('span')(({ theme }) => ({
  // ...cssStyles(theme).bgBlur({ opacity: 0.64 }),
  right: 0,
  top: '50%',
  position: 'fixed',
  marginTop: theme.spacing(-3),
  padding: theme.spacing(0.5),
  zIndex: theme.zIndex.drawer + 2,
  borderRadius: '24px 0 20px 24px',
  boxShadow: `-12px 12px 32px -4px ${alpha(
    theme.palette.mode === 'light' ? theme.palette.grey[600] : theme.palette.common.black,
    0.36
  )}`,
}));

const DotStyle = styled('span')(({ theme }) => ({
  top: 8,
  width: 8,
  height: 8,
  right: 10,
  borderRadius: '50%',
  position: 'absolute',
  backgroundColor: theme.palette.error.main,
}));

// ----------------------------------------------------------------------


interface ToggleButtonProp {
  notDefault: boolean;
  open: boolean;
  onToggle : ()=> void
}

export default function ToggleButton({ notDefault, open, onToggle }:ToggleButtonProp) {
  return (
    <RootStyle>
      {notDefault && !open && <DotStyle />}

      <Tooltip title="Settings" placement="left">
        <IconButtonAnimate
          color="inherit"
          onClick={onToggle}
          sx={{
            p: 1.25,
            transition: (theme:Theme) => theme.transitions.create('all'),
            '&:hover': {
              color: 'primary.main',
              bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            },
          }}
        >
          <Iconify icon="eva:options-2-fill" width={20} height={20} />
        </IconButtonAnimate>
      </Tooltip>
    </RootStyle>
  );
}

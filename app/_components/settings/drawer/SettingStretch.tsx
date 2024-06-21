// @mui
import { alpha, styled } from '@mui/material/styles';
import { CardActionArea, Stack } from '@mui/material';
//
import Iconify from '../../Iconify';
import { useDispatch, useSelector } from '@/app/_redux/store';
import { RootState } from '@/app/_redux/rootReducer';
import { setThemeStretch } from '@/app/_redux/slice/theme';

// ----------------------------------------------------------------------

const BoxStyle = styled(CardActionArea)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.disabled,
  border: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  backgroundColor: theme.palette.background.neutral,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
}));

// ----------------------------------------------------------------------

export default function SettingStretch() {
  const {themeStretch, themeLayout} = useSelector((state:RootState)=> state.theme)
  const dispatch = useDispatch()
  const handleChage = ()=> {
    themeLayout !== 'vertical' &&  dispatch(setThemeStretch(!themeStretch))
  }
  const ICON_SIZE = {
    width: themeStretch ? 24 : 18,
    height: themeStretch ? 24 : 18,
  };

  return (
    <BoxStyle
      onClick={handleChage}
      sx={{
        ...(themeStretch && {
          color: (theme) => theme.palette.primary.main,
        }),
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          px: 1,
          mx: 'auto',
          width: 0.5,
          height: 40,
          borderRadius: 1,
          color: 'action.active',
          bgcolor: themeLayout !== 'vertical' ? 'background.default' : 'lightgray',
          boxShadow: (theme) => theme.customShadows.z12,
          transition: (theme) => theme.transitions.create('width'),
          ...(themeStretch && {
            width: 1,
            color: 'primary.main',
          }),
        }}
      >
        <Iconify icon={themeStretch ? 'eva:arrow-ios-back-fill' : 'eva:arrow-ios-forward-fill'} {...ICON_SIZE} />
        <Iconify icon={themeStretch ? 'eva:arrow-ios-forward-fill' : 'eva:arrow-ios-back-fill'} {...ICON_SIZE} />
      </Stack>
    </BoxStyle>
  );
}

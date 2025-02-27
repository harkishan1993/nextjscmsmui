// @mui
import { alpha, styled} from '@mui/material/styles';
import { Grid, RadioGroup, CardActionArea } from '@mui/material';
// hooks
//
import Iconify from '../../Iconify';
import BoxMask from './BoxMask';
import { useDispatch, useSelector } from '@/app/_redux/store';
import { RootState } from '@/app/_redux/rootReducer';
import { setTheme, ThemeModeProp } from '@/app/_redux/slice/theme';

// ----------------------------------------------------------------------

const BoxStyle = styled(CardActionArea)(({ theme }) => ({
  height: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  border: `solid 1px ${alpha(theme.palette.grey[500],0.12)}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
}));

// ----------------------------------------------------------------------

export default function SettingMode() {
  const {themeMode}= useSelector((state: RootState)=>state.theme)
const dispatch = useDispatch()
const handleChange = ()=>{
  let themeChange: ThemeModeProp = themeMode == "light" ? "dark":"light"
  dispatch(setTheme(themeChange))
}
  return (
    <RadioGroup name="themeMode" value={themeMode} onChange={handleChange}>
      <Grid dir="ltr" container spacing={2.5}>
        {['light', 'dark'].map((mode, index) => {
          const isSelected = themeMode === mode;

          return (
            <Grid key={index} item xs={6}>
              <BoxStyle
                sx={{
                  bgcolor: mode === 'light' ? 'common.white' : 'grey.800',
                  ...(isSelected && {
                    color: 'primary.main',
                    boxShadow: (theme) => theme.customShadows.z20,
                  }),
                }}
              >
                <Iconify icon={index === 0 ? 'ph:sun-duotone' : 'ph:moon-duotone'} width={28} height={28} />
                <BoxMask value={mode} />
              </BoxStyle>
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
}

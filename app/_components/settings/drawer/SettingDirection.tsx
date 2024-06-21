// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, RadioGroup, CardActionArea } from '@mui/material';
//
import Iconify from '../../Iconify';
import BoxMask from './BoxMask';
import { useDispatch, useSelector } from '@/app/_redux/store';
import { RootState } from '@/app/_redux/rootReducer';
import { setDirection, ThemeDirectionProp } from '@/app/_redux/slice/theme';
;

// ----------------------------------------------------------------------

const BoxStyle = styled(CardActionArea)(({ theme }) => ({
  height: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  border: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
}));

// ----------------------------------------------------------------------

export default function SettingDirection() {
const {themeDirection} = useSelector((state:RootState)=> state.theme)
const dispatch = useDispatch()
const handleChage = () => {
  let toggleBtn: ThemeDirectionProp = themeDirection == "ltr" ? "rtl" : "ltr"
  dispatch(setDirection(toggleBtn))
}
  return (
    <RadioGroup name="themeDirection" value={themeDirection} onChange={handleChage}>
      <Grid dir="ltr" container spacing={2.5}>
        {['ltr', 'rtl'].map((direction, index) => {
          const isSelected = themeDirection === direction;

          return (
            <Grid key={index} item xs={6}>
              <BoxStyle
                sx={{
                  ...(isSelected && {
                    color: 'primary.main',
                    boxShadow: (theme) => theme.customShadows.z20,
                  }),
                }}
              >
                <Iconify
                  icon={index === 0 ? 'ph:align-left-duotone' : 'ph:align-right-duotone'}
                  width={28}
                  height={28}
                />
                <BoxMask value={direction} />
              </BoxStyle>
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
}

// @mui
import { alpha, styled } from '@mui/material/styles';
import { Grid, RadioGroup, CardActionArea } from '@mui/material';
//
import Iconify from '../../Iconify';
import BoxMask from './BoxMask';
import { useDispatch, useSelector } from '@/app/_redux/store';
import { RootState } from '@/app/_redux/rootReducer';
import { setContrast } from '@/app/_redux/slice/theme';

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

export default function SettingContrast() {
  const { themeContrast } = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()
  const handleChage = () => {
    let toggleBtn = themeContrast == 'bold' ? 'default' : 'bold'
    dispatch(setContrast(toggleBtn))
  }
  return (
    <RadioGroup name="themeContrast" value={themeContrast} onChange={handleChage}>
      <Grid dir="ltr" container spacing={2.5}>
        {['default', 'bold'].map((contrast, index) => {
          const isSelected = themeContrast === contrast;

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
                <Iconify icon={index === 0 ? 'cil:contrast' : 'ion:contrast-outline'} width={28} height={28} />
                <BoxMask value={contrast} />
              </BoxStyle>
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
}

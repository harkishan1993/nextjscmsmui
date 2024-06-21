// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Grid, RadioGroup, CardActionArea } from '@mui/material';
import BoxMask from './BoxMask';
import { useDispatch, useSelector } from '@/app/_redux/store';
import { RootState } from '@/app/_redux/rootReducer';
import { ChangeEvent } from 'react';
import { setthemeColorPresets } from '@/app/_redux/slice/theme';


// ----------------------------------------------------------------------

const BoxStyle = styled(CardActionArea)(({ theme }) => ({
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  border: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.25,
}));

// ----------------------------------------------------------------------

export default function SettingColorPresets() {
  const { themeColorPresets, colorOption } = useSelector((state: RootState)=>state.theme);
  const dispatch = useDispatch()
const handleChage = (e: ChangeEvent<HTMLInputElement>)=>{
      dispatch(setthemeColorPresets(e.target.value))
}
  return (
    <RadioGroup name="themeColorPresets" value={themeColorPresets} onChange={handleChage}>
      <Grid dir="ltr" container spacing={1.5}>
        {colorOption.map((color: any, index) => {
          const colorName = color.name;
          const colorValue = color.value;
          const isSelected = themeColorPresets === colorName;

          return (
            <Grid key={index} item xs={4}>
              <BoxStyle
                sx={{
                  ...(isSelected && {
                    bgcolor: alpha(colorValue, 0.08),
                    border: `solid 2px ${colorValue}`,
                    boxShadow: `inset 0 4px 8px 0 ${alpha(colorValue, 0.24)}`,
                  }),
                }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 14,
                    borderRadius: '50%',
                    bgcolor: colorValue,
                    transform: 'rotate(-45deg)',
                    transition: (theme) =>
                      theme.transitions.create('all', {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                      }),
                    ...(isSelected && { transform: 'none' }),
                  }}
                />

                <BoxMask value={colorName} />
              </BoxStyle>
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
}

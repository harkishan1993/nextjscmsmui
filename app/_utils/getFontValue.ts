// import { useTheme, Theme } from '@mui/material/styles';
// import { Breakpoint } from '@mui/system';
// // hooks
// import useResponsive from '../_hooks/useResponsive';

// // ----------------------------------------------------------------------

// type VariantProp = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// export default function GetFontValue(variant: VariantProp) {
//   const theme = useTheme() as Theme;
//   const breakpoints = useWidth();

//   const key = theme.breakpoints.up(breakpoints === 'xl' ? 'lg' : breakpoints);

//   const hasResponsive = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant);

//   const getFont = hasResponsive && theme.typography[variant][key] ? theme.typography[variant][key] : theme.typography[variant];

//   const fontSize = remToPx(getFont.fontSize);

//   const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;

//   const { fontWeight } = theme.typography[variant];

//   const { letterSpacing } = theme.typography[variant];

//   return { fontSize, lineHeight, fontWeight, letterSpacing };
// }

// ----------------------------------------------------------------------

export function remToPx(value: string): number {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number): string {
  return `${value / 16}rem`;
}

// interface ResponsiveFontSizesProps {
//   sm: number;
//   md: number;
//   lg: number;
// }

// export function responsiveFontSizes({ sm, md, lg }: ResponsiveFontSizesProps) {
//   return {
//     '@media (min-width:600px)': {
//       fontSize: pxToRem(sm),
//     },
//     '@media (min-width:900px)': {
//       fontSize: pxToRem(md),
//     },
//     '@media (min-width:1200px)': {
//       fontSize: pxToRem(lg),
//     },
//   };
// }

// // ----------------------------------------------------------------------

// function useWidth(): Breakpoint {
//   const theme = useTheme() as Theme;

//   const keys = [...theme.breakpoints.keys].reverse();

//   return (
//     keys.reduce<Breakpoint | null>((output, key) => {
//       const matches = useResponsive('up', key);

//       return !output && matches ? key : output;
//     }, null) || 'xs'
//   );
// }

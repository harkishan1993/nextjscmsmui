import { pxToRem} from '../_utils/getFontValue';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { fontFamily } from './fontfamily';


const FONT_PRIMARY = 'Manrope, Public Sans, sans-serif'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

interface FontStyle {
  fontWeight: number;
  lineHeight: number | string;
  fontSize: string;
  letterSpacing?: number;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
  [key: string]: any; // To accommodate responsiveFontSizes and other properties
}

interface ExtendedTypographyOptions extends TypographyOptions {
  article: FontStyle;
}

const typography: ExtendedTypographyOptions = {
  fontFamily: fontFamily[0].fontfamily.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    letterSpacing: 2,
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 700,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    fontWeight: 400,
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    fontWeight: 600,
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    fontWeight: 600,
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
  },
  article: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  }
};

export type TypographyTypeProp = typeof typography;

export default typography;

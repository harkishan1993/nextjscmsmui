import { Color } from "@mui/material";
import { blue } from "@mui/material/colors";
import { alpha , TypeBackground } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}


interface ColorProp {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
}

export interface GreyProp extends Omit<Color, 50 | 'A100' | 'A200' | 'A400' | 'A700' > {
  0: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  500_8: string;
  500_12: string;
  500_16: string;
  500_24: string;
  500_32: string;
  500_48: string;
  500_56: string;
  500_80: string;
}

interface GradientTypeProp {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

type StringArray = string[];

interface ChartColorProp {
  violet: StringArray;
  blue: StringArray;
  green: StringArray;
  yellow: StringArray;
  red: StringArray;
}

interface PrimaryTypeProp extends ColorProp {
  contrastText: string;
}

interface ActionColorProp {
  hover: string;
  selected: string;
  disabled: string;
  disabledBackground: string;
  focus: string;
  hoverOpacity: number;
  disabledOpacity: number;
}

interface CommonProp {
  common: { black: string; white: string };
  primary: PrimaryTypeProp;
  secondary: PrimaryTypeProp;
  info: PrimaryTypeProp;
  success: PrimaryTypeProp;
  warning: PrimaryTypeProp;
  error: PrimaryTypeProp;
  grey: GreyProp;
  gradients: GradientTypeProp;
  chart: ChartColorProp;
  divider: string;
  action: ActionColorProp;
}

// SETUP COLORS
const PRIMARY: ColorProp = {
  lighter: "#C8FACD",
  light: "#5BE584",
  main: "#0162C4",
  dark: "#007B55",
  darker: "#005249",
};
const SECONDARY: ColorProp = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
};
const INFO: ColorProp = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
};
const SUCCESS: ColorProp = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
};
const WARNING: ColorProp = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
};
const ERROR: ColorProp = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
};

const GREY: GreyProp = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const GRADIENTS: GradientTypeProp = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS: ChartColorProp = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const COMMON: CommonProp = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#fff" },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

interface ActionThemeProp extends ActionColorProp {
  active: string;
}

export interface ThemeTypeProp extends CommonProp {
  mode: 'light' | 'dark';
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    paper: string;
    default: string;
    neutral: string;
  };
  action: ActionThemeProp;
}

export interface PaletteTypeProp {
  light: ThemeTypeProp;
  dark: ThemeTypeProp;
}

const palette: PaletteTypeProp = {
  light: {
    ...COMMON,
    mode: "light",
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: "#fff", default: "rgba(240, 241, 247,1)", neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: "dark",
    text: { primary: "#CFD3EC", secondary: "#B6BEE3", disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export type Palette = typeof palette.light;

export const ThemeList = Object.keys(palette);

export default palette;

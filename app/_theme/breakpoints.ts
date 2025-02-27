

// ----------------------------------------------------------------------
export interface BreackpointType {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};
const breakpoints: BreackpointType = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

export default breakpoints;

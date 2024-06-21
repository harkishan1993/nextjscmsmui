import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import React, {forwardRef} from 'react';
// @mui
import { Box, IconButton, IconButtonProps } from '@mui/material';

// ----------------------------------------------------------------------

interface AnimateProp extends Omit<IconButtonProps, 'size'> {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const IconButtonAnimate = forwardRef<HTMLButtonElement, AnimateProp>(({ children, size = 'medium', ...other }, ref) => (
  <AnimateWrap size={size}>
    <IconButton size={size} ref={ref} {...other}>
      {children}
    </IconButton>
  </AnimateWrap>
));

// interface AnimateProp {
//   children?: React.ReactNode;
//   color?: | 'inherit' | 'default'| 'primary'| 'secondary'| 'info'| 'success'| 'warning'| 'error';
//   size?: | 'small'| 'medium'| 'large';
//   onClick?: ()=> void;
//   sx?: object;

// }


IconButtonAnimate.displayName = " iconButtonAnimate"
export default IconButtonAnimate;

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 }
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 }
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 }
};

interface AnimateWrapProp {
  children: React.ReactNode;
  size: | 'small'| 'medium'| 'large';
}

function AnimateWrap({ size, children }:AnimateWrapProp) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex'
      }}
    >
      {children}
    </Box>
  );
}

import React, { CSSProperties } from 'react';
import { useDragLayer, XYCoord } from 'react-dnd';
import { ItemTypes } from './Dustubean';
import { Box } from '@mui/material';


const layerStyles: CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
};

interface OffsetProp {
    x: number
    y: number
}

const getItemStyles = (initialOffset: XYCoord | null, currentOffset: XYCoord | null) => {
    if (!initialOffset || !currentOffset) {
      return {
        display: 'none',
      };
    }
  
    const { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`;
    return {
      transform,
      WebkitTransform: transform,
    };
  };
  

export const CustomDragLayer = () => {

    const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));
  
  
    if (!isDragging) {
      return null;
    }
    function renderItem() {
        switch (itemType) {
            case ItemTypes.BOX:
                return <Box
                    sx={{
                        borderRadius: (theme)=> theme.shape.borderRadius + 'px',
                        width: item.width + 'px',
                        height: item.hieght +'px',
                        backgroundColor:  (theme)=> theme.palette.background.paper,
                        boxShadow : (theme) => theme.Shadows,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 2,
                    }}
                >
                    {item.name}
                </Box>;
            default:
                return null;
        }
    }

    return (
        <Box sx={{...layerStyles, cursor:"grab"}}>
            <Box sx={getItemStyles(initialOffset, currentOffset)}>
                {renderItem()}
            </Box>
        </Box>
    );
};

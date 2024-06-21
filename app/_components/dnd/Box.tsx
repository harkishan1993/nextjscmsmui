import type { CSSProperties, FC } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './Dustubean';
import React, { useCallback,useRef} from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from '@/app/_redux/store';
import { setData } from '@/app/_redux/slice/dnd';
import { RootState } from '@/app/_redux/rootReducer';


const style: CSSProperties = {
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'grab',
  float: 'left',
  transition: 'all 0.5s ease'
};

export interface DropResult {
  name: string;
}

export interface BoxProps {
  name: string;
  children: React.ReactNode;
  hieght : number;
  width  : number;
}

export const BoxDrag: FC<BoxProps> = function BoxDrag({ children, name, hieght, width }) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const boxRef1 = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const selectData = useSelector((state: RootState) => state.dnd.data);



  const hoverTracck = useCallback(
    (item: DropResult) => {
      const findDrgIndex = selectData.findIndex((val) => val.name === item.name);
      const hoverElementIndex = selectData.findIndex(
        (val) => val.name === boxRef1.current?.dataset.name
      );

      if (hoverElementIndex !== -1 && findDrgIndex !== -1 && findDrgIndex !== hoverElementIndex) {
        const newArray = [...selectData];
        const [draggedItem] = newArray.splice(findDrgIndex, 1);
        newArray.splice(hoverElementIndex, 0, draggedItem);
        dispatch(setData(newArray));
      }
    },
    [selectData, dispatch]
  );



  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    hover: (item) => hoverTracck(item as DropResult),
    collect: (monitor) => ({
      isOver: monitor.isOver({shallow:false}),
      canDrop: monitor.canDrop(),
    }),
  });

  React.useEffect(() => {
    if (boxRef1.current) {
      drop(boxRef1.current);
    }
  }, [drop]);

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemTypes.BOX,
    item: { name, width, hieght },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        // handle drop result if needed
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });


  const opacity = isOver ? 0 : 1;

  React.useEffect(() => {
    if (boxRef.current) {
      drag(boxRef.current);
    }
    preview(new Image(), { captureDraggingState: true,  });
  }, [drag, preview]);

  return (
    <Box
      ref={boxRef1}
      data-name={name}
      >
        <Box
          sx={{
            ...style,
            borderRadius: (theme)=> theme.shape.borderRadius + 'px',
            width: width + 'px',
            height: hieght +'px',
            backgroundColor:  (theme)=> theme.palette.background.paper,
            boxShadow : (theme) => theme.Shadows,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 2,
            transition: 'all 0.5s ease',
            opacity,
          }}
          data-testid={`box`}
          ref={boxRef}
        >
          {children}
        </Box>
    </Box>
  );
};

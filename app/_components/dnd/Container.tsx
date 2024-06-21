
import type { FC } from 'react'
import { BoxDrag } from './Box'
import { useSelector } from '@/app/_redux/store'
import { RootState } from '@/app/_redux/rootReducer'
import { Stack } from '@mui/material'
import { CustomDragLayer } from './CustemDrag'

import React, { createContext,useState, Dispatch, SetStateAction, useContext } from 'react';

interface DragState {
  currentOffset: { x: number, y: number } | null;
}

interface DragContextValue {
  dragState: DragState;
  setDragState: Dispatch<SetStateAction<DragState>>;
}
const DragContext = createContext<DragContextValue | undefined>(undefined);
export const Container: FC = React.memo(function Container() {
  const selectItem = useSelector((state: RootState) => state.dnd.data)
  const [dragState, setDragState] = useState<DragState>({ currentOffset: null });
  return (
    <DragContext.Provider value={{dragState, setDragState }}>
      <Stack flexDirection={'row'} flexWrap={'wrap'}>
        {
          selectItem.map((val, i) => {
            return <BoxDrag key={i} name={val.name} width={val.width} hieght={val.height}>
              {val.name}
            </BoxDrag>
          })
        }
        <CustomDragLayer />
      </Stack>
    </DragContext.Provider>
  )
})
export const useDragContext = (): DragContextValue => {
  const context = useContext(DragContext);
  if (!context) {
    throw new Error('useDragContext must be used within a DragProvider');
  }
  return context;
};
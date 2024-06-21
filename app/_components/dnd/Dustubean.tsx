import { useDrop } from 'react-dnd'

import { Box } from '@mui/material'
import React, { useRef } from 'react';
const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}
export const ItemTypes = {
    BOX: 'box',
}

const findItem = (item: string) =>{
    console.log(item)
}
export const Dustbin = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: (item) => findItem(item as string),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    React.useEffect(() => {
        if (boxRef.current) {
            drop(boxRef.current);
        }
    }, [drop])
    return (
        <Box ref={boxRef} sx={{ ...style, backgroundColor }} data-testid="dustbin">
            {isActive ? 'Release to drop' : 'Drag a box here'}
        </Box>
    )
}
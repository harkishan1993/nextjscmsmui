import React from 'react'
import { Menu } from '@mui/material';
type MenuReuseProp = {
    children: React.ReactNode;
    anchorEl: HTMLElement | null;
    openMenu: boolean;
    top?:number;
    left?:number;
    clickClose?: boolean
    handleClose: () => void
}
function MenuReuse({ children, anchorEl, openMenu, clickClose, handleClose, top, left }: MenuReuseProp) {

    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={openMenu}
            onClose={handleClose}
            onClick={clickClose?handleClose:()=>{}}
            sx={{
                    top: top,
                    left: left,
                 
            }}
            disableRestoreFocus={true}
            disableEscapeKeyDown={true}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'scroll',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    boxShadow: (theme) => theme.shadows[0],
                    mt: 1.5,
                    maxHeight:360,
                    maxWidth:360,
                    borderRadius: 0.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'relative',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {children}
        </Menu>
    )
}

export default MenuReuse
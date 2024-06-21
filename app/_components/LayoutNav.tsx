import { Box, styled } from '@mui/material'
import React from 'react'
const CustemContent = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        paddingLeft: "50px",
        paddingRight: "50px"
    },
    margin: "auto",
    width: "100%",
    paddingLeft: "10px",
    paddingRight: "10px",
}))
function Layout({ children }: { children: React.ReactNode }) {
    return (
        <CustemContent>
            {children}
        </CustemContent>
    )
}

export default Layout
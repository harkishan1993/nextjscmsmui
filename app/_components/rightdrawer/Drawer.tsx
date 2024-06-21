'use client'
import { alpha, Backdrop, Box, Divider, IconButton, Stack, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import Iconify from '../Iconify'
import ToggleButton from '../settings/drawer/ToggleButton'
import cssStyles from '@/app/_utils/cssStyles'
import { NAVBAR } from '@/config'
import Scrollbar from '../settings/Scrollbar'
const WraperDiv = styled(m.div)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  position: "fixed",
  overflow: "hidden",
  width: NAVBAR.BASE_WIDTH,
    ...cssStyles(theme).bgBlur({
    color: theme.palette.background.paper,
    opacity: 0.92,
  }),
  boxShadow: `-24px 12px 32px -4px ${alpha(
    theme.palette.mode === "light"
      ? theme.palette.grey[500]
      : theme.palette.common.black,
    0.16
  )}`,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  zIndex: theme.zIndex.drawer + 3,
  flexDirection: "column",
  margin: theme.spacing(2),
  paddingBottom: theme.spacing(3),
}))

function Drawer() {
  const [open, setOpen] = useState(false);
   useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Backdrop
        open={open}
        onClick={handleClose}
        sx={{
          background: "transparent",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      />

      {!open && (
        <ToggleButton
          open={open}
          notDefault={false}
          onToggle={handleToggle}
        />
      )}
      <AnimatePresence>
      {open && (
          <>
            <WraperDiv>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ py: 2, pr: 1, pl: 2.5 }}
              >
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                  Settings
                </Typography>

                <IconButton>
                  <Iconify icon={"ic:round-refresh"} width={20} height={20} />
                </IconButton>

                <IconButton onClick={handleClose}>
                  <Iconify icon={"eva:close-fill"} width={20} height={20} />
                </IconButton>
              </Stack>

              <Divider sx={{ borderStyle: "dashed" }} />

              <Scrollbar sx={{ flexGrow: 1 }}>
                <Stack spacing={3} sx={{ p: 3 }}>
                  <Stack spacing={1.5}>
                    <Typography variant="h1" sx={{color: "white"}}>Direction</Typography>
                  </Stack>

                  <Stack spacing={1.5}>
                    <Typography variant="subtitle2">Presets</Typography>
             
                    <Typography variant="subtitle2">Direction</Typography>
              
                  </Stack>
                </Stack>
              </Scrollbar>
            </WraperDiv>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Drawer
'use client'
import { AnimatePresence, m } from "framer-motion";
import React, { useState, useEffect } from "react";
// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Stack,
  Divider,
  Backdrop,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
} from "@mui/material";
// hooks
// import useSettings from "../../../hooks/useSettings";
// // utils
import cssStyles from "@/app/_utils/cssStyles";
// config
import { NAVBAR, defaultSettings } from "@/config";
//
import Iconify from "../../Iconify";
import Scrollbar from "../../../_components/settings/Scrollbar";
//
import ToggleButton from "./ToggleButton";
import SettingDirection from "./SettingDirection";
import SettingFullscreen from "./SettingFullscreen";
import SettingColorPresets from "./SettingColorPresets";
import { useDispatch, useSelector } from "@/app/_redux/store";
import { RootState } from "@/app/_redux/rootReducer";
import SettingContrast from "./SettingContrast";
import SettingLayout from "./SettingLayout";
import SettingStretch from "./SettingStretch";
import CustomizedSwitches from "../../custom/Switch";
import { resetSetting } from "@/app/_redux/slice/theme";
import SelectBox from "../../custom/SelectBox";


// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  ...cssStyles(theme).bgBlur({
    color: theme.palette.background.paper,
    opacity: 0.92,
  }),
  top: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  position: "fixed",
  overflow: "hidden",
  width: NAVBAR.BASE_WIDTH,
  flexDirection: "column",
  margin: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  zIndex: theme.zIndex.drawer + 3,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  boxShadow: `-24px 12px 32px -4px ${alpha(
    theme.palette.mode === "light"
      ? theme.palette.grey[500]
      : theme.palette.common.black,
    0.16
  )}`,
}));

// ---------------------------------------------------------------------- //

export default function SettingsDrawer() {

  const { themeColorPresets, themeMode, themeLayout, themeStretch, themeDirection, themeContrast } = useSelector((state: RootState) => state.theme)
  const [open, setOpen] = useState(false);
  const nediaQuery = useMediaQuery("");
  const dispatch = useDispatch()
  const notDefault =
    themeMode !== defaultSettings.themeMode ||
    themeLayout !== defaultSettings.themeLayout ||
    themeStretch !== defaultSettings.themeStretch ||
    themeContrast !== defaultSettings.themeContrast ||
    themeDirection !== defaultSettings.themeDirection ||
    themeColorPresets !== defaultSettings.themeColorPresets;

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
  const handleRefresh = () => {
    dispatch(resetSetting())
  }
  const handleClickClose = () => {
    setOpen((prev) => !prev);
  }
  
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
          notDefault={notDefault}
          onToggle={handleToggle}
        />
      )}

      <AnimatePresence>
        {
          open && (
            <React.Fragment key={0}>
              <Box
              key={0}
                position={"absolute"}
                top={0}
                bottom={0}
                right={0}
                left={0}
                sx={{
                  zIndex: (theme) => theme.zIndex.drawer + 3,
                  backgroundColor: (theme) => alpha(theme.palette.grey["500"], 0.45)
                }}
                onClick={handleClickClose}
              >
              </Box>
            </ React.Fragment>
          )
        }
        {open && (
          <React.Fragment key={1}>
            <RootStyle>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ py: 2, pr: 1, pl: 2.5 }}
              >
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                  Settings
                </Typography>

                <IconButton onClick={handleRefresh}>
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
                    <Typography variant="subtitle2">Theme</Typography>
                    <CustomizedSwitches />
                    <Typography variant="subtitle2">Font</Typography>
                    <SelectBox />
                    <Typography variant="subtitle2">Presets</Typography>
                    <SettingColorPresets />
                    <Typography variant="subtitle2">Direction</Typography>
                    <SettingDirection />
                    <Typography variant="subtitle2">Contrast</Typography>
                    <SettingContrast />
                    <Typography variant="subtitle2">Layout</Typography>
                    <SettingLayout />
                    <Typography variant="subtitle2">Stretch</Typography>
                    <SettingStretch />
                  </Stack>
                  <SettingFullscreen />
                </Stack>
              </Scrollbar>
            </RootStyle>
          </React.Fragment>
        )}
      </AnimatePresence>
    </>
  );
}

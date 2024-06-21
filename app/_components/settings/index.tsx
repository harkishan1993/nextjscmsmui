'use client'
import SettingsDrawer from "./drawer";
//
import ThemeContrast from "./ThemeContrast";
import ThemeRtlLayout from "./ThemeRtlLayout";
import ThemeColorPresets from "./ThemeColorPresets";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "@/app/_redux/store";
import { RootState } from "@/app/_redux/rootReducer";
import { onloadColorPresets } from "@/app/_redux/slice/theme";

export default function ThemeSettings({
  children,
}: {
  children: React.ReactNode,
}) {
  const {themeColorPresets} = useSelector((state: RootState)=> state.theme)
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(onloadColorPresets())
  },[dispatch,themeColorPresets])
  return (
    <ThemeColorPresets>
      <ThemeContrast>
          <ThemeRtlLayout>
            {children}
            <SettingsDrawer />
          </ThemeRtlLayout>
      </ThemeContrast>
    </ThemeColorPresets>
  );
}

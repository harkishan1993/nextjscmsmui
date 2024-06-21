import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { defaultSettings } from "@/config";
import getColorPresets,{ colorPresets, ColorPresetType, defaultPreset } from "@/app/_utils/getColorPresets";
import { fontFamily } from "@/app/_theme/fontfamily";


export type ThemeModeProp = "light" | "dark";
export type ThemeDirectionProp = "ltr" | "rtl";
export enum ThemeModeOption {
  "light",
  "dark",
}
export interface ThemeStateProp {
  themeMode: ThemeModeProp;
  themeFontFamily: string;
  themeDirection: ThemeDirectionProp;
  themeContrast: string;
  themeLayout: string;
  themeColorPresets: string;
  themeStretch: boolean;
  setColor: ColorPresetType;
  colorOption: object[];
}

const initialState: ThemeStateProp = {
  ...defaultSettings,
  setColor: defaultPreset,
  colorOption: [],
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeModeProp>) => {
      state.themeMode = action.payload;
    },
    setDirection: (state, action: PayloadAction<ThemeDirectionProp>) => {
      state.themeDirection = action.payload;
    },
    setThemeLayout: (state, action: PayloadAction<string>) => {
      state.themeLayout = action.payload;
    },
    setContrast: (state, action: PayloadAction<string>) => {
      state.themeContrast = action.payload;
    },
    setthemeColorPresets: (state, action: PayloadAction<string>) => {
      state.themeColorPresets = action.payload;
    },
    onloadColorPresets: (state)=>{
      state.setColor = getColorPresets(state.themeColorPresets) || defaultPreset;
      state.colorOption = colorPresets.map((color) => ({
        name: color.name,
        value: color.main,
      }))
    },
    setThemeStretch: (state, action: PayloadAction<boolean>) => {
      state.themeStretch = action.payload;
    },
    setFontFamaly: (state, action :PayloadAction<string>)=>{
     state.themeFontFamily = action.payload
    },
    resetSetting: (state) => {
      state.themeColorPresets = "default"
      state.themeMode = "light"
      state.themeFontFamily = fontFamily[0].fontfamily.style.fontFamily
      state.themeDirection = "ltr"
      state.themeContrast = "default"
      state.themeLayout = "horizontal"
      state.themeStretch = false
    },
  },
});

export const {
  setTheme,
  setDirection,
  resetSetting,
  setContrast,
  setThemeLayout,
  setThemeStretch,
  setthemeColorPresets,
  onloadColorPresets,
  setFontFamaly
} = slice.actions;
export default slice.reducer;

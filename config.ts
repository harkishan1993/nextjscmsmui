// @mui
import { enUS, frFR, zhCN, viVN, arSD } from "@mui/material/locale";
import { ThemeStateProp } from "./app/_redux/slice/theme";
import { fontFamily } from "./app/_theme/fontfamily";

export const BASE_URL = "http://localhost:4000";
export const defaultSettings: Omit<ThemeStateProp, "setColor" | "colorOption"> =
  {
    themeMode: "light",
    themeDirection: "ltr",
    themeFontFamily: fontFamily[0].fontfamily.style.fontFamily,
    themeContrast: "default",
    themeLayout: "horizontal",
    themeColorPresets: "default",
    themeStretch: false,
  };

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const allLangs = [
  {
    label: "English",
    value: "en",
    systemValue: enUS,
    icon: "/assets/icons/flags/ic_flag_en.svg",
  },
  {
    label: "French",
    value: "fr",
    systemValue: frFR,
    icon: "/assets/icons/flags/ic_flag_fr.svg",
  },
  {
    label: "Vietnamese",
    value: "vn",
    systemValue: viVN,
    icon: "/assets/icons/flags/ic_flag_vn.svg",
  },
  {
    label: "Chinese",
    value: "cn",
    systemValue: zhCN,
    icon: "/assets/icons/flags/ic_flag_cn.svg",
  },
  {
    label: "Arabic (Sudan)",
    value: "ar",
    systemValue: arSD,
    icon: "/assets/icons/flags/ic_flag_sa.svg",
  },
];

export const NaveList = [
  {
    id: 1,
    url: "/asasa",
    name: "A",
    children: [
      {
        id: 11,
        url: "/a1",
        name: "A1",
      },
      {
        id: 12,
        url: "/a2",
        name: "A2",
      },
    ],
  },
  {
    id: 2,
    url: "/asasa1",
    name: "B",
    children: [
      {
        id: 21,
        url: "/b1",
        name: "B1",
        children: [
          {
            id: 121,
            url: "/b11",
            name: "B11",
          },
          {
            id: 222,
            url: "/b22",
            name: "B22",
          },
        ]
      },
      {
        id: 22,
        url: "/b2",
        name: "B2",
      },
    ],
  },
];

export const defaultLang = allLangs[0]; // English

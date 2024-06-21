import {
  Prosto_One,
  Ubuntu_Mono,
  Inter,
  // Reddit_Mono,
  Mukta,
  Oswald,
  Rajdhani
} from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
  display: "swap",
});

const prosto = Prosto_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ubuntu = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

// const reddit_mono = Reddit_Mono({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
//   display: "swap",
// });

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["300","400","500", "600", "700"],
    display: "swap",
  });
export let fontFamily = [
  { fontfamily: inter, name: "inter" },
  { fontfamily: prosto, name: "prosto_one" },
  { fontfamily: ubuntu, name: "ubuntu" },
  // { fontfamily: reddit_mono, name: "reddit_mono" },
  { fontfamily: mukta, name: "mukta" },
  { fontfamily: oswald, name: "oswald" },
  { fontfamily: rajdhani, name: "rajdhani" },
];

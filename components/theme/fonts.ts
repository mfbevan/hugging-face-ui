import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const fonts = {
  heading: inter.style.fontFamily,
  body: inter.style.fontFamily,
};

import { Source_Sans_3 } from "next/font/google";

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
});

export const fonts = {
  heading: sourceSans.style.fontFamily,
  body: sourceSans.style.fontFamily,
};

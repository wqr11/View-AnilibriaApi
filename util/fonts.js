import { Unbounded } from "next/font/google";
import { Montserrat } from "next/font/google";

export const unbounded = Unbounded({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "500", "700", "800"],
  display: "swap",
});

export const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

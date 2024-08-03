import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";

export const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["400", "600", "300", "700", "800"],
});
export const bodyText = localFont({
    src: "../Spiegel-OTF/Spiegel-Regular.otf"
})
export const subTitle = localFont({
    src: "../BeaufortForLoL-OTF/BeaufortforLOL-Medium.otf"
})

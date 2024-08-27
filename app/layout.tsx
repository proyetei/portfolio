import type { Metadata } from "next";
import { Inter, Poppins, Maven_Pro } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const maven = Maven_Pro({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proyetei Akanda",
  description: "Software engineering professional portfolio made with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const pathname = usePathname();
  // const isHome = pathname === '/'
  // const [isLoading, setIsLoading] = useState(isHome);

  // useEffect(() => {
  //   if (isLoading) return
  // }, [isLoading])

  return (
    <html lang="en">
      <body className={`${maven.className} dark:bg-[#020617] bg-violet-100 dark:text-slate-200 text-slate-800`}>
        <div className="relative w-screen overflow-hidden">
          <div className="absolute top-[-50px] left-[-100px] h-[200px] w-[200px] bg-[#4F56FF] rounded-full blur-[200px] md:top-[-100px] md:left-[-100px] md:h-[400px] md:w-[400px]"></div>
          <div className="absolute top-[-50px] left-[100px] h-[150px] w-[150px] bg-[#FF4980] rounded-full blur-[200px] md:top-[-50px] md:left-[200px] md:h-[300px] md:w-[300px]"></div>
          <div className="absolute bottom-[-50px] right-[-20px] h-[150px] w-[200px] bg-[#4F56FF] rounded-full blur-[200px] md:bottom-[-50px] md:right-[100px] md:h-[300px] md:w-[300px]"></div>
          <div className="absolute bottom-[-50px] right-[-70px] h-[150px] w-[150px] bg-[#FF4980] rounded-full blur-[200px] md:bottom-[-100px] md:right-[-100px] md:h-[400px] md:w-[400px]"></div>
          {/* {isLoading ? <SplashScreen /> : children} */}
          {children}
        </div>
      </body>
    </html>
  );
}


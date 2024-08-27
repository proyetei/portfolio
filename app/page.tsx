"use client"
import Portfolio from "@/components/Portfolio";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
export default function Home() {

  const pathname = usePathname();
  const isHome = pathname === '/'
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])
  return (
    <div>
    { isLoading && isHome ? <SplashScreen finishloading={() => setIsLoading(false)} /> : <Portfolio/>}
    </div>

  )
}
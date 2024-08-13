"use client"
import { TfiArrowTopRight } from "react-icons/tfi";
import { TabsComponent } from "./TabsComponent";
import { useRouter } from "next/navigation";
import { TbHexagonLetterPFilled } from "react-icons/tb";
import Footer from "./Footer";
import Toggle from "./Toggle";

export default function Portfolio(){
	const router = useRouter()
    return(
        <div className="min-h-screen overflow-hidden">
			<div className="flex flex-row items-center justify-between p-4">
				<Toggle/>
				<p className="hidden md:flex flex-row gap-4">
					<a href="https://www.linkedin.com/in/proyeteiakanda/" className="hover:underline drop-shadow-white"> LinkedIn </a> <TfiArrowTopRight />
					<a href="https://github.com/proyetei" className="hover:underline drop-shadow-white"> GitHub </a> <TfiArrowTopRight />
				</p>
			</div>
			<TabsComponent />
			<Footer />
        </div>
    )
}
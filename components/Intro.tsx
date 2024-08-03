import { subTitle } from "@/fonts/font";
import CustomText from "./TitleText";
import Image from "next/image";

export default function Intro(){
    return(
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-4 items-center justify-center">
                <div className={`${subTitle.className} flex flex-row items-end text-3xl gap-3 my-4`}> Hi, I&apos;m <CustomText text="PROYETEI"/> </div>
                <p className="md:text-2xl text-lg text-indigo-400"> I&apos;m an efficient problem solver and self-starter, seasoned in fast-paced working environments </p>
                <p className="md:text-xl text-sm my-4">I am currently a 4th year Computer Science student at McMaster University, graduating in May 2025.
                I have contributed to major feature launches impacting 200K+ people and automating systems in customer-facing consoles with high traffic.</p>
            </div>
            <div className="flex items-center justify-center ">
                <Image src="/proyetei.jpg" alt="proyetei" width={450} height={450} className="drop-shadow-pink hover:grayscale" />
            </div>
        </div>
    )
}
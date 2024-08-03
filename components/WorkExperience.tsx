import { subTitle } from "@/fonts/font";
import TitleText from "./TitleText";
import Image from "next/image";
import { adp } from "@/lib/data";
import { CarouselComponent } from "./CarouselComponent";
import {Divider} from "@nextui-org/divider";
export default function WorkExperience(){
    return(
        <div className="flex flex-col my-16 gap-4">
          <Divider />
            <div className={`${subTitle.className}`}>
            <TitleText text="EXPERIENCE"/>
            </div>
            <p className="text-sm md:text-base"><span className="opacity-60"> More detailed information on my resume. Contact me at </span> <span className="text-indigo-400 opacity-90 underline"> <a href="mailto:proyeteireavue@gmail.com"> proyeteireavue@gmail.com </a> </span></p>
            <div>
              <div className="grid md:grid-cols-2 grid-cols-1 my-6 gap-4">
              <Image src="/adp-group-pic.jpeg" alt="adp group picture" height={600} width={600} className="rounded-xl" />
                <div className="flex flex-row gap-4 bg-white/15 backdrop-blur-xl rounded-3xl p-6">
                  <div className="items-center justify-start">
                  <Image src="/adp-logo.png" alt="adp" height={150} width={150} />
                  </div>
                  <div className="flex flex-col space-y-3">
                  <div className={`${subTitle.className}`}> 
                    <p className="md:text-2xl text-lg font-extrabold"> Software Developer Intern </p>
                    <p className="md:text-lg text-md font-extrabold"> ADP Canada </p>
                  </div>
                  {adp.map((items, index) =>
                  <li key={index} className="text-sm md:text-base opacity-70"> {items} </li>)}
                </div>
                </div>
              </div>
            </div>
        </div>
    )
}
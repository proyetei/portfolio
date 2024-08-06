import {Divider} from "@nextui-org/divider";
import { Avatar, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { ScrollArea } from "./ui/scroll-area";


export default function InstagramMockup(){
    return(
        <div className="w-[350px] h-[700px] bg-slate-200 backdrop-blur-xl m-4 py-4 text-slate-950 rounded-xl">
            <div className="px-4"> 1:56PM </div>
            <p className="text-3xl flex items-center justify-center"> ProyeteiGram </p>
            <Divider className="mt-3 opacity-25"/>
            <div className="flex flex-row gap-4 p-2">
            <Avatar>
                <AvatarImage src="/proyetei-pic.jpeg" alt="propro" />
            </Avatar>
            <p className="font-semibold"> proyeteii</p>
            </div>
            <ScrollArea className="h-[500px]">
            <Image src="/overview.png" width={400} height={600} alt="overview" />
            <div className="flex flex-row gap-4 text-2xl p-2"> <FaRegHeart /> <FaRegComment /> <PiPaperPlaneTiltBold /> </div>
            <div className="flex flex-row">
            <Avatar>
                <AvatarImage src="/mac-finder.png" alt="propro" />
            </Avatar>         
                <p className="p-2"> Liked by<span className="font-semibold"> aether </span>and <span className="font-semibold"> 100,000 others </span> </p>
            </div>
            <div className="p-2"> <p> <span className="font-semibold"> proyeteii </span> AETHER PROJECT DESCRIPTION: </p>
                <p> Unlock hidden clues of your mind with our gamified mental health app, combining AI-driven insights from correlation between your dreams and daily journaling and various fun activities!
                <li> Generate images with AI and generate hidden pyschological patterns found from the correlation of your dreams and personal life events to undrstand your psyche! </li>
                <li> Earn points through daily journaling and through daily activities like tracking your moods with the easy to use calendar mood tracker.  </li>
                <li> View mood analytics charts that summarizes your yearly and monthly mood report. </li>
                </p>  
            </div>
            </ScrollArea>

        </div>
    )
}
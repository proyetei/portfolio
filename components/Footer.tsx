import { TfiArrowTopRight } from "react-icons/tfi";
import {Divider} from "@nextui-org/divider";
export default function Footer(){
    return(
        <div className="flex flex-col opacity-70 dark:text-indigo-200 text-lg items-center justify-center p-8 px-16">
            <Divider />
            <p className="flex flex-row gap-4 pt-8">
				<a href="https://www.linkedin.com/in/proyeteiakanda/" className="hover:underline"> LinkedIn </a> <TfiArrowTopRight />
				<a href="https://github.com/proyetei" className="hover:underline"> GitHub </a> <TfiArrowTopRight />
			</p>
            <p> Developed with Next.js, Typescript, Tailwind CSS </p>
        </div>
    )
}
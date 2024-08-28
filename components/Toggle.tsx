"use client"

import { useEffect, useState } from "react"
import { FaMoon } from "react-icons/fa"
import { BsSunFill } from "react-icons/bs"
export default function Toggle(){
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark"){
            setDarkMode(true)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    return(
        <div className="relative h-12 w-12 flex items-center justify-center rounded-full cursor-pointer dark:bg-indigo-700 bg-blue-400 hover:opacity-50" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
                <FaMoon className="text-white" size={18} /> ) :
                (<BsSunFill className="text-white" size={18} />)}
        </div>
    )
}
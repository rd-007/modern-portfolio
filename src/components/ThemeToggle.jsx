import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
    <button 
     onClick={toggleTheme} 
     className={cn( 
        "max-sm:hidden p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
    )}
    > 
     {isDarkMode ? (
       <FaSun className="h-6 w-6 text-yellow-300" />
     ) : ( 
       <FaMoon className="h-6 w-6 text-blue-900" /> 
     )}
    </button>
   );
};
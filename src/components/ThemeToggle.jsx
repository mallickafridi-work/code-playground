import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark"
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative left-[35%] p-2 rounded-full bg-gray-200 dark:bg-gray-800 
                 text-gray-800 dark:text-gray-200 
                 transition-transform hover:scale-105"
        >
            {theme === "light" ? <Sun />
                : <Moon />
            }
        </button>
    )
}

export default ThemeToggle


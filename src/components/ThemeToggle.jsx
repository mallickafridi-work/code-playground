import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {

    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={toggleTheme}
            className="absolute right-4 top-2 p-2 rounded-full bg-gray-200 dark:bg-gray-800 
                 text-gray-800 dark:text-gray-200 
                 transition-transform hover:scale-105"
        >
            {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </button>
    )
}

export default ThemeToggle
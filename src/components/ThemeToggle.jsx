import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // or any icon library

const ThemeToggle = () => {
    // Initialize theme from localStorage or system preference
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) return storedTheme;

        // fallback: system preference
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    // Apply theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    // Toggle handler
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative left-[35%] p-2 rounded-full 
                 border-3 border-(--text)
                 transition-transform hover:scale-105"
        >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </button>
    );
};

export default ThemeToggle;

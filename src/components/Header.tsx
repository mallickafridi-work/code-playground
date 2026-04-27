import Clock from "./Clock"
import ThemeToggle from "./ThemeToggle"

const Header = ({ title }: { title: string }) => {
    return (
        <div className="bg-[#1E2022] grid grid-cols-3 items-center bg-(var(--primary)) h-fit">

            <div className=""> <Clock /> </div>
            <h1 className="py-2 text-(var(--text)) text-4xl font-bold">{title}</h1>
            <div className=""> <ThemeToggle /> </div>

        </div>
    )
}

export default Header
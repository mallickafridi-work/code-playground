import Clock from "./Header_Components/Clock"
import ThemeToggle from "./Header_Components/ThemeToggle"

const Header = ({ title }: { title: string }) => {
    return (
        <div className="grid grid-cols-3 items-center bg-(var(--primary)) h-fit">

            <div className=""> <Clock /> </div>
            <h1 className="py-2 text-(var(--text)) text-4xl font-bold">{title}</h1>
            <div className=""> <ThemeToggle /> </div>

        </div>
    )
}

export default Header
import Clock from "./Clock"
import ThemeToggle from "./ThemeToggle"

const Header = ({ title }: { title: string }) => {
    return (
        <div className="grid grid-cols-3 items-center h-fit bg-background">

            <div className="h-full w-full py-2"> <Clock /> </div>
            <h1 className="text-4xl py-2 font-bold text-(--text)">{title}</h1>
            <div className="h-full w-full py-2"> <ThemeToggle /> </div>

        </div>
    )
}

export default Header
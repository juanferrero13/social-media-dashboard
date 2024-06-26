import { useEffect, useState } from "react"

export const Header = () => {

    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    return (
        <header className="bg-Very-Pale-Blue dark:bg-Very-Dark-Blue h-[235px] rounded-b-[20px] pt-8 px-6 mb-[920px] sm:mb-[470px] custom:mb-[200px] ">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="text-Very-Dark-Blue dark:text-Very-Pale-Blue text-2xl font-bold mb-1">Social Media Dashboard</h1>
                <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold mb-6">Total Followers: 23,004</p>
                <hr className="bg-black mb-[19px] sm:hidden" />
                <div className="flex justify-between">
                    <p className="text-Dark-Grayish-Blue dark:text-Desaturated-Blue font-bold">Dark Mode</p>
                    <label htmlFor="darkmode" className="border relative bg-Toggle w-12 h-6 rounded-full overflow-hidden cursor-pointer p-[3px]">
                        <input onClick={handleClick} id="darkmode" type="checkbox" className="peer sr-only" />
                        <div className="w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0"></div>
                        <div className="w-[18px] h-[18px] bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue rounded-full peer-checked:translate-x-[24px] transition-all"></div>
                    </label>
                </div>
            </div>
        </header>
    )
}

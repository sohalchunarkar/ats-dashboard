import React, { createContext, useState, useEffect } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = (props) => {
    const [theme, setTheme] = useState(() => {
        const stored = localStorage.getItem('theme')
        return stored !== null ? stored === 'dark' : true
    })

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [theme])

    return (

        <ThemeDataContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeDataContext.Provider>

    )
}

export default ThemeContext
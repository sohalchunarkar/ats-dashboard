import React, { createContext, useState, useEffect } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = (props) => {
    const [theme, setTheme] = useState(true)

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (

        <ThemeDataContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeDataContext.Provider>

    )
}

export default ThemeContext
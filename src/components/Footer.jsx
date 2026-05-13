import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeDataContext } from '../Context/ThemeContext'

const Footer = () => {
    const [theme] = useContext(ThemeDataContext)
    return (
        <footer className="bg-white/95 dark:bg-slate-800/95 border-t border-slate-200 dark:border-slate-700 py-6 mt-auto shadow-inner transition-colors duration-200">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-slate-600 dark:text-slate-400 text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} <span className="text-emerald-600 dark:text-emerald-500 font-semibold tracking-wide">ATS</span> Dashboard. All rights reserved.
                </div>
                
                <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
                    <Link to="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        Privacy Policy
                    </Link>
                    <Link to="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        Terms of Service
                    </Link>
                    <Link to="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        Support
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
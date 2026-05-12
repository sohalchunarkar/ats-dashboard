import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 px-6 py-4 shadow-sm">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                {/* Logo */}
                <Link to="/dashboard" className="text-2xl font-extrabold text-slate-100 tracking-tight">
                    <span className="text-emerald-500">ATS</span> Dashboard
                </Link>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                    <Link to="/dashboard" className="text-sm md:text-base text-slate-300 hover:text-emerald-400 font-medium transition-colors">
                        Dashboard
                    </Link>
                    <Link to="/jobs" className="text-sm md:text-base text-slate-300 hover:text-emerald-400 font-medium transition-colors">
                        Jobs
                    </Link>
                    <Link to="/candidates" className="text-sm md:text-base text-slate-300 hover:text-emerald-400 font-medium transition-colors">
                        Candidates
                    </Link>
                    <Link to="/about" className="text-sm md:text-base text-slate-300 hover:text-emerald-400 font-medium transition-colors">
                        About
                    </Link>

                    {/* Theme Toggle Button (Styling Only) */}
                    <button className="ml-4 md:ml-8 p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-700 rounded-lg transition-colors focus:outline-none">
                        {/* Sun Icon for Light Mode */}
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>

                    {/* Simple Logout Button to match theme */}
                    <button
                        onClick={() => {
                            localStorage.removeItem('isAuthenticated')
                            window.location.href = '/login'
                        }}
                        className="ml-0 bg-slate-700 hover:bg-slate-600 text-slate-200 px-4 py-2 rounded-lg text-sm font-semibold border border-slate-600 transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
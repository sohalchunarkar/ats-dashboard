import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-slate-800 border-t border-slate-700 py-6 mt-auto shadow-inner">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-slate-400 text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} <span className="text-emerald-500 font-semibold tracking-wide">ATS</span> Dashboard. All rights reserved.
                </div>
                
                <div className="flex gap-6 text-sm text-slate-400">
                    <Link to="#" className="hover:text-emerald-400 transition-colors">
                        Privacy Policy
                    </Link>
                    <Link to="#" className="hover:text-emerald-400 transition-colors">
                        Terms of Service
                    </Link>
                    <Link to="#" className="hover:text-emerald-400 transition-colors">
                        Support
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
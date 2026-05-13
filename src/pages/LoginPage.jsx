import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeDataContext } from '../Context/ThemeContext'

const LoginPage = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handlelogin = (e) => {
        e.preventDefault()

        if (email === 'admin@test.com' && password === 'password') {
            localStorage.setItem('isAuthenticated', 'true')
            navigate('/dashboard')
        }
        else {
            alert('Invalid email or password! Please use admin@test.com and password');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8 relative">

            <button
                onClick={() => setTheme(!theme)}
                className="absolute top-6 right-6 bg-slate-800 hover:bg-slate-700 text-slate-200 p-2.5 rounded-full shadow-md border border-slate-700 transition-colors z-10 cursor-pointer"
                title="Toggle Theme"
            >
                {theme ? '☀️' : '🌙'}
            </button>

            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-700">

                <div className="hidden md:flex flex-col justify-center relative p-12 w-1/2 bg-slate-800/80 overflow-hidden border-r border-slate-700/50">

                    <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <h1 className="text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
                            Welcome to <span className="text-emerald-500">ATS</span>
                        </h1>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-sm mt-4">
                            Streamline your hiring process. Manage candidates and track applications all in one intuitive platform.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-slate-800">

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-slate-100">
                            Sign in
                        </h2>
                        <p className="text-slate-400 text-sm mt-2">
                            Please use your dummy credentials to continue
                        </p>
                    </div>

                    <form onSubmit={handlelogin} className="space-y-6">

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                User Email
                            </label>
                            <div className="relative">

                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    placeholder="admin@test.com"
                                    className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-700 text-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-500"
                                    onChange={(e) => setemail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                Password
                            </label>
                            <div className="relative">

                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-20 py-3 bg-slate-900/50 border border-slate-700 text-slate-100 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-500"
                                    onChange={(e) => setpassword(e.target.value)}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-emerald-500 hover:text-emerald-400 text-xs font-bold tracking-wider uppercase transition-colors"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 px-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-emerald-500/20"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage

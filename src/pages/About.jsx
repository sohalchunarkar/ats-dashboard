import React from 'react'

const About = () => {
    return (
        <div className="space-y-6">

            <div>
                <h1 className="text-3xl font-bold text-slate-100 tracking-tight">About Us</h1>
                <p className="text-slate-400 mt-2">Learn more about our Applicant Tracking System and get in touch.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <div className="space-y-6">

                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                            <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            What is our ATS?
                        </h2>
                        <div className="text-slate-300 space-y-4 leading-relaxed text-sm">
                            <p>
                                An Applicant Tracking System (ATS) is a software application that enables the electronic handling of recruitment and hiring needs.
                                Our platform is designed to streamline your entire hiring workflow from start to finish.
                            </p>
                            <p>
                                From posting jobs and receiving resumes to scheduling interviews and making final offers, our ATS provides a centralized dashboard
                                to track candidates effectively. We use advanced algorithms to help you filter, sort, and identify the best talent effortlessly.
                            </p>
                            <ul className="list-disc pl-5 text-slate-400 space-y-1 mt-2">
                                <li>Automated resume parsing and keyword tracking.</li>
                                <li>Seamless interview scheduling and communication.</li>
                                <li>Comprehensive analytics on hiring performance.</li>
                            </ul>
                        </div>
                    </div>


                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-100 mb-4">Contact Information</h2>
                        <div className="space-y-4">

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-200">Our Headquarters</h4>
                                    <p className="text-sm text-slate-400 mt-1">123 Tech Boulevard, Suite 400<br />San Francisco, CA 94105</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-200">Email Us</h4>
                                    <p className="text-sm text-slate-400 mt-1">support@atsdashboard.com<br />careers@atsdashboard.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-200">Call Us</h4>
                                    <p className="text-sm text-slate-400 mt-1">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm PST</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-sm flex flex-col">
                    <h2 className="text-xl font-bold text-slate-100 mb-2">Connect With Us</h2>
                    <p className="text-sm text-slate-400 mb-6">Have questions about our platform? Send us a message and our team will get back to you shortly.</p>

                    <form className="flex-1 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-300">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-slate-900 border border-slate-600 text-slate-200 text-sm rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-slate-500"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-300">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@company.com"
                                className="w-full bg-slate-900 border border-slate-600 text-slate-200 text-sm rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-slate-500"
                            />
                        </div>

                        <div className="space-y-1.5 flex-1 flex flex-col">
                            <label className="text-sm font-medium text-slate-300">Your Message</label>
                            <textarea
                                placeholder="How can we help you?"
                                className="w-full flex-1 min-h-30 resize-none bg-slate-900 border border-slate-600 text-slate-200 text-sm rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-slate-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-slate-100 text-sm font-bold rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-800 mt-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default About
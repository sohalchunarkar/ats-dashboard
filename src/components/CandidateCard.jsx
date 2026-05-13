import React from 'react'

const CandidateCard = ({ candidate }) => {
    return (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-slate-200 dark:hover:shadow-slate-900/50 transition-all duration-200 flex flex-col gap-4 text-left">
            
            {/* Top row: Status and Score */}
            <div className="flex justify-between items-center">
                <span className={`inline-block border rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors duration-200 ${
                    candidate.status === 'Hired' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' : 
                    candidate.status === 'Shortlisted' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20' :
                    candidate.status === 'Interviewing' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' :
                    'bg-slate-100 dark:bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-500/20'
                }`}>
                    {candidate.status}
                </span>
                
                {/* Score Badge */}
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20 transition-colors duration-200">
                    Score: {candidate.score}
                </span>
            </div>

            {/* Name & Education */}
            <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 transition-colors duration-200">
                    {candidate.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium transition-colors duration-200">
                    {candidate.education} • {candidate.institute}
                </p>
            </div>

            {/* Bottom Meta Info (Icons and Data) */}
            <div className="flex flex-wrap items-center gap-6 mt-2 pt-4 border-t border-slate-200 dark:border-slate-700/50 transition-colors duration-200">
                
                {/* Email */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-200">
                    <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                    </svg>
                    <span title="Email">{candidate.email}</span>
                </div>
                
                {/* Gender */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-200">
                    <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span title="Gender">{candidate.gender}</span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-200">
                    <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span title="Address">{candidate.address}</span>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors duration-200">
                    <svg className="w-4 h-4 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span title="Experience">{candidate.experience}</span>
                </div>
                
            </div>
            
        </div>
    )
}

export default CandidateCard

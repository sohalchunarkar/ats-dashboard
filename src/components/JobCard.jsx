import React from 'react'

const JobCard = ({ job }) => {
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-slate-900/50 transition-all duration-200 flex flex-col gap-4 text-left">
            
            {/* Top row: Labels and Date */}
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <span className="inline-block bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
                        {job.department}
                    </span>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide border ${job.status === 'Open' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'}`}>
                        {job.status}
                    </span>
                </div>
                <span className="text-xs font-medium text-slate-500">
                    Posted {job.postedDate}
                </span>
            </div>

            {/* Title & Description */}
            <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">
                    {job.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {job.description}
                </p>
            </div>

            {/* Bottom Meta Info (Icons and Data) */}
            <div className="flex flex-wrap items-center gap-6 mt-2 pt-4 border-t border-slate-700/50">
                
                {/* Type (e.g., Full Time) */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span title="Job Type">{job.type}</span>
                </div>
                
                {/* Location (e.g., Remote) */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span title="Location">{job.location}</span>
                </div>

                {/* Salary */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span title="Salary">{job.salary}</span>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span title="Experience">{job.experience}</span>
                </div>

                {/* Applicants */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300 ml-auto">
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span title="Applicants">{job.applicants} Applicants</span>
                </div>
                
            </div>
            
        </div>
    )
}

export default JobCard

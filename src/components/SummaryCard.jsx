import React from 'react'
import dashboardSummary from '../data/dashboardSummary'

// Helper function to render tiny inline SVGs
const renderIcon = (iconName) => {
    const baseClasses = "w-5 h-5";
    switch (iconName) {
        case 'briefcase':
            return (
                <svg className={`${baseClasses} text-emerald-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            );
        case 'file-text':
            return (
                <svg className={`${baseClasses} text-blue-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            );
        case 'users':
            return (
                <svg className={`${baseClasses} text-purple-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            );
        case 'badge-check':
            return (
                <svg className={`${baseClasses} text-teal-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            );
        case 'x-circle':
            return (
                <svg className={`${baseClasses} text-rose-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
        case 'folder-open':
            return (
                <svg className={`${baseClasses} text-amber-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                </svg>
            );
        default:
            return (
                <svg className={`${baseClasses} text-slate-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            );
    }
}

const SummaryCard = () => {
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-md w-full overflow-hidden">
            <div className="bg-slate-900/50 px-6 py-4 border-b border-slate-700">
                <h3 className="text-lg font-bold text-slate-100">Overview Summary</h3>
            </div>
            <div className="flex flex-col divide-y divide-slate-700/50">
                {dashboardSummary.map((item) => {
                    const isNegative = item.change && item.change.toString().startsWith('-');
                    return (
                        <div key={item.id} className="flex items-center justify-between px-6 py-4 hover:bg-slate-700/20 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-slate-900/50 rounded-lg border border-slate-700/50">
                                    {renderIcon(item.icon)}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-400">{item.title}</p>
                                    <p className={`text-xs mt-0.5 font-medium ${isNegative ? 'text-rose-400' : 'text-emerald-400'}`}>
                                        {item.change}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-xl font-bold text-slate-100">{item.value}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SummaryCard
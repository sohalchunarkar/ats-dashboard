import React from 'react'

const OfferAcceptanceCard = () => {

    const acceptanceRate = 85;
    const acceptedOffers = 34;
    const totalOffers = 40;

    return (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-md w-full transition-colors duration-200">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 transition-colors">Offer Acceptance</h3>

            <div className="flex items-center justify-between mb-4">
                <div className="flex flex-col">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 transition-colors">{acceptanceRate}%</span>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1 transition-colors">+5% from last month</span>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-full border border-slate-200 dark:border-slate-700/50 shadow-inner transition-colors duration-200">
                    <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
            </div>


            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-2 mt-4 overflow-hidden transition-colors duration-200">
                <div className="bg-linear-to-r from-emerald-600 to-emerald-400 h-2.5 rounded-full" style={{ width: `${acceptanceRate}%` }}></div>
            </div>

            <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mt-3 transition-colors">
                <span><strong className="text-slate-900 dark:text-slate-300 transition-colors">{acceptedOffers}</strong> Accepted</span>
                <span><strong className="text-slate-900 dark:text-slate-300 transition-colors">{totalOffers}</strong> Total Offers</span>
            </div>
        </div>
    )
}

export default OfferAcceptanceCard
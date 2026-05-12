import React from 'react'
import SummaryCard from '../components/SummaryCard'
import ApplicationChart from '../components/ApplicationChart'
import OfferAcceptanceCard from '../components/OfferAcceptanceCard'

const DashBoard = () => {
  return (
    <div className="space-y-6">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100 tracking-tight">Dashboard Overview</h1>
        <p className="text-slate-400 mt-2">Welcome back! Here is what's happening with your hiring process today.</p>
      </div>

      {/* Top Row: Summary & Chart Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Summary Panel */}
        <div className="lg:col-span-1">
          <SummaryCard />
        </div>
        
        {/* Right Side: Chart */}
        <div className="lg:col-span-2">
          <ApplicationChart />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <OfferAcceptanceCard />
        </div>
        {/* Placeholder for future bottom-row widgets */}
      </div>
    </div>
  )
}

export default DashBoard
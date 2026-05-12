import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

// Temporary dummy data so we can see the design
const data = [
  { name: 'Jan', applicants: 120 },
  { name: 'Feb', applicants: 210 },
  { name: 'Mar', applicants: 180 },
  { name: 'Apr', applicants: 290 },
  { name: 'May', applicants: 250 },
  { name: 'Jun', applicants: 380 },
];

const ApplicationChart = () => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-md w-full h-96">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-100">Applications Overview</h3>
        <p className="text-sm text-slate-400">Total applicants over the last 6 months</p>
      </div>
      
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorApplicants" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis 
                dataKey="name" 
                stroke="#94a3b8" 
                fontSize={12} 
                tickLine={false}
                axisLine={false}
                dy={10}
            />
            <YAxis 
                stroke="#94a3b8" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dx={-10}
            />
            <Tooltip 
                contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #334155',
                    borderRadius: '0.5rem',
                    color: '#f1f5f9'
                }}
                itemStyle={{ color: '#10b981' }}
            />
            <Area 
                type="monotone" 
                dataKey="applicants" 
                stroke="#10b981" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorApplicants)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ApplicationChart

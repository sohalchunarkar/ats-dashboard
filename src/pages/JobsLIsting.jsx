import React, { useEffect, useState } from 'react'
import postedJobs from '../data/postedJobs'
import JobCard from '../components/JobCard'

const JobsLIsting = () => {
  const [pageno, setPageno] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [department, setDepartment] = useState("")

  // State to hold jobs after filtering but before pagination
  const [filteredJobs, setFilteredJobs] = useState(postedJobs)

  // State to hold the jobs currently visible on the screen
  const [displayedJobs, setDisplayedJobs] = useState([])

  // Effect 1: Handles Filtering by Department
  useEffect(() => {
    let result = postedJobs
    if (department !== "") {
      result = result.filter((job) => job.department.toLocaleLowerCase() === department.toLowerCase())
    }

    if (searchQuery !== "") {
      result = result.filter((job) => job.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    setFilteredJobs(result)
    // Very important: reset to page 1 when the user changes the filter!
    setPageno(1)
  }, [department, searchQuery])

  // Effect 2: Handles Pagination (Slicing the filtered data)
  useEffect(() => {
    const startIndex = 7 * (pageno - 1);
    const endIndex = 7 * pageno;
    // Slice from filteredJobs instead of postedJobs
    const currentJobs = filteredJobs.slice(startIndex, endIndex);

    setDisplayedJobs(currentJobs);
  }, [pageno, filteredJobs])

  // Calculate max pages based on the filtered list
  const maxPages = Math.ceil(filteredJobs.length / 7) || 1;

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-100 tracking-tight">Job Listings</h1>
        <p className="text-slate-400 mt-2">Manage and track all open positions.</p>
      </div>

      {/* Top Bar: Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-sm">
        {/* Search Bar */}
        <div className="relative w-full sm:w-96">
          <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input

            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-600 text-slate-200 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-slate-500"
          />
        </div>

        {/* Filter Dropdown */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="text-sm font-medium text-slate-400 pl-1 sm:pl-0">Filter by Department:</span>
          <div className="relative w-full sm:w-auto">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full sm:w-auto bg-slate-900 border border-slate-600 text-slate-300 text-sm rounded-lg pl-4 pr-10 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer"
            >
              <option value="">All Departments (No Filter)</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="mobile">Mobile</option>
              <option value="business operations">Business Operations</option>
            </select>
            <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Middle Content Area */}
      <div className="flex flex-col gap-4 min-h-100">
        {displayedJobs.length > 0 ? (
          displayedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <div className="border-2 border-dashed border-slate-700 rounded-xl flex items-center justify-center bg-slate-800/30 h-64">
            <p className="text-slate-500 font-medium">No jobs found for this department.</p>
          </div>
        )}
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between bg-slate-800 px-6 py-4 rounded-xl border border-slate-700 shadow-sm">
        <button
          onClick={() => {
            if (pageno > 1) {
              setPageno(pageno - 1)
            }
          }}
          disabled={pageno === 1}
          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-200 text-sm font-semibold rounded-lg transition-colors focus:outline-none"
        >
          Previous
        </button>

        <span className="text-slate-300 font-medium bg-slate-900 px-4 py-1.5 rounded-lg border border-slate-700">
          Page {pageno} of {maxPages}
        </span>

        <button
          onClick={() => {
            if (pageno < maxPages) {
              setPageno(pageno + 1)
            }
          }}
          disabled={pageno === maxPages}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed text-slate-100 text-sm font-semibold rounded-lg transition-colors shadow-sm focus:outline-none"
        >
          Next
        </button>
      </div>

    </div>
  )
}

export default JobsLIsting
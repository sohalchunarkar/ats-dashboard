import React, { useState, useEffect } from 'react'
import candidateData from '../data/candidateData'
import CandidateCard from '../components/CandidateCard'
import CandidateModal from '../components/CandidateModal'

const Candidates = () => {
  const [pageno, setPageno] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [genderFilter, setGenderFilter] = useState("")

  const [filteredCandidates, setFilteredCandidates] = useState(candidateData)
  const [displayedCandidates, setDisplayedCandidates] = useState([])
  const [selectedCandidateId, setSelectedCandidateId] = useState(null)

  useEffect(() => {
    let result = candidateData;

    if (statusFilter !== "") {
      result = result.filter((candidate) => candidate.status === statusFilter);
    }

    if (genderFilter !== "") {
      result = result.filter((candidate) => candidate.gender === genderFilter);
    }

    if (searchQuery !== "") {
      result = result.filter((candidate) => candidate.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    setFilteredCandidates(result);
    setPageno(1);
  }, [statusFilter, genderFilter, searchQuery]);


  useEffect(() => {
    const startIndex = 7 * (pageno - 1);
    const endIndex = 7 * pageno;

    const currentCandidates = filteredCandidates.slice(startIndex, endIndex);

    setDisplayedCandidates(currentCandidates);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageno, filteredCandidates])


  const maxPages = Math.ceil(filteredCandidates.length / 7) || 1;

  return (
    <div className="space-y-6 animate-page-in">

      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight transition-colors duration-200">Candidates</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2 transition-colors duration-200">Review, filter, and manage applicant profiles.</p>
      </div>

      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-200">

        <div className="relative w-full xl:w-96 shrink-0">
          <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search candidates by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-slate-200 text-sm rounded-lg pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500"
          />
        </div>

        <div className="w-full xl:w-auto flex flex-col sm:flex-row sm:items-center gap-3">

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-400 whitespace-nowrap transition-colors duration-200">Status:</span>
            <div className="relative w-full sm:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full sm:w-auto bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm rounded-lg pl-4 pr-10 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer transition-colors duration-200"
              >
                <option value="">All Statuses</option>
                <option value="Hired">Hired</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Reviewing">Reviewing</option>
              </select>
              <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-400 whitespace-nowrap transition-colors duration-200">Gender:</span>
            <div className="relative w-full sm:w-auto">
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="w-full sm:w-auto bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm rounded-lg pl-4 pr-10 py-2.5 focus:ring-2 focus:ring-emerald-500 outline-none appearance-none cursor-pointer transition-colors duration-200"
              >
                <option value="">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      <div
        key={`${pageno}-${statusFilter}-${genderFilter}-${searchQuery}`}
        className="flex flex-col gap-4 min-h-100 animate-page-in"
      >
        {displayedCandidates.length > 0 ? (
          displayedCandidates.map((candidate) => (
            <div key={candidate.id} onClick={() => setSelectedCandidateId(candidate.id)} className="cursor-pointer">
              <CandidateCard candidate={candidate} />
            </div>
          ))
        ) : (
          <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl flex items-center justify-center bg-slate-50 dark:bg-slate-800/30 h-64 transition-colors duration-200">
            <p className="text-slate-500 font-medium">No candidates found.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between bg-white dark:bg-slate-800 px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-200">
        <button
          onClick={() => {
            if (pageno > 1) {
              setPageno(pageno - 1)
            }
          }}
          disabled={pageno === 1}
          className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg transition-colors focus:outline-none cursor-pointer"
        >
          Previous
        </button>

        <span className="text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-slate-900 px-4 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors duration-200">
          Page {pageno} of {maxPages}
        </span>

        <button
          onClick={() => {
            if (pageno < maxPages) {
              setPageno(pageno + 1)
            }
          }}
          disabled={pageno === maxPages}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-colors shadow-sm focus:outline-none cursor-pointer"
        >
          Next
        </button>
      </div>

      {selectedCandidateId && (
        <CandidateModal 
          id={selectedCandidateId} 
          onClose={() => setSelectedCandidateId(null)} 
        />
      )}

    </div>
  )
}

export default Candidates
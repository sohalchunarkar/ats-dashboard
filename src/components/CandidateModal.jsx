import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import candidateData from '../data/candidateData';

const CandidateModal = ({ id, onClose }) => {
    const [candidate, setCandidate] = useState(null);

    useEffect(() => {
        const foundCandidate = candidateData.find(c => c.id === id);
        setCandidate(foundCandidate);

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [id]);

    if (!candidate) return null;

    return createPortal(
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 dark:bg-slate-900/80 backdrop-blur-sm transition-colors duration-200">
            <div className="relative w-full max-w-4xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-page-in transition-colors duration-200">

                {/* Sticky Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur border-b border-slate-200 dark:border-slate-700 rounded-t-2xl transition-colors duration-200">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 transition-colors duration-200">{candidate.name}</h2>
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors duration-200 ${candidate.status === 'Hired' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' :
                                    candidate.status === 'Shortlisted' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20' :
                                        candidate.status === 'Interviewing' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' :
                                            'bg-slate-100 dark:bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-500/20'
                                }`}>
                                {candidate.status}
                            </span>
                            <span className="px-3 py-1 text-xs font-bold rounded-full border bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20 transition-colors duration-200">
                                Score: {candidate.score}
                            </span>
                        </div>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium transition-colors duration-200">{candidate.appliedRole}</p>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors focus:outline-none cursor-pointer"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable Content Area */}
                <div className="p-6 overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Left Column */}
                        <div className="space-y-8">
                            <section>
                                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 transition-colors duration-200">Contact & Personal</h3>
                                <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm transition-colors duration-200">
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">Email:</strong> {candidate.email}</p>
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">Phone:</strong> {candidate.phone}</p>
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">Location:</strong> {candidate.address}</p>
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">Age/Gender:</strong> {candidate.age} yrs • {candidate.gender}</p>
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">Date of Birth:</strong> {candidate.dob}</p>
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">Applied Date:</strong> {candidate.appliedDate}</p>
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">Total Jobs Applied:</strong> {candidate.jobsApplied}</p>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 transition-colors duration-200">Education</h3>
                                <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm transition-colors duration-200">
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">Degree:</strong> {candidate.education}</p>
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">Institute:</strong> {candidate.institute}</p>
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">CGPA:</strong> {candidate.cgpa}</p>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 transition-colors duration-200">Experience</h3>
                                <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm transition-colors duration-200">
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">Total Experience:</strong> {candidate.experience}</p>
                                    <p><strong className="text-slate-800 dark:text-slate-400 font-medium transition-colors duration-200">Current Company:</strong> {candidate.currentCompany}</p>
                                </div>
                            </section>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            <section>
                                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 transition-colors duration-200">Skills & Languages</h3>
                                <div className="mb-4">
                                    <p className="text-slate-600 dark:text-slate-400 text-xs font-medium mb-2 transition-colors duration-200">Technical Skills</p>
                                    <div className="flex flex-wrap gap-2">
                                        {candidate.skills.map((skill, index) => (
                                            <span key={index} className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-600 transition-colors duration-200">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-slate-600 dark:text-slate-400 text-xs font-medium mb-2 transition-colors duration-200">Languages</p>
                                    <div className="flex flex-wrap gap-2">
                                        {candidate.languages.map((lang, index) => (
                                            <span key={index} className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 transition-colors duration-200">
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 transition-colors duration-200">Projects & Certifications</h3>
                                <div className="mb-4">
                                    <p className="text-slate-600 dark:text-slate-400 text-xs font-medium mb-2 transition-colors duration-200">Projects</p>
                                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 text-sm space-y-1 transition-colors duration-200">
                                        {candidate.projects.map((proj, index) => (
                                            <li key={index}>{proj}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-slate-600 dark:text-slate-400 text-xs font-medium mb-2 transition-colors duration-200">Certifications</p>
                                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 text-sm space-y-1 transition-colors duration-200">
                                        {candidate.certifications.map((cert, index) => (
                                            <li key={index}>{cert}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 transition-colors duration-200">Links & Resume</h3>
                                <div className="flex flex-col gap-3">
                                    <a href={`https://${candidate.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors text-sm font-medium">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        LinkedIn Profile
                                    </a>
                                    <a href={`https://${candidate.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                        GitHub Profile
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors text-sm font-medium mt-1">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                        </svg>
                                        View Resume ({candidate.resume})
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default CandidateModal;
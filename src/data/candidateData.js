const candidateData = [
    {
        id: 1,
        name: "Rahul Sharma",
        age: 23,
        gender: "Male",
        dob: "2002-03-14",
        email: "rahul.sharma@example.com",
        phone: "+91 9876543210",
        address: "Pune, Maharashtra",
        education: "B.Tech in Computer Science",
        institute: "IIT Bombay",
        cgpa: "8.7",
        experience: "1 Year",
        currentCompany: "TechNova Solutions",
        appliedRole: "Frontend Developer",
        jobsApplied: 3,
        score: 88,
        status: "Shortlisted",
        skills: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Redux"
        ],
        languages: [
            "English",
            "Hindi",
            "Marathi"
        ],
        certifications: [
            "AWS Cloud Practitioner"
        ],
        projects: [
            "E-Commerce Website",
            "Portfolio Website",
            "Task Management App"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/rahulsharma",
        github: "github.com/rahulsharma",
        appliedDate: "2026-05-01"
    },

    {
        id: 2,
        name: "Priya Patel",
        age: 24,
        gender: "Female",
        dob: "2001-07-21",
        email: "priya.patel@example.com",
        phone: "+91 9123456780",
        address: "Ahmedabad, Gujarat",
        education: "B.E in Information Technology",
        institute: "NIT Surat",
        cgpa: "8.9",
        experience: "2 Years",
        currentCompany: "CodeCraft Pvt Ltd",
        appliedRole: "UI/UX Designer",
        jobsApplied: 2,
        score: 82,
        status: "Interviewing",
        skills: [
            "Figma",
            "Adobe XD",
            "UI Design",
            "Wireframing"
        ],
        languages: [
            "English",
            "Hindi",
            "Gujarati"
        ],
        certifications: [
            "Google UX Design Certificate"
        ],
        projects: [
            "Food Delivery App UI",
            "Banking Dashboard Design"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/priyapatel",
        github: "github.com/priyapatel",
        appliedDate: "2026-05-03"
    },

    {
        id: 3,
        name: "Aman Verma",
        age: 25,
        gender: "Male",
        dob: "2000-01-11",
        email: "aman.verma@example.com",
        phone: "+91 9988776655",
        address: "Delhi, India",
        education: "MCA",
        institute: "Delhi University",
        cgpa: "8.2",
        experience: "3 Years",
        currentCompany: "InnovateX",
        appliedRole: "Backend Developer",
        jobsApplied: 5,
        score: 91,
        status: "Hired",
        skills: [
            "Java",
            "Spring Boot",
            "MySQL",
            "Docker"
        ],
        languages: [
            "English",
            "Hindi"
        ],
        certifications: [
            "Oracle Java Certification"
        ],
        projects: [
            "Hospital Management System",
            "Job Portal API"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/amanverma",
        github: "github.com/amanverma",
        appliedDate: "2026-05-05"
    },

    {
        id: 4,
        name: "Sneha Iyer",
        age: 22,
        gender: "Female",
        dob: "2003-05-18",
        email: "sneha.iyer@example.com",
        phone: "+91 9765432109",
        address: "Chennai, Tamil Nadu",
        education: "B.Tech in AI & DS",
        institute: "VIT Chennai",
        cgpa: "9.1",
        experience: "Fresher",
        currentCompany: "N/A",
        appliedRole: "Data Analyst",
        jobsApplied: 4,
        score: 79,
        status: "Reviewing",
        skills: [
            "Python",
            "Pandas",
            "SQL",
            "Power BI"
        ],
        languages: [
            "English",
            "Tamil"
        ],
        certifications: [
            "Data Analytics by Coursera"
        ],
        projects: [
            "Sales Forecasting Model",
            "COVID Data Dashboard"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/snehaiyer",
        github: "github.com/snehaiyer",
        appliedDate: "2026-05-06"
    },

    {
        id: 5,
        name: "Karan Mehta",
        age: 26,
        gender: "Male",
        dob: "1999-08-09",
        email: "karan.mehta@example.com",
        phone: "+91 9345678123",
        address: "Mumbai, Maharashtra",
        education: "B.Tech in Electronics",
        institute: "BITS Pilani",
        cgpa: "8.5",
        experience: "4 Years",
        currentCompany: "CloudSync",
        appliedRole: "DevOps Engineer",
        jobsApplied: 2,
        score: 86,
        status: "Shortlisted",
        skills: [
            "AWS",
            "Docker",
            "Kubernetes",
            "CI/CD"
        ],
        languages: [
            "English",
            "Hindi"
        ],
        certifications: [
            "AWS Solutions Architect"
        ],
        projects: [
            "Cloud Deployment Pipeline",
            "Monitoring Dashboard"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/karanmehta",
        github: "github.com/karanmehta",
        appliedDate: "2026-05-07"
    }
    ,
    {
        id: 6,
        name: "Neha Kulkarni",
        age: 24,
        gender: "Female",
        dob: "2001-02-17",
        email: "neha.kulkarni@example.com",
        phone: "+91 9871234567",
        address: "Nagpur, Maharashtra",
        education: "B.Tech in Information Technology",
        institute: "Government College of Engineering",
        cgpa: "8.4",
        experience: "1 Year",
        currentCompany: "SoftEdge Technologies",
        appliedRole: "React Developer",
        jobsApplied: 4,
        score: 84,
        status: "Interviewing",
        skills: [
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Firebase"
        ],
        languages: [
            "English",
            "Hindi",
            "Marathi"
        ],
        certifications: [
            "Meta Frontend Developer Certificate"
        ],
        projects: [
            "ATS Dashboard",
            "Movie Recommendation App"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/nehakulkarni",
        github: "github.com/nehakulkarni",
        appliedDate: "2026-05-08"
    },

    {
        id: 7,
        name: "Arjun Nair",
        age: 27,
        gender: "Male",
        dob: "1998-11-03",
        email: "arjun.nair@example.com",
        phone: "+91 9988123456",
        address: "Kochi, Kerala",
        education: "M.Tech in Software Engineering",
        institute: "CUSAT",
        cgpa: "8.8",
        experience: "4 Years",
        currentCompany: "TechBridge",
        appliedRole: "Backend Developer",
        jobsApplied: 3,
        score: 90,
        status: "Shortlisted",
        skills: [
            "Spring Boot",
            "Java",
            "PostgreSQL",
            "Microservices"
        ],
        languages: [
            "English",
            "Malayalam"
        ],
        certifications: [
            "Oracle Certified Professional"
        ],
        projects: [
            "Banking API",
            "Inventory Management System"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/arjunnair",
        github: "github.com/arjunnair",
        appliedDate: "2026-05-09"
    },

    {
        id: 8,
        name: "Simran Kaur",
        age: 23,
        gender: "Female",
        dob: "2002-04-12",
        email: "simran.kaur@example.com",
        phone: "+91 9765987654",
        address: "Chandigarh, India",
        education: "B.Des in UI/UX",
        institute: "Chitkara University",
        cgpa: "9.0",
        experience: "Fresher",
        currentCompany: "N/A",
        appliedRole: "UI/UX Designer",
        jobsApplied: 5,
        score: 78,
        status: "Reviewing",
        skills: [
            "Figma",
            "Adobe XD",
            "Prototyping",
            "User Research"
        ],
        languages: [
            "English",
            "Punjabi",
            "Hindi"
        ],
        certifications: [
            "Google UX Design"
        ],
        projects: [
            "Travel App Design",
            "Finance Dashboard UI"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/simrankaur",
        github: "github.com/simrankaur",
        appliedDate: "2026-05-10"
    },

    {
        id: 9,
        name: "Rohit Deshmukh",
        age: 26,
        gender: "Male",
        dob: "1999-06-22",
        email: "rohit.deshmukh@example.com",
        phone: "+91 9345612789",
        address: "Pune, Maharashtra",
        education: "B.E in Computer Engineering",
        institute: "COEP Pune",
        cgpa: "8.3",
        experience: "3 Years",
        currentCompany: "CodeHive",
        appliedRole: "DevOps Engineer",
        jobsApplied: 2,
        score: 87,
        status: "Interviewing",
        skills: [
            "Docker",
            "AWS",
            "Linux",
            "CI/CD"
        ],
        languages: [
            "English",
            "Hindi",
            "Marathi"
        ],
        certifications: [
            "AWS DevOps Engineer"
        ],
        projects: [
            "CI/CD Automation",
            "Server Monitoring Tool"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/rohitdeshmukh",
        github: "github.com/rohitdeshmukh",
        appliedDate: "2026-05-10"
    },

    {
        id: 10,
        name: "Fatima Sheikh",
        age: 25,
        gender: "Female",
        dob: "2000-09-14",
        email: "fatima.sheikh@example.com",
        phone: "+91 9876501234",
        address: "Hyderabad, Telangana",
        education: "B.Tech in Data Science",
        institute: "IIIT Hyderabad",
        cgpa: "8.9",
        experience: "2 Years",
        currentCompany: "Insight Analytics",
        appliedRole: "Data Analyst",
        jobsApplied: 6,
        score: 92,
        status: "Hired",
        skills: [
            "Python",
            "SQL",
            "Tableau",
            "Machine Learning"
        ],
        languages: [
            "English",
            "Urdu",
            "Hindi"
        ],
        certifications: [
            "IBM Data Science Professional"
        ],
        projects: [
            "Sales Analytics Dashboard",
            "Customer Churn Prediction"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/fatimasheikh",
        github: "github.com/fatimasheikh",
        appliedDate: "2026-05-11"
    },

    {
        id: 11,
        name: "Vikram Joshi",
        age: 28,
        gender: "Male",
        dob: "1997-01-08",
        email: "vikram.joshi@example.com",
        phone: "+91 9456123789",
        address: "Jaipur, Rajasthan",
        education: "MCA",
        institute: "Rajasthan University",
        cgpa: "8.1",
        experience: "5 Years",
        currentCompany: "NextGen Tech",
        appliedRole: "Project Manager",
        jobsApplied: 2,
        score: 81,
        status: "Shortlisted",
        skills: [
            "Agile",
            "JIRA",
            "Team Management",
            "Scrum"
        ],
        languages: [
            "English",
            "Hindi"
        ],
        certifications: [
            "Certified Scrum Master"
        ],
        projects: [
            "Enterprise ERP System",
            "Banking Migration Project"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/vikramjoshi",
        github: "github.com/vikramjoshi",
        appliedDate: "2026-05-11"
    },

    {
        id: 12,
        name: "Ananya Roy",
        age: 22,
        gender: "Female",
        dob: "2003-10-05",
        email: "ananya.roy@example.com",
        phone: "+91 9012345678",
        address: "Kolkata, West Bengal",
        education: "BCA",
        institute: "Jadavpur University",
        cgpa: "8.6",
        experience: "Fresher",
        currentCompany: "N/A",
        appliedRole: "Frontend Developer",
        jobsApplied: 4,
        score: 76,
        status: "Reviewing",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        languages: [
            "English",
            "Bengali",
            "Hindi"
        ],
        certifications: [
            "Responsive Web Design"
        ],
        projects: [
            "Portfolio Website",
            "Recipe Finder App"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/ananyaroy",
        github: "github.com/ananyaroy",
        appliedDate: "2026-05-12"
    },

    {
        id: 13,
        name: "Manoj Kumar",
        age: 29,
        gender: "Male",
        dob: "1996-07-30",
        email: "manoj.kumar@example.com",
        phone: "+91 9234567812",
        address: "Lucknow, Uttar Pradesh",
        education: "B.Tech in Mechanical Engineering",
        institute: "IET Lucknow",
        cgpa: "7.9",
        experience: "6 Years",
        currentCompany: "AutoCore",
        appliedRole: "Operations Manager",
        jobsApplied: 1,
        score: 74,
        status: "Rejected",
        skills: [
            "Operations",
            "Leadership",
            "Excel",
            "Supply Chain"
        ],
        languages: [
            "English",
            "Hindi"
        ],
        certifications: [
            "Operations Management"
        ],
        projects: [
            "Warehouse Automation",
            "Inventory Optimization"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/manojkumar",
        github: "github.com/manojkumar",
        appliedDate: "2026-05-12"
    },

    {
        id: 14,
        name: "Aisha Khan",
        age: 24,
        gender: "Female",
        dob: "2001-12-18",
        email: "aisha.khan@example.com",
        phone: "+91 9345678910",
        address: "Bhopal, Madhya Pradesh",
        education: "B.Tech in Cybersecurity",
        institute: "MANIT Bhopal",
        cgpa: "8.8",
        experience: "2 Years",
        currentCompany: "SecureNet",
        appliedRole: "Cybersecurity Analyst",
        jobsApplied: 3,
        score: 89,
        status: "Interviewing",
        skills: [
            "Network Security",
            "Ethical Hacking",
            "SIEM",
            "Linux"
        ],
        languages: [
            "English",
            "Hindi"
        ],
        certifications: [
            "CEH"
        ],
        projects: [
            "Threat Detection System",
            "Network Monitoring Tool"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/aishakhan",
        github: "github.com/aishakhan",
        appliedDate: "2026-05-13"
    },

    {
        id: 15,
        name: "Siddharth Rao",
        age: 27,
        gender: "Male",
        dob: "1998-05-27",
        email: "siddharth.rao@example.com",
        phone: "+91 9456781230",
        address: "Bangalore, Karnataka",
        education: "B.Tech in Computer Science",
        institute: "RV College of Engineering",
        cgpa: "8.5",
        experience: "4 Years",
        currentCompany: "ByteWorks",
        appliedRole: "Full Stack Developer",
        jobsApplied: 5,
        score: 93,
        status: "Hired",
        skills: [
            "React",
            "Node.js",
            "MongoDB",
            "Express"
        ],
        languages: [
            "English",
            "Kannada",
            "Hindi"
        ],
        certifications: [
            "Full Stack Web Development"
        ],
        projects: [
            "E-Learning Platform",
            "Job Portal System"
        ],
        resume: "resume-link.pdf",
        linkedin: "linkedin.com/in/siddharthrao",
        github: "github.com/siddharthrao",
        appliedDate: "2026-05-13"
    }
];

export default candidateData;
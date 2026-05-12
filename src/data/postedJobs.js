const postedJobs = [
    {
        id: 1,
        title: "Frontend Developer",
        department: "Engineering",
        description:
            "Build responsive user interfaces using React.js and collaborate with backend teams to integrate APIs.",
        location: "Pune",
        type: "Full Time",
        experience: "1-3 Years",
        salary: "6 LPA",
        applicants: 24,
        status: "Open",
        postedDate: "2026-05-01"
    },
    {
        id: 2,
        title: "Backend Developer",
        department: "Engineering",
        description:
            "Develop scalable REST APIs and maintain backend services using Node.js and databases.",
        location: "Bangalore",
        type: "Full Time",
        experience: "2-4 Years",
        salary: "8 LPA",
        applicants: 31,
        status: "Open",
        postedDate: "2026-05-02"
    },
    {
        id: 3,
        title: "UI/UX Designer",
        department: "Design",
        description:
            "Design clean and modern user experiences for web and mobile applications.",
        location: "Mumbai",
        type: "Full Time",
        experience: "1-2 Years",
        salary: "5 LPA",
        applicants: 18,
        status: "Closed",
        postedDate: "2026-05-03"
    },
    {
        id: 4,
        title: "React Developer",
        department: "Engineering",
        description:
            "Create reusable React components and optimize frontend application performance.",
        location: "Hyderabad",
        type: "Remote",
        experience: "2-5 Years",
        salary: "9 LPA",
        applicants: 42,
        status: "Open",
        postedDate: "2026-05-04"
    },
    {
        id: 5,
        title: "DevOps Engineer",
        department: "Infrastructure",
        description:
            "Manage CI/CD pipelines, cloud deployments, and server infrastructure automation.",
        location: "Chennai",
        type: "Full Time",
        experience: "3-5 Years",
        salary: "10 LPA",
        applicants: 20,
        status: "Open",
        postedDate: "2026-05-04"
    },
    {
        id: 6,
        title: "Java Developer",
        department: "Engineering",
        description:
            "Develop enterprise-level backend applications using Java and Spring Boot.",
        location: "Nagpur",
        type: "Full Time",
        experience: "1-3 Years",
        salary: "7 LPA",
        applicants: 27,
        status: "Open",
        postedDate: "2026-05-05"
    },
    {
        id: 7,
        title: "QA Tester",
        department: "Quality Assurance",
        description:
            "Perform manual and automated testing to ensure product quality and reliability.",
        location: "Pune",
        type: "Hybrid",
        experience: "0-2 Years",
        salary: "4 LPA",
        applicants: 35,
        status: "Closed",
        postedDate: "2026-05-05"
    },
    {
        id: 8,
        title: "HR Executive",
        department: "Human Resources",
        description:
            "Coordinate recruitment activities and manage employee engagement processes.",
        location: "Delhi",
        type: "Full Time",
        experience: "1-2 Years",
        salary: "4.5 LPA",
        applicants: 16,
        status: "Open",
        postedDate: "2026-05-06"
    },
    {
        id: 9,
        title: "Data Analyst",
        department: "Analytics",
        description:
            "Analyze business data and generate actionable insights through dashboards and reports.",
        location: "Bangalore",
        type: "Remote",
        experience: "2-4 Years",
        salary: "8 LPA",
        applicants: 29,
        status: "Open",
        postedDate: "2026-05-06"
    },
    {
        id: 10,
        title: "Product Manager",
        department: "Product",
        description:
            "Lead product planning and collaborate with engineering and design teams for execution.",
        location: "Mumbai",
        type: "Full Time",
        experience: "4-6 Years",
        salary: "14 LPA",
        applicants: 14,
        status: "Open",
        postedDate: "2026-05-07"
    }
    , {
        id: 11,
        title: "Technical Support Engineer",
        department: "Support",
        description:
            "Provide technical assistance to clients and resolve product-related issues efficiently.",
        location: "Noida",
        type: "Hybrid",
        experience: "1-3 Years",
        salary: "5 LPA",
        applicants: 19,
        status: "Open",
        postedDate: "2026-05-07"
    },
    {
        id: 12,
        title: "Python Developer",
        department: "Engineering",
        description:
            "Develop backend services and automation scripts using Python and related frameworks.",
        location: "Pune",
        type: "Remote",
        experience: "2-5 Years",
        salary: "9 LPA",
        applicants: 38,
        status: "Open",
        postedDate: "2026-05-08"
    },
    {
        id: 13,
        title: "Android Developer",
        department: "Mobile",
        description:
            "Build and maintain Android applications with focus on performance and user experience.",
        location: "Bangalore",
        type: "Full Time",
        experience: "2-4 Years",
        salary: "8 LPA",
        applicants: 22,
        status: "Closed",
        postedDate: "2026-05-08"
    },
    {
        id: 14,
        title: "iOS Developer",
        department: "Mobile",
        description:
            "Develop iOS applications and collaborate with design teams to implement intuitive interfaces.",
        location: "Hyderabad",
        type: "Full Time",
        experience: "2-4 Years",
        salary: "8.5 LPA",
        applicants: 17,
        status: "Open",
        postedDate: "2026-05-09"
    },
    {
        id: 15,
        title: "Cloud Engineer",
        department: "Infrastructure",
        description:
            "Manage cloud infrastructure, deployments, and scalability using AWS services.",
        location: "Chennai",
        type: "Hybrid",
        experience: "3-5 Years",
        salary: "11 LPA",
        applicants: 25,
        status: "Open",
        postedDate: "2026-05-09"
    },
    {
        id: 16,
        title: "Machine Learning Engineer",
        department: "AI & Data",
        description:
            "Build and deploy machine learning models for predictive analytics and automation.",
        location: "Bangalore",
        type: "Full Time",
        experience: "2-5 Years",
        salary: "12 LPA",
        applicants: 21,
        status: "Open",
        postedDate: "2026-05-10"
    },
    {
        id: 17,
        title: "Content Writer",
        department: "Marketing",
        description:
            "Create engaging technical and marketing content for blogs, websites, and campaigns.",
        location: "Remote",
        type: "Part Time",
        experience: "1-2 Years",
        salary: "3.5 LPA",
        applicants: 28,
        status: "Open",
        postedDate: "2026-05-10"
    },
    {
        id: 18,
        title: "SEO Specialist",
        department: "Marketing",
        description:
            "Optimize website performance and improve search engine rankings through SEO strategies.",
        location: "Delhi",
        type: "Full Time",
        experience: "2-4 Years",
        salary: "6 LPA",
        applicants: 13,
        status: "Closed",
        postedDate: "2026-05-10"
    },
    {
        id: 19,
        title: "Cybersecurity Analyst",
        department: "Security",
        description:
            "Monitor systems for security threats and ensure compliance with security protocols.",
        location: "Mumbai",
        type: "Full Time",
        experience: "3-5 Years",
        salary: "13 LPA",
        applicants: 15,
        status: "Open",
        postedDate: "2026-05-11"
    },
    {
        id: 20,
        title: "Business Analyst",
        department: "Business Operations",
        description:
            "Gather business requirements and collaborate with teams to improve operational workflows.",
        location: "Pune",
        type: "Hybrid",
        experience: "2-4 Years",
        salary: "7.5 LPA",
        applicants: 26,
        status: "Open",
        postedDate: "2026-05-11"
    }
];

export default postedJobs;
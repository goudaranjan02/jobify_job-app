import React from 'react'
import { useNavigate } from 'react-router-dom';
const job = ({searchTerm}) => {
  const navigate=useNavigate()
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova Pvt Ltd",
      skills: "React, Tailwind CSS, JavaScript",
      description:
        "Build modern and responsive UI components for web apps. Collaborate with backend teams to deliver high-quality user experiences.",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "CloudEdge Solutions",
      skills: "Node.js, Express, MongoDB",
      description:
        "Design and maintain REST APIs, optimize database performance, and ensure application scalability and security.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Designify Studios",
      skills: "Figma, Adobe XD, Wireframing",
      description:
        "Create visually appealing and user-friendly designs for both web and mobile applications. Work closely with developers.",
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "InsightWorks",
      skills: "Python, Pandas, Power BI",
      description:
        "Analyze datasets, generate insights, and create dashboards to support business decisions and data-driven strategies.",
    },
    {
      id: 5,
      title: "Full Stack Engineer",
      company: "CodeWave",
      skills: "React, Node.js, MySQL",
      description:
        "Develop and deploy full-stack applications with strong integration between frontend and backend systems.",
    },
  ];

  const filteredJobs=jobs.filter((job)=>`${job.title} ${job.skills},${job.description}`
.toLowerCase()
.includes(searchTerm.toLowerCase()))
  return (
    <section className="w-full bg-gray-100 py-10 px-6">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
      {searchTerm ? `Results for "${searchTerm}"` : "Available Job Openings"}
    </h2>

    {filteredJobs.length > 0 ? (
      <div className="flex flex-col gap-9 items-center">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl shadow-md p-6 h-[20vh] flex flex-col justify-between w-full max-w-4xl"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
              <p className="text-sm text-gray-600 font-medium">{job.company}</p>
              <p className="text-sm text-gray-500 mt-1">{job.skills}</p>
              <p className="text-gray-700 text-sm mt-2 line-clamp-3">{job.description}</p>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button onClick={()=>navigate(`/job/${job.id}`,{state:job})} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm transition">
                View
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-600">No jobs found.</p>
    )}
  </section>
  )
}

export default job
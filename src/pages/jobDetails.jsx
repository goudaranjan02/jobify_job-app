import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';

const jobDetails = () => {
  const{state:job}=useLocation();
  const navigate=useNavigate();
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <div>
          <p>No job details found.</p>
          <button
            onClick={() => navigate("/jobs")}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">{job.title}</h1>
        <p className="text-lg text-gray-700 font-semibold mb-2">{job.company}</p>
        <p className="text-gray-600 mb-3">
          <span className="font-semibold">Required Skills:</span> {job.skills}
        </p>
        <hr className="my-4" />
        <p className="text-gray-700 leading-relaxed mb-6">
          {job.description.repeat(3)} {/* For demo, to make it look long */}
        </p>

        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default jobDetails
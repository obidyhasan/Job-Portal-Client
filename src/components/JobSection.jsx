import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

const JobSection = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs")
      .then((result) => {
        setJobs(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-20 text-textColor">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Jobs of the day</h1>
        <p className="text-base text-gray-400 mt-2">
          Search and connect with the right candidates faster.
        </p>
      </div>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default JobSection;

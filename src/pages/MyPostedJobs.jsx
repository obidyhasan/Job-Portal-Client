import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://job-portal-server-rho-six.vercel.app/jobs?email=${user.email}`
      )
      .then((result) => {
        setJobs(result.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  return (
    <div className="text-textColor font-roboto max-w-7xl mx-auto px-5 py-10">
      <h1 className="font-bold text-3xl text-center mb-10">My Posted Jobs</h1>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Company</th>
                <th>Job Title</th>
                <th>Apply Count</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={job.company_logo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{job.company}</div>
                        <div className="text-sm opacity-50">{job.location}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {job.title}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {job.salaryRange.min} - {job.salaryRange.max}{" "}
                      {job.salaryRange.currency}
                    </span>
                  </td>
                  <td>{job.applicationCount || "N/A"}</td>
                  <th>
                    <Link to={`/viewApplications/${job._id}`} className="btn">
                      Details
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPostedJobs;

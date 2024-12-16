import { IoLocationOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job;

  return (
    <div className="border bg-lightColor rounded-lg p-4 flex flex-col gap-5">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <figure>
            <img
              src={company_logo}
              className="w-12 h-12 object-contain rounded-lg"
              alt=""
            />
          </figure>
          <div>
            <h2 className="font-semibold text-lg">{company}</h2>
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <IoLocationOutline /> {location}
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-2">
          <h1 className="font-semibold text-lg">{title}</h1>
          <p className="text-sm text-gray-500">{description}</p>

          <div className="flex flex-wrap gap-1">
            {requirements.map((skill, idx) => (
              <button
                key={idx}
                className="btn btn-sm shadow-none bg-white text-xs font-medium"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">
          ${salaryRange.min}-{salaryRange.max}
        </h2>
        <Link
          to={`/jobDetails/${_id}`}
          className="btn bg-blue-100 font-medium text-primaryColor shadow-none"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
};

export default JobCard;

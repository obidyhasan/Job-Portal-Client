import { IoLocationOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const loaderData = useLoaderData();

  const {
    _id,
    title,
    location,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = loaderData;

  return (
    <div className="font-roboto max-w-7xl mx-auto px-5 py-20">
      <div className=" flex flex-col gap-5">
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

        <div className="flex flex-col items-start gap-5">
          <h2 className="font-bold text-lg">
            ${salaryRange.min}-{salaryRange.max}
          </h2>
          <Link
            to={`/applyJob/${_id}`}
            className="btn bg-blue-100 font-medium text-primaryColor shadow-none"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

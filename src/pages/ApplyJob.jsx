import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ApplyJob = () => {
  const loaderData = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { _id, title, company, company_logo } = loaderData;

  const handelOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const cvLink = form.cvLink.value;
    const githubLink = form.githubLink.value;
    const linkedInLink = form.linkedInLink.value;
    const portfolioLink = form.portfolioLink.value;

    const participantEmail = user.email;
    const jobId = _id;

    const applyInfo = {
      cvLink,
      githubLink,
      linkedInLink,
      portfolioLink,
      participantEmail,
      jobId,
    };

    axios
      .post("http://localhost:5000/apply-jobs", applyInfo)
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job apply successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/jobApplyList");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10 font-roboto text-textColor">
      <div>
        <figure>
          <img src={company_logo} className="mx-auto" alt="" />
        </figure>
        <h1 className="text-2xl font-bold text-center mt-2 mb-1">{company}</h1>
        <p className="text-base text-gray-500 text-center">{title}</p>
      </div>

      <div className="w-full my-10">
        <form onSubmit={handelOnSubmit} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">CV Link</span>
            </label>
            <input
              type="text"
              name="cvLink"
              placeholder="cv link"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Github Link</span>
            </label>
            <input
              type="text"
              name="githubLink"
              placeholder="github link"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">LinkedIn Link</span>
            </label>
            <input
              type="text"
              name="linkedInLink"
              placeholder="linkedIn link"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text">Portfolio Link</span>
            </label>
            <input
              type="text"
              name="portfolioLink"
              placeholder="portfolio link"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-primaryColor text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;

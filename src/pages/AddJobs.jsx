import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddJobs = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handelOnSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jobInfo = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJobInfo } = jobInfo;
    newJobInfo.salaryRange = { min, max, currency };
    newJobInfo.requirements = jobInfo.requirements.split("\n");
    newJobInfo.responsibilities = jobInfo.responsibilities.split("\n");

    axios
      .post("https://job-portal-server-rho-six.vercel.app/jobs", newJobInfo)
      .then((result) => {
        if (result.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job has been published",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/myPostedJobs");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="text-textColor font-roboto max-w-7xl mx-auto px-5 py-10">
      <h1 className="font-bold text-3xl text-center mb-10">Add Job</h1>

      <div>
        <div className=" w-full">
          <form onSubmit={handelOnSubmit} className="flex flex-col gap-3">
            {/* Item 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Company Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Name</span>
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="company name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Company Logo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company Logo URL</span>
                </label>
                <input
                  type="text"
                  name="company_logo"
                  placeholder="company logo url"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Job Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="job title"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Location*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="location"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* Item 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Job Type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Type</span>
                </label>
                <select
                  name="jobType"
                  defaultValue={"Pick the job type"}
                  className="select select-bordered w-full"
                >
                  <option disabled>Pick the job type</option>
                  <option>Hybrid</option>
                  <option>Full Time</option>
                  <option>Remote</option>
                  <option>Part Time</option>
                  <option>On Side</option>
                </select>
              </div>
              {/* Category*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Category</span>
                </label>
                <select
                  name="category"
                  defaultValue={"Pick the job category"}
                  className="select select-bordered w-full"
                >
                  <option disabled>Pick the job category</option>
                  <option>Engineering</option>
                  <option>Programming</option>
                  <option>Software Dev</option>
                  <option>Devops</option>
                </select>
              </div>
            </div>

            {/* Item 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* HR Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">HR Name</span>
                </label>
                <input
                  type="text"
                  name="hr_name"
                  placeholder="hr name"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* HR Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">HR Email</span>
                </label>
                <input
                  defaultValue={user?.email}
                  type="email"
                  name="hr_email"
                  placeholder="hr email"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* Item 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Status */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Job Status</span>
                </label>
                <select
                  name="status"
                  defaultValue={"Pick the status"}
                  className="select select-bordered w-full"
                >
                  <option disabled>Pick the status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              {/* HR Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  placeholder=""
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* Item 6 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Requirements */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Requirements</span>
                </label>
                <textarea
                  name="requirements"
                  required
                  placeholder="enter requirements single line"
                  className="textarea textarea-bordered textarea-md w-full"
                ></textarea>
              </div>
              {/* Responsibilities */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Responsibilities</span>
                </label>
                <textarea
                  name="responsibilities"
                  required
                  placeholder="enter responsibilities single line"
                  className="textarea textarea-bordered textarea-md w-full"
                ></textarea>
              </div>
            </div>

            {/* Salary Range */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {/* min */}
                <input
                  type="text"
                  name="min"
                  placeholder="min"
                  className="input input-bordered"
                  required
                />

                {/* Max */}
                <input
                  type="text"
                  name="max"
                  placeholder="max"
                  className="input input-bordered"
                  required
                />

                {/* currency */}
                <select
                  name="currency"
                  defaultValue={"Pick the currency"}
                  className="select select-bordered w-full"
                >
                  <option disabled>Pick the currency</option>
                  <option>bdt</option>
                  <option>usd</option>
                  <option>inr</option>
                  <option>eur</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
              <textarea
                name="description"
                required
                placeholder="job description"
                className="textarea min-h-28 textarea-bordered textarea-md w-full"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-primaryColor text-white border-none">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;

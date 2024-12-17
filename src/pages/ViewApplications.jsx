import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const loaderData = useLoaderData();

  function handelStatusChange(e, id) {
    const status = e.target.value;
    axios
      .patch(`http://localhost:5000/apply-jobs/${id}`, {
        status,
      })
      .then((result) => {
        if (result.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status has been updated",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="text-textColor font-roboto max-w-7xl mx-auto px-5 py-10">
      <h1 className="font-bold text-3xl text-center mb-10">
        View Applications
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loaderData.map((application, idx) => (
              <tr key={application._id}>
                <th>{idx + 1}</th>
                <td>{application.participantEmail}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handelStatusChange(e, application._id)}
                    defaultValue={application.status || "Change Status"}
                    className="select select-bordered select-sm w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Set Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;

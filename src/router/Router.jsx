import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ErrorLayout from "../layouts/ErrorLayout";
import JobDetails from "../pages/JobDetails";
import PrivateRouter from "./PrivateRouter";
import ApplyJob from "../pages/ApplyJob";
import JobApplyList from "../pages/JobApplyList";
import AddJobs from "../pages/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorLayout></ErrorLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/jobDetails/:id",
          element: (
            <PrivateRouter>
              <JobDetails></JobDetails>
            </PrivateRouter>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/jobs/${params.id}`),
        },
        {
          path: "/applyJob/:id",
          element: (
            <PrivateRouter>
              <ApplyJob></ApplyJob>
            </PrivateRouter>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/jobs/${params.id}`),
        },
        {
          path: "/jobApplyList",
          element: (
            <PrivateRouter>
              <JobApplyList></JobApplyList>
            </PrivateRouter>
          ),
        },
        {
          path: "/addJobs",
          element: (
            <PrivateRouter>
              <AddJobs></AddJobs>
            </PrivateRouter>
          ),
        },
        {
          path: "/myPostedJobs",
          element: (
            <PrivateRouter>
              <MyPostedJobs></MyPostedJobs>
            </PrivateRouter>
          ),
        },
        {
          path: "/viewApplications/:jobId",
          element: (
            <PrivateRouter>
              <ViewApplications></ViewApplications>
            </PrivateRouter>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/apply-jobs/jobs/${params.jobId}`),
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;

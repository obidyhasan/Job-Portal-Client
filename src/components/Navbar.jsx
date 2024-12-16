import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handelSignOut = () => {
    userLogout().catch((error) => {
      console.log(error.message);
    });
  };

  const activeClass = "text-primaryColor hover:text-primaryColor underline";
  const inactiveClass = "text-textColor hover:text-primaryColor";

  const navLink = (
    <div className="flex gap-3 lg:gap-6 lg:flex-row flex-col ">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? `${activeClass}` : `${inactiveClass}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/find"}
        className={({ isActive }) =>
          isActive ? `${activeClass}` : `${inactiveClass}`
        }
      >
        Job Find
      </NavLink>
      {user && (
        <NavLink
          to={"/jobApplyList"}
          className={({ isActive }) =>
            isActive ? `${activeClass}` : `${inactiveClass}`
          }
        >
          Apply Jobs
        </NavLink>
      )}
      {user && (
        <NavLink
          to={"/addJobs"}
          className={({ isActive }) =>
            isActive ? `${activeClass}` : `${inactiveClass}`
          }
        >
          Add Jobs
        </NavLink>
      )}
      {user && (
        <NavLink
          to={"/myPostedJobs"}
          className={({ isActive }) =>
            isActive ? `${activeClass}` : `${inactiveClass}`
          }
        >
          My Posted Jobs
        </NavLink>
      )}
    </div>
  );

  return (
    <div className="sticky top-0 z-10 font-roboto bg-lightColor text-textColor">
      <div className="navbar p-0 max-w-7xl mx-auto px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost mr-3 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-md  z-[1] mt-3 w-52 p-5 shadow"
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"} className="text-2xl font-extrabold hidden sm:flex">
            Job Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-5 items-center">
              <button
                onClick={handelSignOut}
                className="btn font-medium bg-primaryColor text-white hover:bg-black"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex gap-5 items-center">
              <Link
                to={"/register"}
                className="underline text-sm hover:text-primaryColor transform hover:-translate-y-1 duration-500"
              >
                Register
              </Link>

              <Link
                to={"/login"}
                className="btn font-medium bg-primaryColor text-white hover:bg-black"
              >
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

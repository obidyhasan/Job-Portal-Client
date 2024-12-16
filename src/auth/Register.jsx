import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const { userRegister, loginWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelUserRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userRegister(email, password)
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  const handelGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-5 font-roboto text-textColor">
      <div className=" w-full max-w-xs md:max-w-sm mx-auto py-20">
        <p className="text-primaryColor text-center text-base">Register</p>
        <h1 className="text-center font-semibold text-4xl mt-4 mb-2">
          Start For Free Today
        </h1>
        <p className="text-gray-500 text-center text-sm">
          Access to all features. No credit card require.
        </p>

        <button
          onClick={handelGoogleLogin}
          className="btn btn-outline border-gray-200 font-medium rounded w-full mt-6"
        >
          <FcGoogle className="text-xl"></FcGoogle> Sign up with Google
        </button>

        <div className="flex items-center my-5">
          <div className="h-[1px] border-t-[1px] flex-1"></div>
          <p className="px-5 text-gray-500">Or continue with</p>
          <div className="h-[1px] border-t-[1px] flex-1"></div>
        </div>

        <form onSubmit={handelUserRegister} className="flex flex-col gap-4">
          <div className="form-control">
            <label className="mb-2">
              <span className="label-text text-gray-600">Full Name *</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input rounded input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="mb-2">
              <span className="label-text text-gray-600">Photo URL *</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              className="input rounded input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="mb-2">
              <span className="label-text text-gray-600">Email Address *</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input rounded input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="mb-2">
              <span className="label-text text-gray-600">Password *</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="**********"
              className="input rounded input-bordered"
              required
            />
          </div>
          <div className="form-control mt-5">
            <button className="btn btn-primary rounded bg-textColor border-none text-white">
              Submit & Register
            </button>
          </div>
        </form>

        <p className="text-gray-500 text-sm text-center mt-5">
          {`Already have an Account? `}{" "}
          <Link className="text-primaryColor font-medium" to={"/login"}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

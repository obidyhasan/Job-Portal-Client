import Lottie from "lottie-react";
import errorLottie from "../assets/lottie/AnimationNotFound.json";
import { Link } from "react-router-dom";

const ErrorLayout = () => {
  return (
    <div className="w-full font-roboto min-h-screen flex items-center justify-center flex-col gap-5">
      <Lottie className="max-w-xl" animationData={errorLottie} loop={true} />
      <h1 className="font-semibold text-2xl">Page Not Found</h1>
      <Link to={"/"} className="btn">
        Go To Home
      </Link>
    </div>
  );
};

export default ErrorLayout;

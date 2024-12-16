import Lottie from "lottie-react";
import loadingLottie from "../assets/lottie/loadingLottie.json";

const LoadingLayout = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Lottie className="w-40" animationData={loadingLottie} loop={true} />;
    </div>
  );
};

export default LoadingLayout;

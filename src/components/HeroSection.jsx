import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="bg-lightColor font-roboto text-textColor">
      <div className="max-w-7xl mx-auto px-5 flex lg:flex-row flex-col gap-10 py-10 sm:py-20 ">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="font-bold text-4xl sm:leading-tight sm:text-6xl leading-tight">
            The <span className="text-primaryColor underline">Easiest Way</span>
            <br></br> to Get Your New Job
          </h1>
          <p className="my-6 text-gray-500 max-w-xl">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>

          <div className="join rounded shadow-inner">
            <div>
              <div>
                <input
                  className="input rounded join-item w-full"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="indicator">
              <button className="btn join-item bg-primaryColor text-white ">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:flex gap-5 flex-col hidden">
          <figure className="w-full flex justify-end">
            <motion.img
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-full sm:w-2/4 rounded-lg "
              src="https://i.ibb.co.com/n0F1hzK/family-therapy-psychologist-office.jpg"
              alt=""
            />
          </figure>
          <figure className="w-full flex justify-start">
            <motion.img
              animate={{ x: [0, 50, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-full sm:w-2/4 rounded-lg"
              src="https://i.ibb.co.com/sHjWGdR/portrait-smiling-hr-manager-having-interview-with-candidate.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

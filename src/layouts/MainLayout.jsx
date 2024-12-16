import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LoadingLayout from "./LoadingLayout";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingLayout></LoadingLayout>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

/* The common wrapper for all pages */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F2]">
      <Navbar />
      <main className="flex-grow w-full">
        {/* The current route's page component will render here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
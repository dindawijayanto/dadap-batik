import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import OurStory from "../pages/OurStory/OurStory";
import Process from "../pages/Process/Process";
import Contact from "../pages/Contact/Contact";
import TryOn from "../pages/TryOn/TryOn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Halaman  Home */}
        <Route index element={<Home />} />
        
        {/* Halaman Catalog */}
        <Route path="catalog" element={<Catalog />} />
        
        {/* Halaman Our Story*/}
        <Route path="our-story" element={<OurStory />} />

        {/* Halaman Process */}
        <Route path="process" element={<Process />} />
        
        {/* Halaman Contact */}
        <Route path="contact" element={<Contact />} />

        {/* Halaman Try On */}
        <Route path="try-on" element={<TryOn />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
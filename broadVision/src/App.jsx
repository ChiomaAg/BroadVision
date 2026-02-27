//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import MeetOurTeam from './pages/MeetOurTeam';
import Home from './pages/Home';
import Blog from "./pages/Blog";
import PartnerHMOs from "./pages/PartnerHMOs";
import Packages from './pages/Packages';
import HomeLayout from "./pages/HomeLayout";
import Gallery from "./components/Gallery";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {


  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route path="MeetOurTeam" element={< MeetOurTeam />} />
          <Route path="Blog" element={< Blog />} />
          <Route path="PartnerHMOs" element={< PartnerHMOs />} />
          <Route path="Packages" element={< Packages />} />
          <Route path="ContactUs" element={< ContactUs />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );

}



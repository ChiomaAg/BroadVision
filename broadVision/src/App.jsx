//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Blog from "./pages/Blog";
import PartnerHMOs from "./pages/PartnerHMOs";
import Services from './pages/Services';
import HomeLayout from "./pages/HomeLayout";

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route path="AboutUs" element={< AboutUs />} />
          <Route path="Blog" element={< Blog />} />
          <Route path="PartnerHMOs" element={< PartnerHMOs />} />
          <Route path="Services" element={< Services />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );

}



import Hero from "../components/Hero"
import HomeServices from "../components/HomeServices"
import AboutClinic from "../components/AboutClinic"
import Testimonials from "../components/Testimonials"
import LocationInfo from "../components/LocationInfo"
import Footer from "../components/Footer"
import CTA from "../components/CTA"
import NavBar from "../components/NavBar"
import Message from "../components/Message"

export default function Home() {
    return (

        <div>
            <div className="bg-gradient-to-b from-white to-[#FFF8DC] overflow-hidden rounded-b-[80px] border-b border-black ">
                <NavBar />
                <Hero />
            </div>
            
            <HomeServices />
            <AboutClinic />
            <Testimonials />
            <Message />
            <CTA />
            
        </div>
    )
}
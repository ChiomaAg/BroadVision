import Hero from "../components/Hero"
import HomeServices from "../components/HomeServices"
import AboutClinic from "../components/AboutClinic"
import Testimonials from "../components/Testimonials"
import LocationInfo from "../components/LocationInfo"
import Footer from "../components/Footer"

export default function Home() {
    return (
        
        <div>
            <Hero />
           <HomeServices/>
           <AboutClinic/>
           <Testimonials/>
           <LocationInfo/>
           <Footer/>
        </div>
    )
}
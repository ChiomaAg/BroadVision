import Hero from "../components/Hero"
import HomeServices from "../components/HomeServices"
import AboutClinic from "../components/AboutClinic"
import Testimonials from "../components/Testimonials"
import LocationInfo from "../components/LocationInfo"
import Footer from "../components/Footer"
import Message from "../components/Message"

export default function Home() {
    return (

        <div>
            <Hero />
            <HomeServices />
            <AboutClinic />
            <Testimonials />
            <LocationInfo />
            <Message />
        </div>
    )
}
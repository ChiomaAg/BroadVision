import Gallery from "../components/Gallery";
import MeetTheTeam from "../components/MeetTheTeam";
import CTA from "../components/CTA";
import Footer from "../components/Footer"
import Message from "../components/Message"
import NavBar from "../components/NavBar";
import MeetTeamHeading from "../components/MeetTeamHeading";

export default function AboutUs() {
    return (
        <div>
           <div className="bg-gradient-to-b from-white to-[#FFF8DC] overflow-hidden rounded-b-[80px] border-b border-black ">
                <NavBar />
                <MeetTeamHeading />
           </div>
            <MeetTheTeam />
            <Message />
            <CTA />
            
        </div>
    )
}
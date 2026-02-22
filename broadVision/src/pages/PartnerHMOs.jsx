import HMO from "../components/HMO"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import Message from "../components/Message"
import NavBar from "../components/NavBar"

export default function PartnerHMOs() {
    return (
        <div>
            <div className="bg-gradient-to-b from-white to-[#FFF8DC] overflow-hidden rounded-b-[80px] border-b border-black ">
                <NavBar />
                <div className="p-12">
                    <h1 className="text-4xl font-bold text-black">Our Partner HMOs</h1>
                    
                    <p className="mt-6 text-gray-700 leading-relaxed">
                        Claiming in-store and online is an easy process. <br />
                        In-store, we offer on-the-spot direct billing to most major insurance providers. <br />
                    </p>
                </div>
            </div>
            <HMO />
            <Message />
            <CTA />

        </div>
    )
}
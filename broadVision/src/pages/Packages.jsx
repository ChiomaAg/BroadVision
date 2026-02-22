import ServicesandPakages from "../components/ServicesandPakages";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Message from "../components/Message"

export default function Services() {

    return (
        <div>
            <div className="bg-gradient-to-b from-white to-[#FFF8DC] overflow-hidden rounded-b-[80px] border-b border-black ">
                <NavBar />
                <div className="p-12">
                    <h2 className="text-6xl font-bold  text-gray-900 mb-3 mt-6">
                        Packages
                    </h2>
                    <p className=" text-gray-600 mb-12 max-w-2xl ">
                        Enjoy special offers created to make quality eyecare more accessible for you and your family.
                    </p>
                </div>
            </div>

            <ServicesandPakages />
            <Message />
            <CTA />
            
        </div>
    );
}

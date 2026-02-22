import { FaEye } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";

export default function HomeServices() {

    const services = [
        {
            title: "Comprehensive Eye Examinations",
            desc: "Prevention-focused, diagnostic and treatment-driven eye assessments tailored to each patient.",
            icon: FaEye,
        },
        {
            title: "Prescription Lenses & Contact Lenses",
            desc: "Ophthalmic lenses, specialty add-ons, prescription and cosmetic contact lenses designed for comfort and clarity.",
            icon: FaGlasses,
        },
        {
            title: "Frames & Eyewear Collection",
            desc: "A wide range of budget-friendly and designer ophthalmic frames with personalized style recommendations.",
            icon: FaShoppingBag,
        },
        {
            title: "Health Screening & Age-Specific Eye Care",
            desc: "Routine checks of BP, blood sugar, pulse rate, and age-tailored vision care from preschool to the elderly.",
            icon: FaHeartbeat,
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-black text-black">Our Services</h2>
                <div className="w-16 h-1 bg-[#FDE68A] mx-auto mt-4 rounded-full"></div>
                <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                    Trusted eye care solutions tailored for patients of all ages.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15">
                    {services.map((service, idx) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={idx}
                                className="p-7 rounded-2xl bg-[#FFF8DC]  border border-black shadow-sm 
                 transition duration-300 hover:-translate-y-1 hover:shadow-md space-y-4"
                            >
                                <div className="text-[#1434A4] flex justify-center">
                                    <Icon size={22} />
                                </div>

                                <h3 className="font-semibold text-lg text-gray-900">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    {service.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
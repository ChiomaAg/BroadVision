
export default function HomeServices() {

    const services = [
        {
            title: "Comprehensive Eye Examinations",
            desc: "Prevention-focused, diagnostic and treatment-driven eye assessments tailored to each patient.",
        },
        {
            title: "Prescription Lenses & Contact Lenses",
            desc: "Ophthalmic lenses, specialty add-ons, prescription and cosmetic contact lenses designed for comfort and clarity.",
        },
        {
            title: "Frames & Eyewear Collection",
            desc: "A wide range of budget-friendly and designer ophthalmic frames with personalized style recommendations.",
        },
        {
            title: "Health Screening & Age-Specific Eye Care",
            desc: "Routine checks of BP, blood sugar, pulse rate, and age-tailored vision care from preschool to the elderly.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                    Trusted eye care solutions tailored for patients of all ages.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {services.map((service, idx) => (
                        <div key={idx} className="p-6 rounded-xl shadow-sm border hover:shadow-md transition">
                            <h3 className="font-semibold text-lg text-gray-900">{service.title}</h3>
                            <p className="mt-2 text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
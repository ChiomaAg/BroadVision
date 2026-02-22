

export default function ServicesandPakages() {

    const services = [
        {
            title: "Comprehensive Eye Examinations",
            description:
                "We provide thorough vision assessments designed to prevent, diagnose, and manage a wide range of eye conditions. Each exam is personalized to your visual needs, lifestyle, and long-term eye health.",
            icon: "🩺",
        },
        {
            title: "Prescription Lenses & Add-Ons",
            description:
                "From single-vision and bifocal lenses to advanced blue-light filters, anti-glare coatings, and photochromic options, we offer high-quality ophthalmic lenses tailored to every patient.",
            icon: "👓",
        },
        {
            title: "Eyewear Frames (Budget & Designer)",
            description:
                "Choose from a curated collection of durable, stylish eyewear frames for adults and children. Our selection includes both premium designer brands and affordable everyday options.",
            icon: "🕶️",
        },
        {
            title: "Contact Lens Services",
            description:
                "We offer prescription contact lenses, cosmetic lenses, and specialty ophthalmic contacts. Our team ensures proper fitting, comfort evaluation, and personalized guidance for safe wear.",
            icon: "👁️",
        },
        {
            title: "Vital Signs Screening",
            description:
                "To support whole-patient care, we conduct routine checks including blood pressure, blood sugar, and pulse rate — with referrals to the appropriate specialists when necessary.",
            icon: "💉",
        },
        {
            title: "Age-Specific Eyecare",
            description:
                "We provide tailored eye care for preschoolers, students, young adults, middle-aged adults, and seniors. Each age group receives personalized screening, guidance, and early-intervention support.",
            icon: "🧒👵",
        },
    ];

    const packages = [
        {
            title: "Family Package",
            description:
                "Register three family members and enjoy free registration plus complimentary consultation for the fourth member.",
            icon: "👨‍👩‍👧‍👦",
        },
        {
            title: "Eyewear Loyalty Offer",
            description:
                "Buy three pairs of glasses within a year and receive a free pair of reading glasses as a thank-you for your trust.",
            icon: "👓",
        },
        {
            title: "Birthday Package",
            description:
                "Enjoy a free eye test on your birthday plus 10% off your total bill — a thoughtful treat on your special day.",
            icon: "🎂",
        },
        {
            title: "Referral Discount",
            description:
                "Refer a new patient and receive 10% off your next bill. Your recommendations help us grow.",
            icon: "🎁",
        },
    ];

    return (
        <div className="bg-white py-15 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">

                {/* PAGE HEADER */}
                

                {/* --- PACKAGES SECTION --- */}
               


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {packages.map((pkg, i) => (
                        <div
                            key={i}
                            className="p-7 rounded-2xl bg-[#FFF8DC]  border border-black shadow-sm 
                 transition duration-300 hover:-translate-y-1 hover:shadow-md space-y-4"
                        >
                            <div className="text-5xl mb-4 flex justify-center">{pkg.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900">{pkg.title}</h3>
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                {pkg.description}
                            </p>
                        </div>
                    ))}
                </div>



            </div>

        </div>
    );
}
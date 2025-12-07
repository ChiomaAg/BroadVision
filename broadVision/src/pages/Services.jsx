export default function Services() {
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

  return (
    <div className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">

        {/* PAGE HEADER */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* ICON */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

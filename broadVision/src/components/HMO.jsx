
import anchor from "../assets/anchor.png"
import axa from "../assets/axa-logo.png"
import clearline from "../assets/Clearline.png"
import ives from "../assets/ives.png"
import liberty from "../assets/Libertyhub.png"
import medexia from "../assets/medexia.png"
import tht from "../assets/tht.svg"

const hmos = [
  {
    name: "Liberty Blue",
    logo: liberty,
    website: "https://libertyhub.ng/health-insurance-registration/",
    blurb: "Trusted healthcare coverage for families and corporate clients."
  },
  {
    name: "Medexia",
    logo: medexia,
    website: "https://medexia.com/",
    blurb: "Affordable and accessible managed healthcare services."
  },
  {
    name: "Anchor HMO",
    logo: anchor,
    website: "https://anchorhmo.com/",
    blurb: "Providing quality healthcare plans across Nigeria."
  },
  {
    name: "THT – Total Health Trust",
    logo: tht,
    website: "https://tht.tangerine.africa/",
    blurb: "A leading HMO offering extensive national coverage."
  },
  {
    name: "Clearline HMO",
    logo: clearline,
    website: "https://clearlinehmo.net/",
    blurb: "Comprehensive health insurance with flexible plans."
  },
  {
    name: "AXA Mansard",
    logo: axa,
    website: "https://www.axamansard.com/",
    blurb: "Nigeria’s most recognized health insurance provider."
  },
  {
    name: "Ives Medicals",
    logo: ives,
    website: "https://ivesmedicare.com/",
    blurb: "Dedicated to providing seamless healthcare access."
  },
  
];

export default function PartnerHMOs() {
  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">

      {/* TOP SECTION */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-[#1434A4]">Our Partner HMOs</h1>
        <p className="mt-6 text-gray-700 leading-relaxed">
          Claiming in-store and online is an easy process. <br />
          In-store, we offer on-the-spot direct billing to most major insurance providers. <br />
          For online purchases, we will send you an itemized receipt once your order is processed
          with all the information your insurance provider needs for reimbursement.
        </p>
      </div>

      {/* HMO GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {hmos.map((hmo, index) => (
          <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
            
            {/* LOGO */}
            <img
              src={hmo.logo}
              alt={hmo.name}
              className="w-28 h-28 object-contain mx-auto"
            />

            {/* NAME */}
            <h3 className="text-xl font-semibold text-center mt-4">
              {hmo.name}
            </h3>

            {/* BLURB */}
            <p className="text-gray-600 text-center text-sm mt-2">
              {hmo.blurb}
            </p>

            {/* LINK */}
            <div className="text-center mt-4">
              <a
                href={hmo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1434A4] font-semibold hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
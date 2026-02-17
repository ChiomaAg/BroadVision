
import anchor from "../assets/anchor.png"
import reliance from "../assets/reliance.svg"
import clearline from "../assets/Clearline.png"
import ihms from "../assets/ihms.png"
import liberty from "../assets/Libertyhub.png"
import mbo from "../assets/mbo.png"
import tht from "../assets/tht.svg"
import leadway from "../assets/leadway.png"
import oceanic from "../assets/oceanic.png"
import hadiel from "../assets/hadiel.webp"
import crown from "../assets/crown.jpg"
import quest from "../assets/quest.png"
import novo from "../assets/novo.webp"

const hmos = [
  {
    name: "Liberty Blue",
    logo: liberty,
    website: "https://libertyhub.ng/health-insurance-registration/",
    blurb: "Trusted healthcare coverage for families and corporate clients."
  },
  {
    name: "Leadway",
    logo: leadway,
    website: "https://www.leadway.com/",
    blurb: "Get cover for your life against the risk of death, injury, illness or against accident expenses."
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
    name: "MB&O",
    logo: mbo,
    website: "https://www.mbandohmo.com/",
    blurb: "Quality and affordable health insurance that you can trust"
  },
  {
    name: "IHMS",
    logo: ihms,
    website: "https://ihmsnigeria.com/",
    blurb: "Dedicated to providing seamless healthcare access."
  },
  {
    name: "Reliance HMO",
    logo: reliance,
    website: "https://getreliancehealth.com/nigeria/",
    blurb: "Get the highest quality of healthcare services for your team and their families."
  },
  {
    name: "Oceanic Health",
    logo: oceanic,
    website: "https://oceanichealth.com/",
    blurb: "Healthcare insurance provider duly accredited by the NHIA, offering optimum services in the healthcare industry."
  },
  {
    name: "Hadiel Health",
    logo: hadiel,
    website: "https://hadiel.com.ng/",
    blurb: "Solving out of pocket expenses via innovative financing models."
  },
  {
    name: "Crown Jewel",
    logo: crown,
    website: "https://crownjewelhmo.com/",
    blurb: "Healthcare solutions for a vibrant and energetic generation."
  },
  {
    name: "Quest Medicare",
    logo: quest,
    website: "https://questhmo.com/",
    blurb: "All your protection under one roof."
  },
  {
    name: "Novo Health Africa",
    logo: novo,
    website: "https://novohealthafrica.org/",
    blurb: "We bring quality and affordable healthcare closer to you"
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
            <h3 className=" text-gray-600 text-xl font-semibold text-center mt-4">
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
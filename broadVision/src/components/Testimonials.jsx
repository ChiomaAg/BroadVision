import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const feedback = [
    {
      name: "Jube Ojomo",
      text: "Excellent service. It is quite affordable. I like the professionalism displayed by the staff. I recommend this eye clinic for anyone who wants good service at an affordable price.",
    },
    {
      name: "Johnson Bolaji",
      text: "Broadvision Eye Clinic has been wonderful in their service, excellent in attending to eye issues, and I recommend them for everyone that needs good service.",
    },
    {
      name: "Sede Bangali",
      text: "Quality is the keyword...That's my wife's preferred place for eyes checkup and review/replacement of her glasses ! She feel all her needs are properly taken care off. My kids and I do also wear glasses from the clinic since 2015.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-16 text-center">


        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-gray-900">
          What Patients Say
        </h2>
        <div className="w-16 h-1 bg-[#FDE68A] mx-auto mt-4 rounded-full"></div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedback.map((f, idx) => (
            <div
              key={idx}
              className="text-left p-8 rounded-2xl bg-[#FFF8DC]
                         border border-black shadow-sm
                         transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <FaQuoteLeft className="text-[#1434A4] opacity-80" size={18} />

              <p className="mt-4 text-gray-700 leading-8">
                “{f.text}”
              </p>

              <p className="mt-6 font-semibold text-[#1434A4]">
                — {f.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
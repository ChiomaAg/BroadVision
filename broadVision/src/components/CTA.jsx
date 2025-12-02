

export default function CTA() {
  return (
    <section className="bg-[#f5f8ff] py-20 mt-16">
      <div className="max-w-3xl mx-auto text-center px-6">

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Visit Us or Give Us a Call
        </h2>

        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          We are committed to providing quality, compassionate eye care.  
          Reach us using the contact details below.
        </p>

        <div className="mt-10 space-y-4 text-gray-700 text-lg">

          {/* ADDRESS */}
          <p>
            <strong className="text-gray-900">Address:</strong>  
            55 Diya Street, Ifako Gbagada, Lagos
          </p>

          {/* PHONE */}
          <p>
            <strong className="text-gray-900">Phone:</strong>  
            <a href="tel:7806678087" className="text-[#1434A4] hover:underline">
              780-667-8087
            </a>
          </p>

          {/* EMAIL (optional but professional) */}
          <p>
            <strong className="text-gray-900">Email:</strong>  
            <a href="mailto:broadvisioneyeclinic@gmail.com" className="text-[#1434A4] hover:underline">
              broadvisioneyeclinic@gmail.com
            </a>
          </p>

          {/* HOURS */}
          <div className="mt-6">
            <strong className="text-gray-900 block mb-2">Hours:</strong>
            <p>Mon–Fri: 9am–6pm</p>
            <p>Saturday: 10am–4pm</p>
            <p>Sunday: Closed</p>
          </div>

        </div>
      </div>
    </section>
  );
}

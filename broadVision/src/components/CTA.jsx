
import Message from "./Message"

export default function CTA() {
  return (
    <section id="contact" className="bg-[#f5f8ff] py-20 mt-16">
      <div className="max-w-3xl mx-auto text-center px-6">

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Visit Us or Give Us a Call
        </h2>


        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          We are committed to providing quality, compassionate eye care.
          Reach us using the contact details below.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-12 text-left">

          <div className="mt-12">
            <Message />
          </div>

          <div className=" space-y-4 text-gray-700 text-lg">

            {/* ADDRESS */}
            <p>
              <strong className="text-gray-900">Address:</strong>
              55 Diya Street, Ifako Gbagada, Lagos
            </p>

            {/* PHONE */}
            <p>
              <strong className="text-gray-900">Phone:</strong>
              <a href="tel: 08130887137" className="text-[#1434A4] hover:underline">
                08130887137,
              </a>
              
              <a href="tel: 07055570730" className="text-[#1434A4] hover:underline">
                   07055570730
              </a>
            </p>

            {/* EMAIL  */}
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
              <p>Saturday and Public Holidays: 10am–4pm</p>
              <p>Sunday: Closed</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

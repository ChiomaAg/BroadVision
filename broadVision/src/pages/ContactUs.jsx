
import NavBar from "../components/NavBar";
import CTA from "../components/CTA";
import Message from "../components/Message"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactUs() {
 
  const clinic = {
    address: "55 Diya Street, Ifako Gbagada, Lagos",
    phone1: "+2347055570730",
    phone2: "+2348130887137",
    email: "broadvisioneyecentre@gmail.com",
    hours: [
      { label: "Mon–Fri", value: "9am–6pm" },
      { label: "Saturday & Public Holidays", value: "10am–4pm" },
      { label: "Sunday", value: "Closed" },
    ],
  };

  return (
    <div>
      <NavBar />

      {/* HERO / HEADER */}
      <section className="bg-gradient-to-b from-white to-[#FFF8DC] overflow-hidden rounded-b-[80px]  border-b border-black ">
        <div className="max-w-6xl  px-4 sm:px-6 lg:px-12 py-15 ">
          
          <h1 className="mt-3  sm:text-5xl text-4xl font-bold text-black">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl leading-8">
            Send a message, call, or visit us. We’re happy to help with bookings, questions,
            and eye care advice.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* LEFT: MESSAGE BOX CARD */}
            <div className="bg-white rounded-3xl shadow-xl border border-black/10 p-8 sm:p-10">
              <Message />
            </div>

            {/* RIGHT: CONTACT DETAILS CARD */}
            <div className="bg-[#FFF8DC] rounded-3xl shadow-md border border-black/10 p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-gray-900">Clinic Information</h2>
              <p className="mt-2 text-gray-600 leading-7">
                Prefer to call or visit? Here are our details.
              </p>

              <div className="mt-7 space-y-5 text-gray-800">
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="mt-1 text-[#1434A4]" />
                  <p className="leading-7">{clinic.address}</p>
                </div>

                <div className="flex gap-3">
                  <FaPhoneAlt className="mt-1 text-[#1434A4]" />
                  <div className="space-y-1">
                    <a className="hover:underline" href={`tel:${clinic.phone1}`}>
                      {clinic.phone1}
                    </a>
                    <br />
                    <a className="hover:underline" href={`tel:${clinic.phone2}`}>
                      {clinic.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaEnvelope className="mt-1 text-[#1434A4]" />
                  <a className="hover:underline" href={`mailto:${clinic.email}`}>
                    {clinic.email}
                  </a>
                </div>
              </div>

              <div className="mt-10 border-t border-black/10 pt-6">
                <div className="flex items-center gap-2">
                  <FaClock className="text-[#1434A4]" />
                  <h3 className="text-lg font-semibold text-gray-900">Work Hours</h3>
                </div>

                <div className="mt-4 space-y-2 text-gray-800">
                  {clinic.hours.map((h) => (
                    <p key={h.label} className="leading-7">
                      <span className="font-semibold">{h.label}:</span> {h.value}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      <CTA />
    </div>
  );
}
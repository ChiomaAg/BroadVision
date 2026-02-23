import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo1.png";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F2A] text-white mt-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16 py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {/* BRAND */}
          <div className="md:col-span-1">
            <img src={logo} alt="Broadvision" className="h-8 w-auto" />
            <p className="mt-5 text-white/80 leading-7">
              World-class eye care with modern diagnostics, experienced optometrists, and compassionate service.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#FDE68A] px-4 py-3
                         font-semibold text-[#0B1F2A] hover:opacity-90 transition"
            >
              Message Us →
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-[#FDE68A] uppercase">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-white/85">
              <li><NavLink className="hover:text-white" to="/Home">Home</NavLink></li>
              <li><NavLink className="hover:text-white" to="/AboutUs">About Us</NavLink></li>
              <li><NavLink className="hover:text-white" to="/Packages">Packages</NavLink></li>
              <li><NavLink className="hover:text-white" to="/PartnerHMOs">Partner HMOs</NavLink></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-[#FDE68A] uppercase">
              Contact
            </h3>

            <ul className="mt-5 space-y-4 text-white/85">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#FDE68A]" />
                <span>55 Diya Street, Ifako Gbagada, Lagos</span>
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-[#FDE68A]" />
                <a className="hover:text-white" href="tel:+2347055570730">
                  07055570730
                </a>
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-[#FDE68A]" />
                <a className="hover:text-white" href="tel:+2348130887137">
                  08130887137
                </a>
              </li>

              <li className="flex gap-3">
                <FaEnvelope className="mt-1 text-[#FDE68A]" />
                <a className="hover:text-white" href="mailto:broadvisioneyecentre@gmail.com">
                  broadvisioneyecentre@gmail.com
                </a>
              </li>

              
            </ul>
          </div>

          {/* HOURS */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-[#FDE68A] uppercase">
              Work Hours
            </h3>

            <div className="mt-5 space-y-3 text-white/85 leading-7">
              <p><span className="text-white">Mon–Fri:</span> 9am–6pm</p>
              <p><span className="text-white">Saturday & Public Holidays:</span> 10am–4pm</p>
              <p><span className="text-white">Sunday:</span> Closed</p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Broadvision Eye Clinic. All rights reserved.
          </p>

          <p className="text-white/60 text-sm">
            Designed with love by Chioma Agosi :)
          </p>
        </div>
      </div>
    </footer>
  );
}
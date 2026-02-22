import eyes from "../assets/child_eyes.jpg";
import { NavLink } from "react-router-dom";

export default function AboutClinic() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-16">
        <div className="relative">
          {/* IMAGE CARD */}
          <div className="overflow-hidden rounded-3xl shadow-sm border border-black/10">
            <img
              src={eyes}
              alt="Clinic"
              className="h-[320px] w-full object-cover sm:h-[420px]"
            />
          </div>

          {/* OVERLAY CARD */}
          <div
            className="mt-8 lg:mt-0 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2
                       w-full lg:w-[520px]
                       rounded-3xl bg-[#0B1F2A] text-white shadow-lg
                       p-8 sm:p-10"
          >
            <p className="text-sm font-semibold tracking-widest text-[#FDE68A] uppercase">
              About Broadvision
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
              About Broadvision Eye Clinic
            </h2>

            <p className="mt-5 text-white/90 leading-8">
              Broadvision Eye Clinic is dedicated to providing world-class eye care through modern
              diagnostics, experienced optometrists, and compassionate service. Our goal is to help
              every patient achieve their best possible vision.
            </p>

            <p className="mt-4 text-white/90 leading-8">
              From routine checkups to advanced treatments, we support your vision health every step of the way.
            </p>

            <NavLink
              to="/AboutUs"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#FDE68A] hover:underline"
            >
              Learn more <span aria-hidden>→</span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
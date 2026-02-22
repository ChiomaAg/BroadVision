import eyes from "../assets/child_eyes.jpg";
import { NavLink } from "react-router-dom";

export default function AboutClinic() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16">
        <div className="relative">
          {/* IMAGE CARD */}
          <div className="overflow-hidden rounded-3xl shadow-sm border border-black/10 lg:w-[70%]">
            <img
              src={eyes}
              alt="Clinic"
              className="h-[320px] w-full object-cover sm:h-[580px]"
            />
          </div>

          {/* OVERLAY CARD */}
          <div
            className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2
                       w-full lg:w-[520px] border border-black
                       rounded-3xl bg-[#FFF8DC] text-white shadow-lg
                       p-8 sm:p-10"  
          >
            <p className="text-sm font-semibold tracking-widest text-[#1434A4] uppercase">
              About Broadvision
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl text-black font-semibold">
              Caring for Your Vision at Every Stage of Life
            </h2>

            <p className="mt-5 text-black leading-8">
              Broadvision Eye Clinic is dedicated to providing world-class eye care through modern
              diagnostics, experienced optometrists, and compassionate service. Our goal is to help
              every patient achieve their best possible vision.
            </p>

            <p className="mt-4 text-black leading-8">
              From routine checkups to advanced treatments, we support your vision health every step of the way.
            </p>

            <NavLink
              to="/AboutUs"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1434A4] hover:underline"
            >
              Learn more <span aria-hidden>→</span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
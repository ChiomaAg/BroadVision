import { NavLink } from "react-router-dom";

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-transparent px-6 pt-15 pb-32 lg:px-8 ">

           

            {/* HERO CONTENT */}
            <div className="mr-auto px-4 sm:px-6 lg:px-16 text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Eye Care with Passion
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-800">
                    At Broadvision Eye Clinic, we provide world-class diagnostics, treatment, and personalized
                    care to support your vision health with compassion and expertise.
                </p>

                <div className="mt-10 flex items-center gap-x-6">
                    <a
                        href="#contact"
                        className="rounded-xl bg-[#1434A4] px-5 py-3 text-md font-semibold text-white shadow 
                       hover:bg-[#0f2a84] focus-visible:outline-2 
                       focus-visible:outline-offset-2 focus-visible:outline-[#1434A4]"
                    >
                        Send a Message
                    </a>

                    <NavLink to="/Packages" className="text-md font-semibold text-gray-900">
                        View Packages →
                    </NavLink>
                </div>
            </div>

        </div>
    );
}

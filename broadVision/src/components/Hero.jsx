import { NavLink } from "react-router-dom";

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 pt-24 pb-32 lg:px-8">

            {/* TOP GRADIENT BLOB */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-xl -translate-x-1/2 rotate-30
                     bg-linear-to-tr from-[#a2d2ff] to-[#b8c0ff] opacity-60
                     sm:left-[calc(50%-30rem)] sm:w-6xl"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                ></div>
            </div>

            {/* HERO CONTENT */}
            <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Comprehensive Eye Care for a Brighter Futureeeee
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                    At Broadvision Eye Clinic, we provide world-class diagnostics, treatment, and personalized
                    care to support your vision health with compassion and expertise.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#book"
                        className="rounded-md bg-[#1434A4] px-5 py-3 text-sm font-semibold text-white shadow 
                       hover:bg-[#0f2a84] focus-visible:outline-2 
                       focus-visible:outline-offset-2 focus-visible:outline-[#1434A4]"
                    >
                        Book an Appointment
                    </a>

                    <NavLink to="/Services" className="text-sm font-semibold text-gray-900">
                        View Services →
                    </NavLink>
                </div>
            </div>

            {/* BOTTOM GRADIENT BLOB */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 
                     bg-gradient-to-tr from-[#a2d2ff] to-[#b8c0ff] opacity-60 
                     sm:left-[calc(50%+36rem)] sm:w-[72rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                ></div>
            </div>

            {/* BOTTOM-LEFT GRADIENT BLOB */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu 
             overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    className="relative left-[calc(50%-40rem)] aspect-[1155/678] w-[36rem] 
               -translate-x-1/2 bg-gradient-to-tr from-[#a2d2ff] to-[#b8c0ff] 
               opacity-60 sm:left-[calc(50%-60rem)] sm:w-[72rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                ></div>
            </div>

        </div>
    );
}

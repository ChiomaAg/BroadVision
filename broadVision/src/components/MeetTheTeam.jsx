import doc1 from '../assets/doctor.jpeg';
import doc2 from '../assets/doctor.jpeg';
import doc3 from '../assets/doctor.jpeg';
import doc4 from '../assets/doctor.jpeg';

export default function MeetTheTeam() {

    const team = [
        {
            name: "Dr. Agosi I.V., OD (UNIBEN), MSc Public Health (UNILAG)",
            role: "Medical Director / Optometrist",
            image: doc1, // replace with actual import
            bio: "Dr. Agosi is an accomplished Optometrist with over twenty years of hands-on clinical experience across both public and private healthcare settings. Known for her keen diagnostic insight and deep commitment to patient wellbeing, she brings a blend of expertise, compassion, and leadership to the clinic. She is passionate about improving vision outcomes and is dedicated to making quality eyecare accessible to every patient who walks through our doors.",
        },
        {
            name: "Dr. Davidson Edith (OD)",
            role: "Practice Manager",
            image: doc2,
            bio: "With more than a decade of experience in modern eyecare, Dr. Davidson ensures the clinic runs smoothly while delivering exceptional patient support. She is skilled in using advanced computerized diagnostic tools to assess visual conditions and guide patients toward the best solutions. Her organized approach, clinical knowledge, and warm personality make her an invaluable part of the BroadVision team.",
        },
        {
            name: "Miss Fortune Ogbonna",
            role: "Customer Service & HMO Officer",
            image: doc3,
            bio: "Fortune is often the first friendly face our patients meet, and she takes that responsibility to heart. Her calm, welcoming presence helps patients feel relaxed from the moment they arrive. Beyond her excellent communication skills, she assists with HMO coordination and ensures every visit is seamless, reassuring, and stress-free.",
        },
        {
            name: "Miss Vivian Solomon",
            role: "Customer Service II",
            image: doc4,
            bio: "Vivian brings cheer warmth, and genuine care to every interaction. Her positive energy brightens the clinic and helps patients feel comfortable throughout their visit. Whether guiding you through registration or answering your questions, she is committed to making your experience pleasant and memorable.",
        },
    ];



    return (
        <section className="py-20 px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                    Our dedicated professionals are committed to providing exceptional,
                    compassionate, and patient-centered eye care.
                </p>
            </div>

            <div className="space-y-10 md:space-y-12 max-w-6xl mx-auto ">
                {team.map((member, i) => (
                    <div
                        key={i}
                        className="flex flex-col md:flex-row gap-7 mx-auto"
                    >
                        {/* LEFT — IMAGE */}
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover shadow-md mx-auto md:mx-0"
                        />

                        {/* RIGHT — TEXT */}
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>

                            <p className="text-[#1434A4] font-medium mt-1">{member.role}</p>


                            <p className="mt-3 text-gray-600 leading-relaxed">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}

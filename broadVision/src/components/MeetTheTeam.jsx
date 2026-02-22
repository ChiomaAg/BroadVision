import dragosi from '../assets/dragosi.jpg';
import dredith from '../assets/dredith.JPG';
import fortune from '../assets/fortune.jpg';
import chisom from '../assets/chisom.jpg';

export default function MeetTheTeam() {

    const team = [
        {
            name: "Dr. Agosi-Okoro Ifeoma, OD (UNIBEN), MSc Public Health (UNILAG)",
            role: "Medical Director / Optometrist",
            image: dragosi, // replace with actual import
            bio: "Dr. Agosi is an accomplished Optometrist with over twenty years of hands-on clinical experience across both public and private healthcare settings. Known for her keen diagnostic insight and deep commitment to patient wellbeing, she brings a blend of expertise, compassion, and leadership to the clinic. She is passionate about improving vision outcomes and is dedicated to making quality eyecare accessible to every patient who walks through our doors.",
        },
        {
            name: "Dr. Davidson Edith (OD)",
            role: "Practice Manager",
            image: dredith,
            bio: "With more than a decade of experience in modern eyecare, Dr. Davidson ensures the clinic runs smoothly while delivering exceptional patient support. She is skilled in using advanced computerized diagnostic tools to assess visual conditions and guide patients toward the best solutions. Her organized approach, clinical knowledge, and warm personality make her an invaluable part of the BroadVision team.",
        },
        {
            name: "Miss Fortune Ogbonna",
            role: "Customer Service",
            image: fortune,
            bio: "Fortune is often the first friendly face our patients meet, and she takes that responsibility to heart. Her calm, welcoming presence helps patients feel relaxed from the moment they arrive. Beyond her excellent communication skills, she assists with HMO coordination and ensures every visit is seamless, reassuring, and stress-free.",
        },
        {
            name: "Miss Chisom Agosi",
            role: "Marketing Officer",
            image: chisom,
            bio: "Chisom is an Economics graduate with first hand experience in finance and marketing. She is in charge of coordinating all our HMO partnership and facilitating  new partnerships with selected HMOs.",
        },
    ];



    return (
        <section className="py-20 px-6 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                
            </div>

            <div className="space-y-10 md:space-y-12 max-w-6xl mx-auto ">
                {team.map((member, i) => (
                    <div
                        key={i}
                        className="flex flex-col md:flex-row gap-7 mx-auto"
                    >
                        {/* LEFT — IMAGE */}
                        <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 overflow-hidden rounded-xl shadow-md mx-auto md:mx-0">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* RIGHT — TEXT */}
                        <div className="flex-1">
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

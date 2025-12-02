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
            bio: "An Optometrist of repute with over two decades of experience in eyecare delivery garnered from both the public and private practice. She absolutely loves the business of eyecare.",
        },
        {
            name: "Dr. Davidson Edith (OD)",
            role: "Practice Manager",
            image: doc2,
            bio: "Sees to the day-to-day running of the Clinic. With over a decade of experience in eyecare, she is skilled in assessing eye defects through use of computerized equipment and proffering the best solutions to Patients.",
        },
        {
            name: "Miss Fortune Ogbonna",
            role: "Customer Service & HMO Officer",
            image: doc3,
            bio: "Her calm and friendly disposition makes you feel at home in our clinic.",
        },
        {
            name: "Miss Vivian Solomon",
            role: "Customer Service II",
            image: doc4,
            bio: "Vivian is cheerful and polite. Interacting with her will leave you delighted and happy.",
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

            <div className="space-y-10 md:space-y-12 max-w-6xl mx-auto">
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

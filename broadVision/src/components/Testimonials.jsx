
export default function Testimonials() {
  const feedback = [
    { name: "Jube Ojomo", text: "Excellent service.It is quite affordable. I like the professionalism displayed by the staff. I recommend this eye clinic for anyone who is want good service at affordable price" },
    { name: "Johnson Bolaji", text: "Broad vision eye clinic has been wonderful in their service, excellent in the job of attending to eye issue and so I recommend them for everyone that needs good services." },
    { name: "Sachin Nikum", text: "I just wanted to send my heartfelt thanks for the amazing experience I had at your shop. From the moment I walked through the door, I felt welcomed and cared for. The staff were knowledgeable, helpful, and patient. I really appreciate the effort they put in to help me find exactly what I was looking for. I can't thank you enough for the exceptional service I received. I will definitely be back and will recommend your shop to my friends and family." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Patients Say</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {feedback.map((f, idx) => (
            <div key={idx} className="p-6 bg-[#ecf0fb] shadow rounded-xl">
              <p className="text-gray-600">"{f.text}"</p>
              <p className="mt-4 font-semibold text-gray-900">— {f.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

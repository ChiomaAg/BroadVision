
export default function Testimonials() {
  const feedback = [
    { name: "Sarah A.", text: "Professional care. My eye exam was fast and thorough." },
    { name: "David M.", text: "The staff are friendly and knowledgeable. Highly recommended!" },
    { name: "Rebecca I.", text: "Clean clinic, modern equipment, and excellent doctors." },
  ];

  return (
    <section className="py-20 bg-[#ecf0fb]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Patients Say</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {feedback.map((f, idx) => (
            <div key={idx} className="p-6 bg-white shadow rounded-xl">
              <p className="text-gray-600">"{f.text}"</p>
              <p className="mt-4 font-semibold text-gray-900">— {f.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

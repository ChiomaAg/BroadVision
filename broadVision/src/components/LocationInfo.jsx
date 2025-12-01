
export default function LocationInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Map */}
        <iframe
          className="w-full h-72 rounded-xl shadow"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* Details */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Location & Hours</h2>
          <p className="mt-4 text-gray-600">55 Diya Street, Ifako Gbagada, Lagos</p>
          <p className="mt-2 text-gray-600">Phone: 780-667-8087</p>

          <div className="mt-6">
            <p className="font-semibold">Hours:</p>
            <p className="text-gray-600 mt-1">Mon–Fri: 9am–6pm</p>
            <p className="text-gray-600">Saturday: 10am–4pm</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

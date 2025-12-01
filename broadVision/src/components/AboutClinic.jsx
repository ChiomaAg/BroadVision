import eyes from '../assets/child_eyes.jpg'

export default function AboutClinic() {
  return (
    <section className="py-20 bg-[#ecf0fb]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <img
          src={eyes}
          alt="Clinic"
          className="rounded-xl shadow"
        />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">About Broadvision Eye Clinic</h2>

          <p className="mt-4 text-gray-600">
            Broadvision Eye Clinic is dedicated to providing world-class eye care through modern
            diagnostics, experienced optometrists, and compassionate service. Our goal is to help
            every patient achieve their best possible vision.
          </p>

          <p className="mt-4 text-gray-600">
            From routine checkups to advanced treatments, we support your vision health every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}

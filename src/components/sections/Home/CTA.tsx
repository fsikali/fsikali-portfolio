export default function CTA() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
          Let’s build something great
        </h2>

        {/* Supporting text */}
        <p className="mt-4 text-gray-600">
          Have an idea or project in mind? Let’s bring it to life.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="
            inline-flex items-center justify-center
            mt-8 px-8 py-3
            bg-black text-white
            rounded-xl
            text-sm font-medium
            transition-all duration-300
            hover:bg-gray-800 hover:scale-[1.02]
            focus:outline-none focus:ring-2 focus:ring-black/20
          "
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

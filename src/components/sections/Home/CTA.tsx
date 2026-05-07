export default function CTA() {
  return (
    <section className="py-28 px-6 bg-white border-t border-emerald-200/40 bg-[#fcfcfd] relative overflow-hidden">
            {/* top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">

        {/* small label (adds SaaS feel) */}
        <div className="inline-flex items-center gap-2 text-xs text-emerald-600 font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Collaboration
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Let’s build something great
        </h2>

        {/* Supporting text */}
        <p className="mt-5 text-gray-600 leading-relaxed">
          Have an idea or project in mind? Let’s bring it to life and build something meaningful together.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="
            inline-flex items-center justify-center
            mt-10 px-8 py-3
            bg-black text-white
            rounded-md
            text-sm font-medium

            transition-all duration-300
            hover:bg-gray-800
            hover:translate-y-[-2px]

            focus:outline-none focus:ring-2 focus:ring-black/20
          "
        >
          Get in touch
        </a>

      </div>

    </section>
  );
}

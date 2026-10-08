export default function Services() {
  return (
    <section className="my-8 px-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
            <p className="text-slate-900">Building responsive and modern web applications using the latest technologies.</p>
          </div>

          <div className="service-card p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">UI/UX Design</h3>
            <p className="text-slate-900">Creating intuitive and visually appealing user interfaces for web and mobile applications.</p>
          </div>
          
          <div className="service-card p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Development</h3>
            <p className="text-slate-900">Designing and implementing scalable backend systems and APIs for robust applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}    
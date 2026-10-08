export default function Process() {
  return (
    <section className="my-8 px-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">1. Discovery</h3>
            <p className="text-slate-900">
              I start by understanding your goals, target audience, and project requirements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">2. Design</h3>
            <p className="text-slate-900">
              I create wireframes and mock ups to visualize the user experience and interface design.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">3. Development</h3>
            <p className="text-slate-900">
              I implement the design into a functional product using modern technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 

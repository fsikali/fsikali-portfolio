export default function Hero() {
  return ( 
      <section className="min-h-screen flex items-center px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

             {/* Left TEXT */}
             <div> 
                <p className="text-gray-400 mb-3">Full Stack Developer</p>
                <h1 className="text-5xl font-bold leading-tight">
                  Building modern web applications
                </h1>  

                <p className="text-gray-500 mt-6">
                  I create scalable, fast and user-focused digital products using Next.js and modern tools
                </p>

                <div className="mt-8 flex gap-4">
                  <a href="#projects" className="px-6 py-3 bg-white text-black rounded-xl">
                    View Projects
                  </a>
                  <a href="/contact" className="px-6 py-3 bg-black text-white rounded-xl">
                    Contact
                  </a>
                </div>
             </div> 

              {/* Right IMAGE */} 
              <div className="flex justify-center md:justify-end">
                <div className="w-72 h-72 bg-gray-800 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-500">Your Image</span>
                </div>
              </div>
          </div>
      </section>
  );
}
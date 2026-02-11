import HeroScene from "./components/HeroScene";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with 3D Canvas */}
      <section className="relative w-full h-[800px] overflow-hidden bg-slate-900">
        <HeroScene />
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Core Capabilities
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              End-to-end automation solutions tailored to your production needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Custom Machine Design",
                desc: "Precision engineering for unique manufacturing challenges.",
                icon: "⚙️",
              },
              {
                title: "Robotics Integration",
                desc: "Seamless deployment of FANUC, ABB, and KUKA systems.",
                icon: "🤖",
              },
              {
                title: "Vision Systems",
                desc: "Advanced quality control using deep learning and 3D scanning.",
                icon: "👁️",
              },
              {
                title: "PLC & HMI Programming",
                desc: "Intuitive interfaces and robust control logic (Siemens/Rockwell).",
                icon: "🖥️",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all group"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Industries Served</h2>
              <p className="text-slate-600 dark:text-slate-400">Proven expertise across critical sectors.</p>
            </div>
            <a href="/industries" className="text-blue-600 font-semibold hover:underline mt-4 md:mt-0">View all industries →</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Automotive", "Medical Device", "Food & Beverage", "Electronics"].map((ind) => (
              <div key={ind} className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 font-bold text-lg">
                {ind} Placeholder
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to automate your workflow?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our engineering team to discuss your project requirements.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg">
            Start a Project
          </a>
        </div>
      </section>
    </div>
  );
}

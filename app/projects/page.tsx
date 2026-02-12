export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="space-y-12 text-slate-700 font-bold">
        {[
          {
            title: "Automated Assembly Cell",
            client: "Automotive Tier 1 Supplier",
            problem: "Manual process was slow and error-prone.",
            solution: "Designed a 6-axis robot cell with vision-guided picking.",
            result: "Production increased by 40%, defects reduced by 95%.",
          },
          {
            title: "High-Speed Packaging Line",
            client: "Global Beverage Co.",
            problem: "Existing line couldn't handle new bottle format.",
            solution: "Retrofitted conveyor system and upgraded servo drives.",
            result: "Seamless changeover between formats in <10 mins.",
          },
        ].map((proj) => (
          <div key={proj.title} className="p-8 border-l-4 border-blue-600 bg-white shadow-md rounded-r-xl">
            <h2 className="text-2xl font-bold mb-2">{proj.title}</h2>
            <p className="text-base text-slate-600 uppercase font-semibold mb-4">{proj.client}</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <strong className="block text-slate-900 mb-1">Challenge</strong>
                <p className="text--600">{proj.problem}</p>
              </div>
              <div>
                <strong className="block text-slate-900 mb-1">Solution</strong>
                <p className="text-slate-600">{proj.solution}</p>
              </div>
              <div>
                <strong className="block text-blue-600 mb-1">Outcome</strong>
                <p className="text-slate-800 font-medium">{proj.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

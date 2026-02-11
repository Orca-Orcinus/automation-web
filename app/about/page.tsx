export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">About Orcinus Automation.</h1>
      
      <div className="prose max-w-4xl text-lg text-slate-700 leading-relaxed mb-12">
        <p>
          Our mission is to empower manufacturers with systems that are not just automated,
          but adaptable, data-driven, and resilient.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Core Values</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Precision:</strong> Zero tolerance for defects.</li>
            <li><strong>Innovation:</strong> Always leveraging the latest tech (AI, IoT).</li>
            <li><strong>Partnership:</strong> We support you long after installation.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact US</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email Address:</strong> gemsiang@gmail.com</li>
            <li><strong>Contact No:</strong> +6019-7079431</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

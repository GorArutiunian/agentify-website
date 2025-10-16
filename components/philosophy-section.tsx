export function PhilosophySection() {
  const philosophyItems = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Speed",
      description: "We believe in lightning-fast implementation and immediate results. Time is money, and we help you save both."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Precision",
      description: "Every AI agent is meticulously crafted to deliver exact results, eliminating errors and maximizing efficiency."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      ),
      title: "Scale",
      description: "Our solutions grow with your business, handling increased workload without breaking a sweat."
    }
  ]

  return (
    <section className="py-16 bg-purple-50">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          {/* Our Philosophy Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Our <span className="text-primary">Philosophy</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {philosophyItems.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mastery Demands Focus Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Mastery Demands Focus
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                We don't offer web design, SEO, social media management, or any other services. We do one thing and we do it exceptionally well: AI automation.
              </p>
              <p className="text-lg">
                This laser focus allows us to stay at the forefront of AI technology and deliver results that generalist agencies simply cannot match.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

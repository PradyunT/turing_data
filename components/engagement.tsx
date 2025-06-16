import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Engagement() {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Engagement Model</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach that guides clients from initial strategy to full-scale implementation and ongoing optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <CardTitle className="text-lg">Discovery & Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                AI Readiness Assessment, Big Data & AI Roadmap, Business Case with ROI analysis
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <CardTitle className="text-lg">Pilot & Proof of Concept</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Small-scale implementation to demonstrate value and mitigate risk before full deployment
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <CardTitle className="text-lg">Full-Scale Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Complete solution design, development, and deployment with user training and documentation
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">4</span>
              </div>
              <CardTitle className="text-lg">Managed Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Ongoing support, maintenance, and optimization with SLAs and continuous improvement
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

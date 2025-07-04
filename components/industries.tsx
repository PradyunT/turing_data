import { Building2, Heart, Factory } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized expertise in three key sectors where data and AI transformation delivers maximum impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Financial Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Risk management, fraud detection, algorithmic trading, and regulatory compliance solutions leveraging advanced
                analytics and AI.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Patient data analytics, clinical decision support, drug discovery acceleration, and operational efficiency
                improvements through AI-driven insights.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Retail</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Predictive supply chain optimization and quality control automations using AI technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

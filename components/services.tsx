import { Database, Brain, CheckCircle, Users, Layers, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:gap-20">
        {/* Left Column for Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Practice Areas</h2>
          <p className="text-xl text-gray-600 mb-8">
            We deliver comprehensive solutions across two specialized practice areas, guiding clients from foundational data
            strategy to advanced AI implementation.
          </p>

          <div className="mt-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Founder-Led Engagement:</span> Direct access to principals who architect your
                  solution and ensure project success.
                </div>
              </li>
              <li className="flex items-start">
                <Layers className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Dual-Platform Mastery:</span> Deep expertise across both AWS and Azure to select
                  the right tools for the job.
                </div>
              </li>
              <li className="flex items-start">
                <Target className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold">Focus on Measurable ROI:</span> We build business cases and track performance to
                  ensure your investment delivers tangible value.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column for Service Cards */}
        <div className="grid grid-cols-1 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 gap-2">
            <CardHeader>
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-12 w-12 text-white" />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-2xl mb-1">Big Data & Cloud Data Modernization</CardTitle>
                  <CardDescription className="text-base">
                    Building the scalable and secure data backbones required for advanced analytics and AI.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Cloud Data Strategy & Architecture (AWS & Azure)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>ETL/ELT and Data Pipeline Development (Airflow, dbt)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Data Governance, Quality, and Cost Management</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 gap-2">
            <CardHeader>
              <div className="flex items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-2xl mb-1">Generative AI & Machine Learning</CardTitle>
                  <CardDescription className="text-base">
                    Leveraging your data foundation to build intelligent systems that drive business outcomes.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Generative AI & LLM Strategy (AWS Bedrock, Azure OpenAI)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Retrieval-Augmented Generation (RAG) Systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Agentic AI & Workflow Automation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

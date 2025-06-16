import { Database, Brain, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex ">
        <div className="mb-16 mx-30 text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Practice Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            We deliver comprehensive solutions across two specialized practice areas, guiding clients from foundational data
            strategy to advanced AI implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Big Data & Cloud Data Modernization</CardTitle>
              <CardDescription className="text-lg">
                Building scalable, secure, and well-governed data backbones for advanced analytics and AI initiatives.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Cloud Data Strategy & Architecture (AWS S3, Glue, Redshift; Azure ADLS, Synapse)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>ETL/ELT and Data Pipeline Development with Airflow, dbt</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Data Governance and Quality Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Performance Optimization & Cost Management</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Generative AI & Machine Learning Solutions</CardTitle>
              <CardDescription className="text-lg">
                Leveraging your data foundation to build intelligent systems that drive tangible business outcomes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Generative AI & LLM Strategy (AWS Bedrock, Azure OpenAI Service)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Retrieval-Augmented Generation (RAG) Systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Agentic AI & Workflow Automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Custom ML Model Development & MLOps</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

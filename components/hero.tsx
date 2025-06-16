import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Reimagine your business with <span className="bg-blue-600 bg-clip-text text-transparent"> [Big] Data & AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We empower businesses to unlock the full potential of their data through cutting-edge big data solutions and agentic
            AI on AWS and Azure platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

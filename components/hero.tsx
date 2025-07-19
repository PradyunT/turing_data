import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Image with Darkening Filter */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-20"
        style={{
          backgroundImage: `url('/bg.jpg')`,
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Reimagine your enterprise with{" "}
            <span className="bg-purple-500 bg-clip-text text-transparent">
            Service-as-Software
            </span>
            {" "} for
            <br/>
            <span className="bg-blue-500 bg-clip-text text-transparent">
              {" "}
              [Big] Data & AI
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            We empower enterprises to unlock the full potential of their data
            through cutting-edge big data solutions and agentic AI on AWS and
            Azure platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white"
            >
              <a href="mailto:contact@turingdata.ai">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

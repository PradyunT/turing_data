import { Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function CloudPlatforms() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Dual-Platform Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise across both AWS and Azure platforms, ensuring optimal solutions for your existing infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Cloud className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Amazon Web Services</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive solutions using S3, Glue, Redshift, Bedrock, SageMaker, and the full AWS ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">S3</Badge>
              <Badge variant="secondary">Glue/Lake Formation</Badge>
              <Badge variant="secondary">Snowflake</Badge>
              <Badge variant="secondary">Redshift</Badge>
              <Badge variant="secondary">Bedrock</Badge>
              <Badge variant="secondary">SageMaker</Badge>
            </div>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Cloud className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Microsoft Azure</h3>
            <p className="text-gray-600 mb-4">
              Expert implementation with ADLS Gen2, Synapse Analytics, Azure OpenAI Service, and Azure ML platform.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">ADLS Gen2</Badge>
              <Badge variant="secondary">Synapse</Badge>
              <Badge variant="secondary">OpenAI Service</Badge>
              <Badge variant="secondary">Azure ML</Badge>
              <Badge variant="secondary">Purview</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

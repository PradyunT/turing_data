import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded by industry veterans with deep expertise in enterprise data
            architecture and AI implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow gap-4">
            <CardHeader>
              <Image
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 drop-shadow-[0_4px_6px_rgba(37,99,235,0.4)]"
                src="/ravi_chikkam.jpg"
                alt="Ravi Chikkam"
                width={96}
                height={96}
              />
              <CardTitle className="text-2xl mb-2">Ravi Chikkam</CardTitle>
              <CardDescription className="text-lg text-purple-600 font-semibold mb-4">
                Chief Technology Officer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Ravi Chikkam is a seasoned technology executive with 25+ years
                of leadership at firms like JPMorgan Chase, AWS, and Microsoft.
                Ravi specializes in architecting petabyte-scale data platforms
                and has a proven record of building world-class data governance
                and engineering teams. Driven by a passion for AI, he is a
                recent graduate of Stanford&apos;s Artificial Intelligence
                Program.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="outline">Business Strategy</Badge>
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">Data Architecture/Governance</Badge>
                <Badge variant="outline">Artificial Intelligence</Badge>
              </div>
              <div className="text-sm text-gray-500">
                <p>AI Program, Stanford • Quantum Computing Program, MIT</p>
                <a
                  href="https://www.linkedin.com/in/chikkamravi"
                  className="text-purple-600 hover:underline text-xl"
                >
                  <FaLinkedin className="inline" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow gap-4">
            <CardHeader>
              <Image
                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 drop-shadow-[0_4px_6px_rgba(37,99,235,0.4)] object-cover object-top"
                src="/praveen_kurapati.jpg"
                alt="Praveen Kurapati"
                width={96}
                height={96}
              />
              <CardTitle className="text-2xl mb-2">Praveen Kurapati</CardTitle>
              <CardDescription className="text-lg text-pink-600 font-semibold mb-4">
                Big Data & AI Technology Advisor
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                As a senior engineering leader at Microsoft, Praveen managed
                teams for core Azure Data Warehouse products like Synapse
                Analytics and Azure Arc. He has a history of shipping
                enterprise-scale data platforms, including a pioneering system
                at Windows Live that processed billions of daily events. Praveen
                combines deep cloud architecture expertise with a passion for
                leveraging GenAI.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="outline">Cloud Architecture</Badge>
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">Azure</Badge>
                <Badge variant="outline">GenAI/LLMs</Badge>
              </div>
              <div className="text-sm text-gray-500">
                <p>MS Computer Science, Indian Statistical Institute</p>
                <a
                  href="https://www.linkedin.com/in/praveen-kumar-kurapati-33ab4712/"
                  className="text-purple-600 hover:underline text-xl"
                >
                  <FaLinkedin className="inline" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

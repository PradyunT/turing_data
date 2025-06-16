import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded by industry veterans with deep expertise in enterprise data architecture and AI implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">JD</span>
              </div>
              <CardTitle className="text-2xl mb-2">John Doe</CardTitle>
              <CardDescription className="text-lg text-purple-600 font-semibold mb-4">
                CEO & Founding Partner
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Former VP of Data Strategy at Fortune 500 financial services company. 15+ years leading enterprise data
                transformations and building high-performing analytics teams. Expert in translating complex technical
                solutions into business value.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="outline">Business Strategy</Badge>
                <Badge variant="outline">Enterprise Sales</Badge>
                <Badge variant="outline">Data Governance</Badge>
                <Badge variant="outline">Team Leadership</Badge>
              </div>
              <div className="text-sm text-gray-500">
                <p>MBA, Wharton • BS Computer Science, MIT</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">JS</span>
              </div>
              <CardTitle className="text-2xl mb-2">Jane Smith</CardTitle>
              <CardDescription className="text-lg text-pink-600 font-semibold mb-4">
                CTO & Founding Partner
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Former Principal Solutions Architect at AWS and Azure consulting partner. Deep expertise in cloud-native
                data architectures, MLOps, and generative AI implementations. Led 50+ enterprise cloud migrations and AI
                pilot programs.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="outline">Cloud Architecture</Badge>
                <Badge variant="outline">Machine Learning</Badge>
                <Badge variant="outline">AWS & Azure</Badge>
                <Badge variant="outline">GenAI/LLMs</Badge>
              </div>
              <div className="text-sm text-gray-500">
                <p>MS Data Science, Stanford • BS Engineering, Carnegie Mellon</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Our lean, founder-led approach ensures every client receives direct access to senior-level expertise
            throughout their engagement.
          </p>
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            Join Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}

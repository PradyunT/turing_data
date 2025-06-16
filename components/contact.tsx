import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to start your big data and AI transformation journey? Contact our team today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">hello@turingdata.com</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Austin, Texas
                  <br />
                  Remote-First
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

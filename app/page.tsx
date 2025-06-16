import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Engagement } from "@/components/engagement";
import { Industries } from "@/components/industries";
import { Team } from "@/components/team";
import { CloudPlatforms } from "@/components/cloud-platforms";
import { CTA } from "@/components/cta";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Engagement />
      <Industries />
      <Team />
      <CloudPlatforms />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

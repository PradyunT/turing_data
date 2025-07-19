import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/turing-data-logo.png" alt="Turing Data Logo" width={50} height={50}/>
            <span className="ml-2 text-xl font-bold text-gray-900">Turing Data</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#approach" className="text-gray-600 hover:text-blue-600 transition-colors">
              Approach
            </a>
            <a href="#industries" className="text-gray-600 hover:text-blue-600 transition-colors">
              Industries
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
              Blog
            </a>
          </nav>
          <Button asChild className="bg-blue-600 hover:bg-blue-500 cursor-pointer">
            <a href="mailto:contact@turingdata.ai">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

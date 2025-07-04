import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Turing Data</span>
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
            <a href="#blog" className="text-gray-600 hover:text-blue-600 transition-colors">
              Blog
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-500 cursor-pointer">Get Started</Button>
        </div>
      </div>
    </header>
  );
}

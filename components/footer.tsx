import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image src="/turing-data-logo-white.png" alt="Turing Data Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold ml-1">Turing Data</span>
          </div>
          <div className="text-gray-400 text-sm">© 2025 Turing Data. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

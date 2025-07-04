"use client";

import { useEffect, useState, useRef } from "react";
import { Building2 } from "lucide-react";
import Image from "next/image";

// Client logo images - replace these with your actual client logos
const clientLogos = [
  "/at&t.png",
  "/verizon.png",
  "/ups.png",
  "/bank-of-america.svg",
  "/toyota.png",
  "/intel.png",
  "/walmart.webp",
  "/seven-eleven.svg",
  "/blue-cross-blue-shield.svg",
];

export function Clients() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our clients trust us to deliver innovative data and AI solutions that drive real business results.
          </p>
        </div>

        {/* Automatic Scrolling Carousel */}
        <div className="max-w-6xl mx-auto overflow-hidden" ref={scrollRef}>
          <div className="relative">
            {/* Infinite scrolling logos */}
            <div 
              className={`flex items-center ${isVisible ? 'animate-scroll-left' : ''}`} 
              style={{ width: 'max-content' }}
            >
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-8">
                  <Image 
                    src={logo} 
                    alt={`Client logo ${index + 1}`}
                    width={120}
                    height={60}
                    className="object-contain"
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      const target = e.currentTarget as HTMLElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const icon = parent.querySelector('.fallback-icon') as HTMLElement;
                        if (icon) icon.classList.remove('hidden');
                      }
                    }}
                  />
                  <Building2 className="h-8 w-8 text-gray-400 hidden fallback-icon" />
                </div>
              ))}
              {/* Second set of logos (duplicate for seamless loop) */}
              {clientLogos.map((logo, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-8">
                  <Image 
                    src={logo} 
                    alt={`Client logo ${index + 1}`}
                    width={120}
                    height={60}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const icon = parent.querySelector('.fallback-icon') as HTMLElement;
                        if (icon) icon.classList.remove('hidden');
                      }
                    }}
                  />
                  <Building2 className="h-8 w-8 text-gray-400 hidden fallback-icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
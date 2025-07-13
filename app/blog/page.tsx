export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Coming Soon
        </p>
        <p className="text-gray-500 max-w-md mx-auto">
          We're working on bringing you insightful content about big data, AI, and enterprise solutions. 
          Stay tuned for updates!
        </p>
        <a 
          href="/" 
          className="inline-block mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
} 
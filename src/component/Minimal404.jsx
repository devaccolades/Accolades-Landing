"use client"
import { useState, useEffect } from 'react';
import { Home, ArrowLeft, Zap } from 'lucide-react';

export default function Minimal404() {
  const [homeHover, setHomeHover] = useState(false);
  const [backHover, setBackHover] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 flex items-center justify-center p-8 relative overflow-hidden py-20 ">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full opacity-30 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full opacity-35 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* Bold 404 with modern styling */}
        <div className={`mb-16 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative">
            <h1 className="text-8xl md:text-[12rem] font-black text-transparent bg-clip-text bg-[#3FB4BA] leading-none mb-6 drop-shadow-lg">
              404
            </h1>
            {/* Animated accent */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-2 bg-[#3FB4BA] rounded-full animate-pulse shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Engaging content card */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="backdrop-blur-sm bg-white/80 rounded-3xl p-10 border border-gray-200 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-[#3FB4BA] animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                Whoops!
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-4">
            We couldn't find the page you were looking for. 
            </p>
            <p className="text-lg text-slate-600">
            It may have been moved, deleted, or you entered an incorrect URL.
            </p>
          </div>
        </div>

        {/* Dynamic action buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-600 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <button
            onClick={() => window.location.href = '/'}
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
            className="group relative px-10 py-5 bg-[#3FB4BA] text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-105 transform-gpu"
          >
            <div className="absolute inset-0 bg-[#3FB4BA] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <span className="relative flex items-center justify-center gap-3">
              <Home className={`w-6 h-6 transition-all duration-300 ${homeHover ? 'scale-125 rotate-12' : ''}`} />
              Take Me Home
            </span>
          </button>

          <button
            onClick={() => window.history.back()}
            onMouseEnter={() => setBackHover(true)}
            onMouseLeave={() => setBackHover(false)}
            className="group relative px-10 py-5 bg-white border-2 border-slate-300 text-slate-700 font-bold text-lg rounded-2xl transition-all duration-300 hover:bg-slate-50 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-500/20 hover:-translate-y-2 hover:scale-105 transform-gpu"
          >
            <span className="relative flex items-center justify-center gap-3">
              <ArrowLeft className={`w-6 h-6 transition-all duration-300 ${backHover ? 'scale-125 -translate-x-2' : ''}`} />
              Go Back
            </span>
          </button>
        </div>

        {/* Fun footer element */}
        <div className={`mt-16 transition-all duration-1000 delay-900 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 rounded-full border border-gray-200 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-600 text-sm font-medium">System Status: All Good</span>
          </div>
        </div>
      </div>
    </div>
  );
}
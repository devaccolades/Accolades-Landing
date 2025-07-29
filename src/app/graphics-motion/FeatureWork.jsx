'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);

  // Sample work data - replace with your actual data
  const works = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "Mobile App Design",
      category: "Package",
      description: "Modern mobile application with clean UI"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
      title: "Kerala Traditional",
      category: "Rebranding",
      description: "Traditional Kerala branding design"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      title: "Corporate Identity",
      category: "Logo",
      description: "Complete corporate branding solution"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop",
      title: "E-commerce Platform",
      category: "Package",
      description: "Full e-commerce website design"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      title: "Brand Redesign",
      category: "Rebranding",
      description: "Complete brand makeover project"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 100) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 100) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setTranslateX(0);
  };

  // Calculate which card should be in center - always show 5 cards
  const getVisibleCards = () => {
    const visibleCards = [];
    const totalCards = works.length;
    
    // Always show 5 cards: 2 left + 1 center + 2 right
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + totalCards) % totalCards;
      const isCenterCard = i === 0;
      
      visibleCards.push({
        ...works[index],
        originalIndex: index,
        relativePosition: i,
        isCenterCard,
        displayIndex: visibleCards.length
      });
    }
    
    return visibleCards;
  };

  const getCardStyles = (relativePosition, isCenterCard) => {
    if (isCenterCard) {
      return {
        transform: `scale(1.1) translateX(${translateX}px)`,
        opacity: 1,
        filter: 'blur(0px)',
        zIndex: 20
      };
    } else {
      const distance = Math.abs(relativePosition);
      return {
        transform: `scale(${1 - distance * 0.1}) translateX(${translateX}px)`,
        opacity: Math.max(0.3, 1 - distance * 0.3),
        filter: `blur(${distance * 2}px)`,
        zIndex: 10 - distance
      };
    }
  };

  return (
    <div className="w-full py-16 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
      <div className="containers">
        {/* Header */}
        <div className="text-start mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Work</h2>
          <div className="flex justify-start space-x-4 mb-8">
            <button className="px-6 py-2 bg-cyan-500 text-white rounded-full font-medium hover:bg-cyan-600 transition-colors">
              Logo
            </button>
            <button className="px-6 py-2 bg-white text-cyan-500 border border-cyan-500 rounded-full font-medium hover:bg-cyan-50 transition-colors">
              Package
            </button>
            <button className="px-6 py-2 bg-white text-cyan-500 border border-cyan-500 rounded-full font-medium hover:bg-cyan-50 transition-colors">
              Rebranding
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative overflow-visible py-8">
          <div 
            ref={containerRef}
            className="cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex items-center justify-center space-x-8 px-4">
              {getVisibleCards().map((work, index) => (
                <div
                  key={`${work.id}-${work.displayIndex}`}
                  className="transition-all duration-500 ease-out flex-shrink-0"
                  style={getCardStyles(work.relativePosition, work.isCenterCard)}
                >
                  <div className="w-80 h-96 bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm font-medium rounded-full">
                          {work.category}
                        </span>
                        <button className="text-cyan-500 hover:text-cyan-600 font-medium text-sm">
                          View Project →
                        </button>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {work.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-cyan-500 hover:bg-white transition-all duration-300 z-30"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-cyan-500 hover:bg-white transition-all duration-300 z-30"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          {/* <div className="flex justify-center space-x-2 mt-8">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-cyan-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
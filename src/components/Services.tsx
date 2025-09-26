import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Users, Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    {
      icon: <Scissors className="w-12 h-12" />,
      title: 'Classic Haircut',
      description: 'Professional styling and cutting for the modern gentleman',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: '$25'
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Beard Trim',
      description: 'Precise beard shaping and grooming to complement your style',
      image: 'https://images.pexels.com/photos/1570803/pexels-photo-1570803.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: '$15'
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: 'Fade Cut',
      description: 'Modern fade techniques for a sharp, contemporary look',
      image: 'https://images.pexels.com/photos/1570808/pexels-photo-1570808.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: '$30'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Kids Cut',
      description: 'Gentle and fun haircuts for our youngest clients',
      image: 'https://images.pexels.com/photos/1570809/pexels-photo-1570809.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: '$18'
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Hot Towel Shave',
      description: 'Traditional hot towel shave for the ultimate grooming experience',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: '$35'
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Full Service',
      description: 'Complete grooming package with cut, beard trim, and styling',
      image: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: '$45'
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const getVisibleServices = () => {
    const visibleServices = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % services.length;
      visibleServices.push(services[index]);
    }
    return visibleServices;
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience premium grooming services in a relaxed, professional environment
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 disabled:opacity-50"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 disabled:opacity-50"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Services Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-800 ease-in-out"
              style={{ 
                transform: `translateX(-${(currentIndex * 100) / 3}%)`,
                width: `${(services.length * 100) / 3}%`
              }}
            >
              {services.map((service, index) => (
                <div
                  key={`${service.title}-${index}`}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / services.length}%` }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        {service.icon}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-black">{service.title}</h3>
                        <span className="text-2xl font-bold text-black">{service.price}</span>
                      </div>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 800);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/appointments"
            className="inline-block bg-black text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
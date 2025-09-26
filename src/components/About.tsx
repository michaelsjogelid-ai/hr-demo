import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Professional barber cutting hair"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              H & R Barbers
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Established in 2010 at 526 Filton Ave, BS7 0QE, H&R Barbers Bristol 
              celebrates 15 years of excellence in 2025. Our skilled barbers deliver 
              exceptional haircuts, grooming, and styling tailored to your needs, ensuring 
              you leave looking your best.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-black mb-4">
                Our Services and Amenities:
              </h3>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Expert barbers with years of experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Traditional and modern men's haircuts, specialising in skin fades
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Hot towel shaves and beard grooming
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Premium men's hair and grooming products
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comfortable seating with a Chesterfield sofa
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Air-conditioned salon with widescreen TV
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Complimentary Italian coffee and free Wi-Fi
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Convenient online booking system
                </li>
              </ul>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mt-8">
              Experience top-tier barbering, contemporary styling, and unparalleled 
              service in a welcoming environment with the best banter in Bristol.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
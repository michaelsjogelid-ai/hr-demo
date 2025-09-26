import React from 'react';
import { Clock, Heart, Users } from 'lucide-react';

const Values = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Tradition */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
                <Clock className="w-8 h-8 text-black" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Tradition</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nearly 60 years of family barbering excellence in Bristol.
            </p>
          </div>

          {/* Craftsmanship */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
                <Heart className="w-8 h-8 text-black" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Craftsmanship</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Precision cuts and groomed beards with passion and care.
            </p>
          </div>

          {/* Community */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
                <Users className="w-8 h-8 text-black" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Community</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              A dedicated team shaping styles for modern men.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
import React from 'react';
import { GraduationCap, Star } from 'lucide-react';

const StudentDiscounts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Student Discounts & Loyalty Program
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Student Discount */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-black rounded-full p-3 mr-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black">Student Discount</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At H & R Barbershop, we value our student clients and offer exclusive discounts 
              to help you stay sharp on a budget. Present a valid student ID to enjoy 
              <span className="font-bold text-black"> 15% off</span> any haircut or beard grooming service.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-black">
              <p className="text-sm text-gray-700 font-medium">
                💡 Just show your valid student ID at checkout to receive your discount!
              </p>
            </div>
          </div>

          {/* Loyalty Program */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-black rounded-full p-3 mr-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black">Loyalty Program</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Plus, every new client receives a loyalty card at their first appointment—collect 
              stamps with each visit and earn a <span className="font-bold text-black">free service after five cuts!</span>
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-black">
              <p className="text-sm text-gray-700 font-medium">
                🎯 5 visits = 1 FREE service of your choice!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDiscounts;
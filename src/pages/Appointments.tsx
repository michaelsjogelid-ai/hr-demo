import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Scissors, CheckCircle } from 'lucide-react';

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    { name: 'Classic Haircut', price: '$25', duration: '30 min' },
    { name: 'Beard Trim', price: '$15', duration: '20 min' },
    { name: 'Fade Cut', price: '$30', duration: '45 min' },
    { name: 'Kids Cut', price: '$18', duration: '25 min' },
    { name: 'Hot Towel Shave', price: '$35', duration: '40 min' },
    { name: 'Full Service', price: '$45', duration: '60 min' },
    { name: 'Buzz Cut', price: '$20', duration: '20 min' },
    { name: 'Mustache Trim', price: '$12', duration: '15 min' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
    }, 3000);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days from now
    return maxDate.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <div className="pt-28 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white rounded-xl shadow-lg p-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-black mb-4">Appointment Booked!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for booking with H&R Barbers. We'll send you a confirmation email shortly.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <h3 className="font-semibold text-black mb-2">Appointment Details:</h3>
            <p className="text-sm text-gray-600"><strong>Service:</strong> {formData.service}</p>
            <p className="text-sm text-gray-600"><strong>Date:</strong> {formData.date}</p>
            <p className="text-sm text-gray-600"><strong>Time:</strong> {formData.time}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule your visit with our expert barbers. Choose your preferred service, date, and time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Scissors className="w-6 h-6 mr-2" />
                Appointment Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    <Scissors className="w-4 h-4 inline mr-1" />
                    Select Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>
                        {service.name} - {service.price} ({service.duration})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={getMinDate()}
                      max={getMaxDate()}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select time...</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    placeholder="Any specific requests or preferences..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
            {/* Business Hours */}
<div className="bg-white rounded-xl shadow-lg p-6">
  <h3 className="text-xl font-bold text-black mb-4 flex items-center">
    <Clock className="w-5 h-5 mr-2" />
    Business Hours
  </h3>
  <div className="space-y-2 text-gray-600">
    <div className="flex justify-between">
      <span>Monday - Friday</span>
      <span>9:00 AM - 1:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span></span>
      <span>2:00 PM - 7:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span>Saturday</span>
      <span>8:00 AM - 6:00 PM</span>
    </div>
    <div className="flex justify-between">
      <span>Sunday</span>
      <span>10:00 AM - 4:00 PM</span>
    </div>
  </div>
</div>


            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-black mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> info@hrbarbers.com</p>
                <p><strong>Address:</strong><br />526 Filton Ave<br />Bristol, BS7 0QE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;


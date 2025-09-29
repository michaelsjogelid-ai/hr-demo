import React from 'react';
import { Star, Quote } from 'lucide-react';
import { InfiniteSlider } from './ui/infinite-slider';

const GoogleReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "James Mitchell",
      rating: 5,
      text: "Absolutely brilliant service! The barbers are skilled professionals who really know their craft. My fade was perfect and the attention to detail was outstanding.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "David Thompson",
      rating: 5,
      text: "Best barbershop in Bristol! Been coming here for over a year and never disappointed. Great atmosphere, friendly staff, and consistently excellent cuts.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Michael Roberts",
      rating: 5,
      text: "Top quality service every time. The hot towel shave is incredible and the barbers really take their time to get everything perfect. Highly recommend!",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Alex Johnson",
      rating: 5,
      text: "Professional, clean, and great value for money. The student discount is a nice touch too. Always leave feeling fresh and looking sharp.",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "Ryan Parker",
      rating: 5,
      text: "Exceptional barbering skills and great customer service. The loyalty program is brilliant - free cut after 5 visits! Will definitely keep coming back.",
      date: "2 months ago"
    },
    {
      id: 6,
      name: "Tom Wilson",
      rating: 5,
      text: "Clean, modern shop with experienced barbers. They really listen to what you want and deliver exactly that. The best fade I've ever had!",
      date: "3 weeks ago"
    }
  ];

  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 w-80 flex-shrink-0">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
          <span className="text-lg font-bold text-gray-600">
            {review.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-black">{review.name}</h4>
          <div className="flex items-center">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-500 ml-2">{review.date}</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <Quote className="w-6 h-6 text-gray-300 absolute -top-2 -left-1" />
        <p className="text-gray-600 leading-relaxed pl-6">
          {review.text}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - see what our satisfied customers have to say about their experience at H&R Barbers
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-black">5.0</span>
              <span className="text-gray-600">• Based on Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <InfiniteSlider 
            gap={24} 
            duration={30} 
            durationOnHover={60}
            className="w-full"
          >
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </InfiniteSlider>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://share.google/uUhczbPl830oELuln"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            <Star className="w-5 h-5" />
            <span>Read More Reviews on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
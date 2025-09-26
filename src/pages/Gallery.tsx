import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    '/Gallery/SnapInsta.to_217409114_4321271607951282_2036493974060075_n.jpg',
    '/Gallery/SnapInsta.to_243497506_424024059059842_2084592155246612892_n.jpg',
    '/Gallery/SnapInsta.to_247745868_234535118740510_6890723411956830992_n.jpg',
    '/Gallery/SnapInsta.to_256821251_364616302019285_4433867686008304314_n.jpg',
    '/Gallery/SnapInsta.to_302373487_442276674531137_2257990100755856574_n.jpg',
    '/Gallery/SnapInsta.to_402552466_226955476963396_6740254780410098920_n.jpg',
    '/Gallery/SnapInsta.to_254381101_4398067030315141_8654999853912522721_n.jpg',
    '/Gallery/SnapInsta.to_243994343_193998922843354_1659099383531789250_n (1).jpg',
    '/Gallery/SnapInsta.to_214349093_578440703314292_1935330087393746913_n_1080.jpg'
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality and craftsmanship in every cut and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
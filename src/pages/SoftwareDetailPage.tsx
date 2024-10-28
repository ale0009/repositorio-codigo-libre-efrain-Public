import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { RatingStars } from '../components/RatingStars';
import { ImageModal } from '../components/ImageModal';
import { softwareData } from '../data/softwareData';

export function SoftwareDetailPage() {
  const { id } = useParams();
  const software = softwareData.find(s => s.id === Number(id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!software) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-96">
          <img
            src={software.detailImages[0]}
            alt={software.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{software.title}</h1>
              <div className="flex items-center gap-3">
                <RatingStars rating={software.rating} size={24} />
                <span className="text-xl">{software.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Description */}
          <div id="description" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Descripción</h2>
            <p className="text-gray-700 leading-relaxed">{software.longDescription}</p>
          </div>

          {/* Features */}
          <div id="features" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Características</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {software.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Rating Matrix */}
          <div id="rating-matrix" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6">Matriz de Evaluación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {software.ratingMatrix.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-lg">{item.category}</h3>
                    <div className="flex items-center gap-2">
                      <RatingStars rating={item.score} size={16} />
                      <span className="text-gray-600">{item.score.toFixed(1)}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{item.explanation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div id="gallery" className="scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6">Galería</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {software.detailImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="block w-full group relative"
                >
                  <img
                    src={image}
                    alt={`${software.title} screenshot ${index + 1}`}
                    className="rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver en pantalla completa
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          alt={software.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
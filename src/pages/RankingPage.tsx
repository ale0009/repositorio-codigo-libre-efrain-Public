import React from 'react';
import { Trophy, TrendingUp, Users, Zap } from 'lucide-react';
import { softwareData } from '../data/softwareData';
import { RatingStars } from '../components/RatingStars';

export function RankingPage() {
  const sortedSoftware = [...softwareData].sort((a, b) => b.rating - a.rating);

  const categories = [
    { name: 'Productividad', icon: Zap },
    { name: 'Multimedia', icon: TrendingUp },
    { name: 'Desarrollo', icon: Users },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white">
        <div className="flex items-center gap-4 mb-6">
          <Trophy size={48} className="text-yellow-400" />
          <h1 className="text-4xl font-bold">Ranking de Software Libre</h1>
        </div>
        <p className="text-xl text-blue-100 max-w-3xl">
          Evaluación comparativa de las mejores alternativas de software libre disponibles en el mercado,
          clasificadas por categoría y puntuación general.
        </p>
      </div>

      {/* Overall Ranking */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Ranking General</h2>
        <div className="space-y-6">
          {sortedSoftware.map((software, index) => (
            <div
              key={software.id}
              className="flex items-center gap-6 p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-xl">
                #{index + 1}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{software.title}</h3>
                <div className="flex items-center gap-4 mb-2">
                  <RatingStars rating={software.rating} />
                  <span className="text-gray-600">{software.rating.toFixed(1)}</span>
                </div>
                <p className="text-gray-600">{software.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.name} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <category.icon size={24} className="text-blue-600" />
              <h2 className="text-xl font-bold">{category.name}</h2>
            </div>
            <div className="space-y-4">
              {sortedSoftware
                .filter(software => software.ratingMatrix
                  .some(matrix => matrix.category.toLowerCase().includes(category.name.toLowerCase())))
                .map((software) => (
                  <div key={software.id} className="p-4 rounded-lg bg-gray-50">
                    <h3 className="font-semibold mb-2">{software.title}</h3>
                    {software.ratingMatrix
                      .filter(matrix => matrix.category.toLowerCase().includes(category.name.toLowerCase()))
                      .map((matrix, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-600">{matrix.category}</span>
                          <div className="flex items-center gap-2">
                            <RatingStars rating={matrix.score} size={16} />
                            <span className="text-sm text-gray-600">{matrix.score.toFixed(1)}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
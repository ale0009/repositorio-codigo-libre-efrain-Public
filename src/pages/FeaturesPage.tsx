import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Rocket, Target, Users, Shield, Code, Cloud } from 'lucide-react';

const impactImages = [
  {
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
    title: "Transformación Digital",
    description: "Impulsando la innovación tecnológica en Colombia"
  },
  {
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80",
    title: "Colaboración Empresarial",
    description: "Creando sinergias entre empresas y desarrolladores"
  },
  {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80",
    title: "Desarrollo Sostenible",
    description: "Construyendo un futuro tecnológico accesible"
  }
];

const features = [
  {
    icon: Rocket,
    title: "Innovación Tecnológica",
    description: "Facilitamos la adopción de tecnologías de vanguardia que impulsan la competitividad empresarial."
  },
  {
    icon: Target,
    title: "Optimización de Recursos",
    description: "Reducción significativa en costos de licenciamiento y mantenimiento de software."
  },
  {
    icon: Users,
    title: "Comunidad Colaborativa",
    description: "Conexión con una red activa de desarrolladores y expertos en software libre."
  },
  {
    icon: Shield,
    title: "Seguridad y Control",
    description: "Mayor control sobre la infraestructura tecnológica y protección de datos."
  },
  {
    icon: Code,
    title: "Personalización Total",
    description: "Adaptación completa del software a las necesidades específicas de cada empresa."
  },
  {
    icon: Cloud,
    title: "Escalabilidad",
    description: "Crecimiento tecnológico sostenible y adaptable a las demandas del mercado."
  }
];

export function FeaturesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % impactImages.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + impactImages.length) % impactImages.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <div className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {impactImages.map((image, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                  <div className="max-w-2xl">
                    <h2 className="text-5xl font-bold text-white mb-4">{image.title}</h2>
                    <p className="text-2xl text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {impactImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Impact Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Impacto en el Mercado Colombiano
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra plataforma de consultoría está transformando la manera en que las empresas colombianas
            adoptan y utilizan tecnología. A través del software libre, estamos democratizando el acceso
            a herramientas de clase mundial y fomentando la innovación local.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <feature.icon size={40} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para revolucionar tu infraestructura tecnológica?
          </h3>
          <p className="text-gray-600 mb-8">
            Únete a la revolución del software libre y descubre cómo podemos ayudarte a alcanzar
            tus objetivos tecnológicos de manera eficiente y sostenible.
          </p>
        </div>
      </div>
    </div>
  );
}
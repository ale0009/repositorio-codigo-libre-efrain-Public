import React, { useState } from 'react';
import { GraduationCap, Menu, X, Book, Info, Star, Image, List, MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { icon: Book, label: 'Descripción General', href: '#description' },
    { icon: Star, label: 'Matriz de Evaluación', href: '/ranking', isRoute: true },
    { icon: List, label: 'Características', href: '/features', isRoute: true },
    { icon: Image, label: 'Galería', href: '#gallery' },
    { icon: MessageSquare, label: 'Reseñas', href: '#reviews' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-8 px-4 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
          <GraduationCap size={48} className="text-blue-300" />
          <div>
            <h1 className="text-3xl font-bold">Universidad ECCI</h1>
            <h2 className="text-xl text-blue-200">Consultoría de Software Libre</h2>
          </div>
        </Link>

        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <Info size={20} />
            <span>Documentación</span>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div
            className={`absolute right-0 top-full mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl transform transition-all duration-200 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Índice de Contenidos</h3>
              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors text-gray-700 hover:text-blue-900"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      if (item.isRoute) {
                        navigate(item.href);
                      } else {
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    <item.icon size={18} className="text-blue-600" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
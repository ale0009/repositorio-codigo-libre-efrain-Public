import { Software } from '../types/Software';

export const softwareData: Software[] = [
  {
    id: 1,
    title: "LibreOffice",
    description: "Suite ofimática de código abierto que incluye procesador de textos, hoja de cálculo, presentaciones y más.",
    rating: 4.0,
    reason: "Excelente alternativa a Microsoft Office, con amplia compatibilidad de formatos.",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Procesador de textos Writer",
      "Hoja de cálculo Calc",
      "Presentaciones Impress",
      "Base de datos Base",
      "Editor de fórmulas Math",
      "Editor de gráficos Draw"
    ],
    ratingMatrix: [
      {
        category: "Facilidad de uso",
        score: 4.0,
        explanation: "Interfaz familiar para usuarios de Microsoft Office"
      },
      {
        category: "Compatibilidad",
        score: 4.5,
        explanation: "Excelente soporte para formatos estándar y propietarios"
      },
      {
        category: "Funcionalidades",
        score: 3.5,
        explanation: "Cubre todas las necesidades básicas y avanzadas"
      },
      {
        category: "Rendimiento",
        score: 4.0,
        explanation: "Funciona bien en la mayoría de los sistemas"
      }
    ],
    longDescription: "LibreOffice es una suite ofimática completa que ofrece todas las herramientas necesarias para el trabajo de oficina moderno. Como alternativa de código abierto a Microsoft Office, proporciona compatibilidad con una amplia gama de formatos de archivo y características avanzadas para usuarios profesionales."
  },
  {
    id: 2,
    title: "GIMP",
    description: "Programa de edición de imágenes de código abierto con funcionalidades similares a Photoshop.",
    rating: 4.5,
    reason: "Potente y versátil, aunque la interfaz puede ser menos intuitiva para principiantes.",
    image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&w=800&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Herramientas de selección avanzadas",
      "Soporte para capas",
      "Filtros y efectos",
      "Herramientas de retoque",
      "Soporte para plugins",
      "Automatización mediante scripts"
    ],
    ratingMatrix: [
      {
        category: "Potencia",
        score: 4.5,
        explanation: "Capacidades profesionales para edición de imágenes"
      },
      {
        category: "Facilidad de uso",
        score: 3.5,
        explanation: "Curva de aprendizaje pronunciada para nuevos usuarios"
      },
      {
        category: "Extensibilidad",
        score: 5.0,
        explanation: "Gran cantidad de plugins y scripts disponibles"
      },
      {
        category: "Comunidad",
        score: 4.5,
        explanation: "Comunidad activa y abundante documentación"
      }
    ],
    longDescription: "GIMP (GNU Image Manipulation Program) es una alternativa de código abierto a Adobe Photoshop que ofrece herramientas profesionales para la edición de imágenes. Con una amplia gama de funcionalidades y una comunidad activa, GIMP es capaz de manejar tareas desde edición básica hasta proyectos profesionales complejos."
  },
  {
    id: 3,
    title: "VLC Media Player",
    description: "Reproductor multimedia de código abierto capaz de reproducir casi cualquier formato de audio y video.",
    rating: 5.0,
    reason: "Extremadamente versátil y fácil de usar, con soporte para una amplia gama de formatos.",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=800&q=80",
    detailImages: [
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Reproducción de múltiples formatos",
      "Streaming y conversión de medios",
      "Subtítulos y audio múltiple",
      "Efectos de audio y video",
      "Control mediante teclado",
      "Personalización avanzada"
    ],
    ratingMatrix: [
      {
        category: "Compatibilidad",
        score: 5.0,
        explanation: "Soporta prácticamente cualquier formato multimedia"
      },
      {
        category: "Rendimiento",
        score: 5.0,
        explanation: "Reproducción fluida incluso en sistemas modestos"
      },
      {
        category: "Facilidad de uso",
        score: 4.5,
        explanation: "Interfaz simple e intuitiva"
      },
      {
        category: "Funcionalidades",
        score: 5.0,
        explanation: "Características avanzadas para usuarios expertos"
      }
    ],
    longDescription: "VLC Media Player es el estándar de oro en reproductores multimedia de código abierto. Con su capacidad para reproducir prácticamente cualquier formato de archivo y su interfaz intuitiva, VLC se ha convertido en el reproductor multimedia preferido para millones de usuarios en todo el mundo."
  }
];
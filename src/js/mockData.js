/* ARCHIVO: src/js/mockData.js */

export const industrialSectors = {
  TECHNICAL: {
    name: "Oficios Técnicos y Mantenimiento",
    description: "Tu experiencia práctica en reparaciones y procesos técnicos es muy valiosa para la industria manufacturera.",
    jobs: [
      { 
        id: "tech_1",
        title: "Técnico de Mantenimiento", 
        company: "InduMex S.A.", 
        salary: "$12,000 - $15,000", 
        location: "Zona Industrial Norte",
        description: "Responsable del mantenimiento preventivo y correctivo de maquinaria de producción.",
        requirements: ["Conocimiento en hidráulica", "Experiencia mínima 3 años", "Disponibilidad de horario"]
      },
      { 
        id: "tech_2",
        title: "Operador de Maquinaria", 
        company: "Aceros del Norte", 
        salary: "$10,000 - $13,000", 
        location: "Planta Poniente",
        description: "Operación de tornos CNC y control de calidad de piezas metálicas.",
        requirements: ["Secundaria terminada", "Uso de herramientas de medición", "Vivir cerca de la zona"]
      }
    ],
    suggestions: [
      "Destaca tus certificaciones técnicas previas.",
      "Menciona herramientas específicas que dominas (tornos, soldadura, etc.).",
      "Resalta tu puntualidad y compromiso con la seguridad industrial."
    ],
    training: [
      { label: "Capacítate para el empleo (Técnico)", url: "https://capacitateparaelempleo.org/cursos/view/31" },
      { label: "Coursera (Mantenimiento Industrial)", url: "https://www.coursera.org/search?query=industrial%20maintenance" }
    ]
  },
  SERVICE: {
    name: "Atención al Cliente y Ventas",
    description: "Tienes una gran capacidad para conectar con las personas y resolver sus necesidades.",
    jobs: [
      { 
        id: "serv_1",
        title: "Asesor Comercial", 
        company: "Tiendas Global", 
        salary: "$8,000 + Comisiones", 
        location: "Centro Comercial Santa Fe",
        description: "Atención personalizada a clientes y cierre de ventas en piso.",
        requirements: ["Facilidad de palabra", "Gusto por las ventas", "Bachillerato trunco o terminado"]
      },
      { 
        id: "serv_2",
        title: "Recepcionista Senior", 
        company: "Hotel Plaza", 
        salary: "$10,000", 
        location: "Zona Turística",
        description: "Gestión de reservaciones y atención a huéspedes en el lobby.",
        requirements: ["Inglés básico", "Manejo de paquetería Office", "Excelente presentación"]
      }
    ],
    suggestions: [
      "Enfatiza tu paciencia y habilidades de resolución de conflictos.",
      "Si hablas otro idioma o dialecto, ponlo en primera plana.",
      "Menciona logros en ventas o satisfacción al cliente."
    ],
    training: [
      { label: "Google Actívate (Ventas)", url: "https://learndigital.withgoogle.com/activate/course/digital-sales" },
      { label: "Fundación Carlos Slim (Servicio al Cliente)", url: "https://capacitateparaelempleo.org/cursos/view/10" }
    ]
  },
  ADMIN: {
    name: "Administración y Organización",
    description: "Tu orden y capacidad de gestión son fundamentales para el flujo de trabajo de cualquier oficina.",
    jobs: [
      { 
        id: "admin_1",
        title: "Auxiliar Administrativo", 
        company: "LogiCorp", 
        salary: "$9,500", 
        location: "Oficinas Norte",
        description: "Apoyo en archivo, captura de datos y atención telefónica.",
        requirements: ["Organización", "Velocidad de captura", "Conocimiento de Excel"]
      }
    ],
    suggestions: [
      "Menciona software de oficina que conozcas (Excel, Word).",
      "Resalta tu experiencia manejando archivos o agendas.",
      "Destaca tu capacidad para trabajar bajo presión."
    ],
    training: [
      { label: "Google Actívate (Productividad Personal)", url: "https://learndigital.withgoogle.com/activate/course/personal-productivity" },
      { label: "Coursera (Administración de Empresas)", url: "https://www.coursera.org/search?query=business%20administration" }
    ]
  },
  LOGISTICS: {
    name: "Logística y Transporte",
    description: "La eficiencia en el movimiento de bienes es donde tu perfil destaca más.",
    jobs: [
      { 
        id: "log_1",
        title: "Coordinador de Rutas", 
        company: "Envía Rápido", 
        salary: "$13,000", 
        location: "CEDIS Principal",
        description: "Planeación de logística para entregas locales y foráneas.",
        requirements: ["Conocimiento de GPS", "Manejo de personal de transporte", "Licencia vigente"]
      }
    ],
    suggestions: [
      "Si tienes licencias federales o especiales, destácalas.",
      "Resalta tu conocimiento de rutas y zonas geográficas.",
      "Menciona tu experiencia en control de inventarios."
    ],
    training: [
      { label: "Fundación Carlos Slim (Logística)", url: "https://capacitateparaelempleo.org/cursos/view/101" },
      { label: "Coursera (Supply Chain)", url: "https://www.coursera.org/search?query=supply%20chain" }
    ]
  },
  GENERAL: {
    name: "Servicios Generales",
    description: "Tu versatilidad te permite adaptarte a diversas funciones operativas esenciales.",
    jobs: [
      { 
        id: "gen_1",
        title: "Auxiliar de Almacén", 
        company: "Bodega Local", 
        salary: "$7,500", 
        location: "Varios puntos",
        description: "Carga y descarga de mercancía, acomodo de racks y limpieza de área.",
        requirements: ["Saber leer y escribir", "Fuerza física", "Puntualidad extrema"]
      },
      { 
        id: "gen_2",
        title: "Personal de Seguridad", 
        company: "Vigilancia Pro", 
        salary: "$8,500", 
        location: "Zona Bancaria",
        description: "Control de accesos y rondines preventivos en sucursal bancaria.",
        requirements: ["Certificado de secundaria", "Estatura mínima 1.65m", "Sin antecedentes penales"]
      }
    ],
    suggestions: [
      "Resalta tu disposición para aprender nuevas tareas.",
      "Menciona tu buena condición física y puntualidad.",
      "Enfatiza tu honestidad y referencias laborales."
    ],
    training: [
      { label: "Capacítate para el empleo (Habilidades)", url: "https://capacitateparaelempleo.org/" }
    ]
  }
};

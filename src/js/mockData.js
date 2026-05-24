/* ARCHIVO: src/js/mockData.js */

export const industrialSectors = {
  TECHNICAL: {
    name: "Oficios Técnicos y Mantenimiento",
    description: "Tu experiencia práctica en reparaciones y procesos técnicos es muy valiosa para la industria manufacturera.",
    jobs: [
      { title: "Técnico de Mantenimiento", company: "InduMex S.A.", salary: "$12,000 - $15,000", location: "Zona Industrial" },
      { title: "Operador de Maquinaria", company: "Aceros del Norte", salary: "$10,000 - $13,000", location: "Planta Poniente" },
      { title: "Supervisor de Taller", company: "Mecánica Central", salary: "$15,000 - $18,000", location: "Centro" }
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
      { title: "Asesor Comercial", company: "Tiendas Global", salary: "$8,000 + Comisiones", location: "Centro Comercial" },
      { title: "Atención al Socio", company: "Club Deportivo", salary: "$9,000", location: "Zona Residencial" },
      { title: "Recepcionista Senior", company: "Hotel Plaza", salary: "$10,000", location: "Zona Turística" }
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
      { title: "Auxiliar Administrativo", company: "LogiCorp", salary: "$9,500", location: "Oficinas Norte" },
      { title: "Gestor de Almacén", company: "Distribuidora Sur", salary: "$11,000", location: "Parque Industrial" },
      { title: "Asistente de Dirección", company: "Consultoría Estratégica", salary: "$14,000", location: "Corporativo" }
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
      { title: "Coordinador de Rutas", company: "Envía Rápido", salary: "$13,000", location: "CEDIS Principal" },
      { title: "Almacenista Especializado", company: "Amazon Hub", salary: "$9,000", location: "Puerto Industrial" },
      { title: "Despachador de Carga", company: "Transportes Unidos", salary: "$11,500", location: "Terminal Norte" }
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
      { title: "Auxiliar de Almacén", company: "Bodega Local", salary: "$7,500", location: "Varios puntos" },
      { title: "Personal de Seguridad", company: "Vigilancia Pro", salary: "$8,500", location: "Zona Bancaria" },
      { title: "Ayudante General", company: "Fábrica Textil", salary: "$7,800", location: "Sector Industrial" }
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

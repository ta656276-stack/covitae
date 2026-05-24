# COVITAE - CV Smart Access 🚀

**COVITAE** es una plataforma web de vanguardia diseñada para la optimización de perfiles laborales y la búsqueda de empleo, con un enfoque fundamental en la **accesibilidad extrema (WCAG 2.2 AAA)**. Esta herramienta está especialmente diseñada para personas mayores de 40 años y usuarios con diversas discapacidades (visuales, motoras, auditivas o cognitivas).

## 🏗️ Arquitectura del Proyecto

La aplicación ha migrado de una estructura estática a una arquitectura profesional moderna basada en **Node.js**:

- **Bundler:** [Vite](https://vitejs.dev/) - Utilizado para una carga ultrarrápida y gestión eficiente de dependencias.
- **Frontend:** HTML5 semántico, CSS3 (Diseño Neumórfico) y JavaScript Vanilla (ES6+).
- **Accesibilidad:** 
  - **Web Speech API:** Integración de síntesis de voz proactiva para guía interactiva.
  - **CSS Variables:** Sistema dinámico para modos de Alto Contraste y Temas (Light/Dark).
  - **Aria-Labels & Focus Management:** Gestión estricta del foco para navegación por teclado.

### Estructura de Carpetas
```text
/
├── index.html          # Punto de entrada y estructura de pantallas
├── package.json        # Configuración de Node.js y scripts
├── src/
│   ├── js/
│   │   ├── main.js      # Lógica principal, navegación y eventos
│   │   ├── questions.js # Motor de cuestionarios dinámicos
│   │   └── mockData.js  # Base de datos simulada de empleos y formación
│   └── styles/
│       └── main.css     # Estilos globales, neumorfismo y accesibilidad
```

## 🛠️ Instalación y Uso

Para ejecutar este proyecto localmente, asegúrate de tener instalado [Node.js](https://nodejs.org/).

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ta656276-stack/covitae.git
   cd covitae
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el entorno de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   ```

## 📜 Historial de Versiones

### [v1.0.1] - Interactive Flow & Success Tracking (Actual)
- **Postulación Interactiva:** Implementación de pantallas dinámicas para detalles de vacante y confirmación de envío.
- **Notificaciones Simuladas:** Sistema de aviso de confirmación por correo electrónico.
- **Soporte Multimedia:** Ampliación del soporte de carga de CV a formatos JPG/JPEG.
- **Base de Datos Expandida:** Inclusión de requisitos detallados por puesto laboral.

### [v1.0.0] - UX Refinement & Theme Customization
- **Modo Oscuro:** Implementación de tema dark con diseño neumórfico.
- **Ayuda Contextual:** El botón de ayuda ahora explica la función específica de la pantalla actual.
- **Correcciones Visuales:** Centrado matemático del icono de ayuda y optimización de espaciado.
- **Navegación Circular:** Capacidad de reiniciar el flujo desde el inicio con limpieza de estado.

### [v1.0] - Base Architecture & Extreme Accessibility
- **Migración a Vite:** Estructura inicial del proyecto Node.js.
- **Alto Contraste:** Implementación del modo WCAG AAA (Amarillo sobre Negro).
- **Cuestionarios Dinámicos:** Flujo secuencial para perfiles senior (>40 años).
- **Mapeador de Industria:** Clasificación automática de perfiles en sectores técnicos, administrativos, logística o servicios.
- **Formación Gratuita:** Enlaces a plataformas como Google Actívate y Fundación Carlos Slim.

## ♿ Compromiso de Accesibilidad
COVITAE no es solo una aplicación, es una declaración de principios. Cada botón tiene un área de clic mínima de 60px, cada texto tiene un contraste validado y cada interacción es anunciada por voz, asegurando que nadie se quede fuera del mercado laboral digital.

---
Desarrollado con ❤️ para la inclusión laboral.

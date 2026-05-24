/* ARCHIVO: src/js/main.js */
import { elderlyQuestions } from './questions.js';
import { industrialSectors } from './mockData.js';

// --- Estado Global ---
const state = {
  userMode: "STANDARD",
  voiceEnabled: false,
  currentScreen: "welcome",
  answers: {},
  currentQuestionIndex: 0,
  theme: "light"
};

// --- Configuración de Voz (Web Speech API) ---
function speak(text) {
  if (state.userMode === "HEARING") return;
  
  window.speechSynthesis.cancel();

  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "es-MX";
  
  msg.rate = state.userMode === "COGNITIVE" ? 0.7 : 0.9;
  msg.pitch = 1;

  window.speechSynthesis.speak(msg);
}

// --- Navegación ---
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  
  const nextScreen = document.getElementById(screenId);
  if (nextScreen) {
    nextScreen.classList.add('active');
    state.currentScreen = screenId;
    
    if (screenId === "upload") {
      if (state.userMode === "NONE" || state.userMode === "COGNITIVE") {
        startQuestionnaire();
      } else {
        document.getElementById('questionnaire-container').style.display = 'none';
        document.getElementById('upload-content').style.display = 'flex';
        speak("Sube tu información o escribe tu experiencia.");
      }
    } else {
      const title = nextScreen.querySelector('h1, h2')?.textContent || "Nueva pantalla";
      speak(title);
    }

    nextScreen.querySelector('h1, h2')?.setAttribute('tabindex', '-1');
    nextScreen.querySelector('h1, h2')?.focus();
  }
}

// --- Motor de Cuestionarios ---
function startQuestionnaire() {
  state.currentQuestionIndex = 0;
  document.getElementById('upload-content').style.display = 'none';
  document.getElementById('questionnaire-container').style.display = 'flex';
  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById('q-options');
  const textEl = document.getElementById('q-text');
  const question = elderlyQuestions[state.currentQuestionIndex];

  textEl.textContent = question.text;
  container.innerHTML = "";

  question.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = "neumorphic";
    btn.textContent = opt.label;
    btn.style.width = "100%";
    btn.onclick = () => saveAnswer(question.id, opt.value);
    container.appendChild(btn);
  });

  speak(question.text);
}

function saveAnswer(questionId, value) {
  state.answers[questionId] = value;
  state.currentQuestionIndex++;

  if (state.currentQuestionIndex < elderlyQuestions.length) {
    renderQuestion();
  } else {
    speak("Gracias. Ahora puedes añadir más detalles o analizar tu perfil.");
    document.getElementById('questionnaire-container').style.display = 'none';
    document.getElementById('upload-content').style.display = 'flex';
  }
}

// --- Gestión de Temas ---
function setTheme(theme) {
  state.theme = theme;
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("dark-btn").classList.add("active");
    document.getElementById("light-btn").classList.remove("active");
    speak("Modo oscuro activado.");
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("light-btn").classList.add("active");
    document.getElementById("dark-btn").classList.remove("active");
    speak("Modo claro activado.");
  }
}

// --- Ayuda Dinámica ---
function provideHelp() {
  const helpTexts = {
    welcome: "Bienvenido a COVITAE. Puedes elegir entre guía por voz, configurar tu accesibilidad o subir tu información directamente.",
    accessibility: "Aquí puedes elegir modos especiales como alto contraste o lectura lenta. Selecciona uno y presiona continuar.",
    upload: "En esta sección puedes completar un pequeño cuestionario sobre tus habilidades o subir tu currículum directamente.",
    analysis: "Estamos procesando tu información con inteligencia artificial para encontrar las mejores opciones para ti.",
    results: "¡Listo! Aquí puedes ver los sectores recomendados para ti, vacantes actuales y cursos gratuitos para mejorar tu perfil."
  };

  const text = helpTexts[state.currentScreen] || "Usa el tabulador para navegar y Enter para seleccionar opciones.";
  speak(text);
}

// --- Handlers de Eventos ---
document.addEventListener('DOMContentLoaded', () => {
  
  // Tema inicial
  setTheme("light");

  document.getElementById('light-btn')?.addEventListener('click', () => setTheme("light"));
  document.getElementById('dark-btn')?.addEventListener('click', () => setTheme("dark"));

  document.getElementById('btn-voice')?.addEventListener('click', () => {
    state.voiceEnabled = true;
    state.userMode = "VISUAL"; 
    document.body.classList.add("high-contrast");
    speak("Guía por voz y alto contraste activados.");
    goTo("accessibility");
  });

  document.getElementById('btn-accessibility')?.addEventListener('click', () => goTo("accessibility"));
  document.getElementById('btn-skip')?.addEventListener('click', () => goTo("upload"));

  const modeCards = {
    'mode-visual': 'VISUAL',
    'mode-motor': 'MOTOR',
    'mode-hearing': 'HEARING',
    'mode-cognitive': 'COGNITIVE',
    'mode-elderly': 'NONE'
  };

  Object.entries(modeCards).forEach(([id, mode]) => {
    const el = document.getElementById(id);
    if (el) {
      const selectMode = () => {
        state.userMode = mode;
        document.querySelectorAll('.card').forEach(c => {
          c.classList.remove('selected');
          c.style.border = "";
        });
        el.style.border = "4px solid var(--primary-color)";

        if (mode === "VISUAL") {
          document.body.classList.add("high-contrast");
          speak("Modo de alto contraste activado.");
        } else if (mode === "COGNITIVE") {
          document.body.classList.remove("high-contrast");
          speak("Modo de instrucciones simples activado. Iré más despacio.");
        } else {
          document.body.classList.remove("high-contrast");
          speak("Opción seleccionada.");
        }
      };

      el.addEventListener('click', selectMode);
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectMode();
        }
      });
    }
  });

  document.getElementById('btn-continue-accessibility')?.addEventListener('click', () => goTo("upload"));
  document.getElementById('btn-analyze')?.addEventListener('click', startAnalysis);
  
  document.getElementById('btn-restart')?.addEventListener('click', () => {
    state.answers = {};
    state.currentQuestionIndex = 0;
    document.body.classList.remove("high-contrast");
    goTo("welcome");
  });

  document.getElementById('helpBtn')?.addEventListener('click', provideHelp);
});

// --- Lógica de Análisis e Industria ---
function startAnalysis() {
  const textExperience = document.getElementById('textExperience').value.toLowerCase();
  
  goTo("analysis");

  const steps = [
    "Leyendo tu experiencia profesional...",
    "Identificando habilidades y saberes...",
    "Buscando sectores industriales compatibles...",
    "Generando recomendaciones personalizadas..."
  ];

  const stepList = document.getElementById("steps");
  stepList.innerHTML = ""; 
  let index = 0;

  const interval = setInterval(() => {
    if (index >= steps.length) {
      clearInterval(interval);
      
      let sectorKey = "GENERAL";
      if (state.answers.main_skill) {
        sectorKey = state.answers.main_skill;
      } 
      else if (textExperience.includes("maquina") || textExperience.includes("mecanic") || textExperience.includes("herramienta")) {
        sectorKey = "TECHNICAL";
      } else if (textExperience.includes("cliente") || textExperience.includes("venta") || textExperience.includes("caja")) {
        sectorKey = "SERVICE";
      } else if (textExperience.includes("oficina") || textExperience.includes("archivo") || textExperience.includes("admin")) {
        sectorKey = "ADMIN";
      } else if (textExperience.includes("transporte") || textExperience.includes("manejo") || textExperience.includes("almacen")) {
        sectorKey = "LOGISTICS";
      }

      showResults(sectorKey);
      return;
    }

    const li = document.createElement("li");
    li.className = "neumorphic";
    li.style.margin = "10px 0";
    li.style.padding = "15px";
    li.textContent = `✅ ${steps[index]}`;
    stepList.appendChild(li);

    speak(steps[index]);
    index++;
  }, 2000);
}

function showResults(sectorKey) {
  goTo("results");
  const sector = industrialSectors[sectorKey] || industrialSectors.GENERAL;
  
  const titleEl = document.getElementById("resultTitle");
  const msgEl = document.getElementById("resultMessage");
  const cardsContainer = document.getElementById("job-cards-container");
  const suggestionList = document.getElementById("suggestion-list");
  const trainingLinks = document.getElementById("training-links");

  titleEl.textContent = `Sector: ${sector.name}`;
  msgEl.textContent = sector.description;
  
  cardsContainer.innerHTML = "";
  sector.jobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "neumorphic card";
    card.style.textAlign = "left";
    card.innerHTML = `
      <h3 style="margin-top: 0;">${job.title}</h3>
      <p><strong>Empresa:</strong> ${job.company}</p>
      <p><strong>Sueldo:</strong> ${job.salary}</p>
      <p><strong>Ubicación:</strong> ${job.location}</p>
      <button class="neumorphic" style="width: 100%; padding: 10px; margin-top: 10px;">Postularme ahora</button>
    `;
    cardsContainer.appendChild(card);
  });

  suggestionList.innerHTML = "";
  sector.suggestions.forEach(sug => {
    const li = document.createElement("li");
    li.textContent = sug;
    li.style.marginBottom = "10px";
    suggestionList.appendChild(li);
  });

  trainingLinks.innerHTML = "";
  sector.training.forEach(train => {
    const link = document.createElement("a");
    link.href = train.url;
    link.target = "_blank";
    link.className = "neumorphic";
    link.style.padding = "15px";
    link.style.textDecoration = "none";
    link.style.flex = "1 1 200px";
    link.textContent = train.label;
    trainingLinks.appendChild(link);
  });

  speak(`Análisis completado. Hemos identificado tu potencial en el sector de ${sector.name}. ${sector.description}. Revisa las sugerencias para mejorar tu CV y los cursos gratuitos que seleccionamos para ti.`);
}

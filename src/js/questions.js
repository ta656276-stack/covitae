/* ARCHIVO: src/js/questions.js */

export const elderlyQuestions = [
  {
    id: "exp_years",
    text: "¿Cuántos años de experiencia tienes en total sumando todos tus trabajos u oficios?",
    options: [
      { label: "Menos de 10 años", value: "0-10" },
      { label: "Entre 10 y 20 años", value: "10-20" },
      { label: "Más de 20 años", value: "20+" }
    ]
  },
  {
    id: "main_skill",
    text: "Si tuvieras que elegir una cosa que haces realmente bien, ¿cuál sería?",
    options: [
      { label: "Trabajos manuales o técnicos (Oficios)", value: "TECHNICAL" },
      { label: "Atención a personas o ventas", value: "SERVICE" },
      { label: "Organización y administración", value: "ADMIN" },
      { label: "Transporte o logística", value: "LOGISTICS" }
    ]
  },
  {
    id: "physical_preference",
    text: "¿Prefieres un trabajo que sea mayormente sentado o que requiera actividad física?",
    options: [
      { label: "Prefiero estar sentado/oficina", value: "SEDENTARY" },
      { label: "Prefiero moverme/actividad física", value: "ACTIVE" },
      { label: "Me es indiferente", value: "MIXED" }
    ]
  }
];

export const cognitiveAdaptations = {
  rate: 0.7, // Lectura más lenta
  simplifiedText: true
};

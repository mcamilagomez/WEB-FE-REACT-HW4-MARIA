export const fortalezas = [
    {
      id: 1,
      name: "Reputación de Marca",
      description: "El Toyota Corolla es conocido por su fiabilidad y durabilidad, lo que fortalece su posición en el mercado y genera confianza entre los consumidores.",
    },
    {
      id: 2,
      name: "Tecnología de Eficiencia de Combustible",
      description: "Mejoras continuas en la eficiencia de combustible y la tecnología híbrida refuerzan la competitividad del Corolla en términos de sostenibilidad y ahorro de costos operativos.",
    },
    {
      id: 3,
      name: "Amplia Red de Distribución y Servicio",
      description: "Toyota cuenta con una extensa red de concesionarios y servicios postventa a nivel global, facilitando el acceso y el mantenimiento del Corolla para los clientes.",
    },
];

export const oportunidades = [
    {
      id: 1,
      name: "Tendencias de Sostenibilidad",
      description: "La creciente demanda de vehículos más ecológicos ofrece una oportunidad para destacar el Corolla 2024 con versiones híbridas y tecnologías avanzadas.",
    },
    {
      id: 2,
      name: "Avances Tecnológicos",
      description: "Incorporar tecnologías emergentes como la conectividad avanzada puede atraer a un segmento de mercado más joven y tecnológico.",
    },
    {
      id: 3,
      name: "Expansión en Mercados Emergentes",
      description: "La creciente clase media en mercados emergentes proporciona una oportunidad para aumentar las ventas del Corolla en regiones donde la demanda de vehículos asequibles y confiables está en aumento.",
    },
];

export const debilidades = [
    {
      id: 1,
      name: "Percepción de Innovación Limitada",
      description: "Comparado con competidores con características más innovadoras o de lujo, el Corolla puede ser percibido como menos avanzado tecnológicamente.",
    },
    {
      id: 2,
      name: "Costo de Implementación de Nuevas Tecnologías",
      description: "Integrar tecnologías avanzadas y sostenibles puede aumentar los costos de producción, lo que podría impactar en el precio final del vehículo y en la rentabilidad.",
    },
    {
      id: 3,
      name: "Dependencia de Modelos Tradicionales",
      description: "La dependencia en el diseño y características puede limitar la capacidad de atraer a consumidores que buscan vehículos con un diseño más moderno o con características más innovadoras.",
    },
];

export const amenazas= [
    {
      id: 1,
      name: "Competencia Intensa",
      description: "El mercado automotriz está altamente competitivo, con numerosos modelos similares ofreciendo características innovadoras, lo que puede afectar las ventas del Corolla.",
    },
    {
      id: 2,
      name: "Cambios en Regulaciones Ambientales",
      description: " Las nuevas regulaciones ambientales podrían imponer desafíos adicionales para cumplir con los estándares, lo que podría incrementar los costos de desarrollo y producción.",
    },
    {
      id: 3,
      name: "Fluctuaciones Económicas Globales",
      description: "Las incertidumbres económicas y las fluctuaciones en los precios de los combustibles pueden influir en la demanda de vehículos, especialmente en un segmento de mercado sensible al precio como el Corolla.",
    },
];

export const objetivos= [
  { id: 1000, goal: "Eficiencia de combustible (km/l)", target: 25, progress: 18, compliance: 72 },
  { id: 1001, goal: "Reducción de emisiones (g/km)", target: 90, progress: 120, compliance: 33 },
  { id: 1002, goal: "Incremento de ventas globales ($)", target: 100000000, progress: 450000, compliance: 25 },
  { id: 1003, goal: "Mejora de seguridad (% reducción de accidentes)", target: 50, progress: 20, compliance: 40 },
  { id: 1004, goal: "Innovación tecnológica (% de nuevos features)", target: 100, progress: 85, compliance: 85 },
];

// Función para determinar el estado basado en el porcentaje de cumplimiento
export const getStatus = (compliance) => {
  if (compliance >= 0 && compliance <= 35) {
    return { text: "Crítico", color: "red" };
  } else if (compliance >= 36 && compliance <= 75) {
    return { text: "Aceptable", color: "orange" };
  } else if (compliance >= 76 && compliance <= 100) {
    return { text: "Exitoso", color: "green" };
  }
};
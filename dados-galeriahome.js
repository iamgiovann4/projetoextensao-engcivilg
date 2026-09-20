/**
 * Base de dados da galeria. Adicione novas fotos ao final do array.
 */
const galeriaDadosHome = [
    {
    id: 1,
    src: "img/galeria5.jpeg",
    alt: "Início das atividades em sala de aula"
  },
  {
    id: 2,
    src: "img/galeria13.jpeg",
    alt: "Início das atividades em sala de aula"
  },
  {
    id: 3,
    src: "img/galeria1.jpeg",
    alt: "Início das atividades em sala de aula"
  },
  {
    id: 4,
    src: "img/galeria4.jpeg",
    alt: "Camisetas patrocinadas pela empresa Ideal"
  }
];

if (typeof window !== "undefined") {
  window.galeriaDadosHome = galeriaDadosHome;
}

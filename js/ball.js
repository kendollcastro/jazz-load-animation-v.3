// Lista de imágenes de bolas de deportes
const sportBalls = [
  "/img/baseball.png",
  "/img/basketball.png",
  "/img/football.png",
  "/img/soccer.png",
  // Agrega más rutas de imágenes si es necesario
];

const ballImage = document.querySelector(".ball img");

function changeSportBall() {
  // Elije una imagen al azar de la lista
  const randomIndex = Math.floor(Math.random() * sportBalls.length);
  ballImage.src = sportBalls[randomIndex];
}

// Cambia la imagen cada 2 segundos (2000 ms)
setInterval(changeSportBall, 2000);

// Cambia la imagen cuando se carga la página
changeSportBall();

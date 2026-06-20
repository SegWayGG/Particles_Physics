
let fuente;

function setup() {
  createCanvas(400, 400);
  // *** HACER UN ARRAY DE PARTÍCULAS.
  fuente = new Fuente(width / 2, height / 2, 25);
  // particula = new Particle (0 , height / 2, 5, -4.2, 20);
}

function draw() {
  // Fondo negro con alfa para generar blur en el movimiento.
  background(0, 12);

  // Configuración para el dibujo de las partículas.
  stroke(255)
  fuente.update();
  fuente.draw();

  /*
    fill(255,0,0);
    particula.update();
    particula.draw();
  */
}

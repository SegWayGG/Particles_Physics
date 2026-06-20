
class Particle {
    // Valor constante que se le suma a vy en cada frame.
    gravity = 0.02;

    /**
     * @param {number} x - Posición en x.
     * @param {number} y - Posición en y.
     * @param {number} vx - Píxeles que se le suman en cada frame a x.
     * @param {number} vy - Píxeles que se le suman en cada frame a y.
     * @param {number} size - Tamaño de la partícula circular.
    */
    constructor(x, y, vx, vy, size) {
        this.x = this.ix = x; // 'x' y 'ix' Valen lo que ingresa de X.
        this.y = this.iy = y; // 'y' y 'iy' Valen lo que ingresa de Y.
        this.vx = this.ivx = vx;
        this.vy = this.ivy = vy;
        this.size = size;
        this.radius = this.size / 2;
    }

    update() {
        this.vy += this.gravity; // vy es cada vez mayor.
        this.x += this.vx; // Posición de x + vx.
        this.y += this.vy; // Posición de y + vy.
        this.checkBounds(); // Llama a la función que revisa si la partícula salió de la pantalla.
    }

    /**
     * Comprueba que salga por debajo del canvas.
     * En ivx, ivy se guardó la velocidad inicial.
    */
    checkBounds() {
        if(this.y > height + this.radius) {
            this.x = this.ix;
            this.y = this.iy;
            this.vx = this.ivx;
            this.vy = this.ivy;
        }
    }

    draw() {
        circle(this.x, this.y, this.size);
    }
}

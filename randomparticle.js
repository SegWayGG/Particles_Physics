
class RandomParticle extends Particle {
    /**
     * El constructor no es necesario si no se le agregan propiedades nuevas al momento de nacer.
     * En este caso le pasamos al contructor con 'super' los mismo parámetros que tiene el padre.
     * Crea 'color' para guardar un color random en la generación de cada partícula.
     * Crea 'vida' para la vida inicial de cada partícula.
    */
    constructor(x, y, vx, vy, size) {
    super(x, y, vx, vy, size);
    this.color = color(255, random(100, 255), random(0, 80));
    this.vida = random(50, 255);
    }
    /**
     * Sobreescribre el de la superclase (padre).
     * Le resta 5 a 'vida'.
    */
    update() {
        super.update();
        this.vida -=5;
    }
    
    /**
     * Este método sobreescribe el de la superclase (padre). 
     * Comprueba si sale del camvas también por los costados.
    */
    checkBounds() {
        if(this.vida <= 0) {
            this.x = mouseX; // 'x' es la posición en x del mouse.
            this.y = mouseY; // 'y' es la posición en y del mouse.
            this.vx = random(this.ivx, 0);
            this.vy = random(this.ivy, 0);
            this.vida = 255;
        }
    }

    /**
     * Sobreescribre el de la superclase (padre).
     * Le agrega un relleno del color random.
    */
    draw() { 
    this.color.setAlpha(this.vida);
    fill(this.color);
    circle(this.x, this.y, this.size);
    }
}

class Fuente {
    /**
     * Clase "administradora".
     * Esta clase es un generador de partículas aleatorias.
     * En vez de heredar de otra clase se dice que está
       *compuesta* de otras clases, en este caso es un conjunto
       de RandomParticle.
    */

    constructor(x, y, num) {
        this.x = x;
        this.y = y;
        this.particlesArr = []; // Array vacío donde se guardarán todas las partículas.
        this.init(num); // Inicializa 'num' objetos en el array 'this.particles'.
    }

    init(num) {
        /*
          Crea una cantidad 'num' de objetos RandomParticle con velocidades 
          iniciales aleatorias y los almacena en el array this.particles.
        */
        for(let i = 0; i < num; i++) {
            let vx = random(-3.0, 3.0);
            let vy = random(-3.0, 3.0);
            let p = new RandomParticle(this.x, this.y, vx, vy, random(1, 3.5)); // Crea una partícula
            this.particlesArr.push(p); // Mete la partícula creada en el array
        }
    }

    update() {
        // Recorre el array y le indica a cada elemento que ejecute su propio update()
        for(const p of this.particlesArr) {
            p.update();
        }
    }

    draw() {
        // Recorre el array y le indica a cada elemento que ejecute su propio draw()
        for(const p of this.particlesArr) {
            p.draw();
        }
    }
}

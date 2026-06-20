
class RandomParticle extends Particle {
    /**
     * El constructor no es necesario si no se le agregan propiedades nuevas al momento de nacer.
     * En este caso le pasamos al contructor con 'super' los mismo parámetros que tiene el padre.
     * Le agregamos 'color' para guardar un color random en la generación de cada partícula.
    */
    constructor(x, y, vx, vy, size) {
    super(x, y, vx, vy, size);
    this.color = color(random(255), random(255), random(255));
    }
    
    /**
     * Este método sobreescribe el de la superclase (padre) y cambia lo que hace. 
     * Ahora comprueba si sale del camvas también por los costados.
    */
    checkBounds() {
        if(this.y > height + this.radius || this.x > width + this.radius || this.x < 0 - this.radius) {
            this.x = mouseX; // 'x' es la posición en x del mouse.
            this.y = mouseY; // 'y' es la posición en y del mouse.
            this.vx = random(this.ivx, 0);
            this.vy = random(this.ivy, 0);
        }
    }

    /**
     * Sobreescribre el de la superclase (padre).
     * Le agrega un relleno del color random.
    */
    draw() { 
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
            let vx = random(-2.0, 2.0);
            let vy = random(-10.0, 0);
            let p = new RandomParticle(this.x, this.y, vx, vy, 10); // Crea una partícula
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

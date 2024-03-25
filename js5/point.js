class Point {
    #x = 0;
    #y = 0;               // groteles '#' - reiskia privatus kintamassis
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    set x(x) {
        this.#x = x;
    }
    get x() {
        return this.#x;
    }
    set y(y) {
        this.#y = y;
    }
    get y() {
        return this.#y;
    }
    // metodas apkaiciuoyi atstumui iki koordinaciu pradzios:
    distanceFromOrigin() {
        return Math.sqrt(this.#x ** 2 + this.#y ** 2)
    }
    //metodas tasko pastumimui:
    translate(dx, dy) {
        this.#x += dx;
        this.#y += dy;
    }
    //metodas tasko isvedimui:
    print() {
        return `[${this.x}, ${this.y}]`;
    }

    distance(p) {
        return Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2);
    }
}

const a = new Point(3, 5);
const b = new Point(0, 5);
b.translate(2, 0);
console.log(`[${a.x} , ${a.y}]`); //-> [3 , 5]
console.log(`[${b.x} , ${b.y}]`); //-> [0 , 10]

console.log(`${a.distanceFromOrigin()}`); //-> 5.830951894845301
console.log(`${b.distanceFromOrigin()}`); //- 5.385164807134504
console.log(`${a.distance(b)}`); //-> 1 


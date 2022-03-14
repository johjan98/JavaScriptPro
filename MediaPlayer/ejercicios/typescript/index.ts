
//Boolean
let muted: boolean = true;
muted = false;

//Números
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador/denominador;

//String
let nombre: string = 'Johjan';
let apellido: string = 'Puerta';
let saludo = `Hola, soy ${nombre} ${apellido}`;

//Arreglos
let people: string[] = [];
people = ['Deisy', 'Juan', 'Nacho', 'Samuel'];
//people.push(2); //Muestra error. Todos los elementos deben ser string
let peopleAndNumbers: Array<string | number> = []; //De esta forma se indica que el array puede tener string y number
peopleAndNumbers.push('Pedro');
peopleAndNumbers.push(85);

//Enum
enum Color { //Si las variables no se inicializan, al momento de llamarla se retornará la posición dentro de Color
  rojo = 'Rojo',
  verde = 'Verde',
  azul = 'Azul'
};
let colorFavorito: Color = Color.azul;
console.log(`Mi color favorito es ${colorFavorito}`);

//Any
let comodin: any = 'Joker';  //De esta forma la variable puede tomar en cualquier momento el tipo de dato que se quiera, no habrá error.
comodin = { type: 'Wildcard'};

//Object
let someObject: object = { type: 'Wildcard'};

//Funciones
function add(a: number, b: number): number{  //Esta función debe retornar un number
  return a + b;
};

const sum = add(8, 2);

function createAdder (a: number): (number) => number{  //Cuando una función retorna otra función
  return function (b: number){
    return b + a;
  };
};
const addFour = createAdder(4);
const fourPlus6 = addFour(6);

//Se pueden poner argumentos no obligatorios para las funciones. Si se pone ?: antes del tipo, tendrá un valor por defecto indefinido.
//O se le puede poner un valor por defecto específico usando =valor después del tipo.
function fullName (firstName: string, lastName: string = 'Puerta'): string{
  return `${firstName} ${lastName}`;
};
const johjan = fullName('Johjan');
console.log(johjan);

//Interfaces: Permite declarar la forma que va a tener un objeto.
interface Rectangulo { //Todos lo objetos con esta interfaz requiere de estos valores, de lo contrario se presenta un error
  ancho: number,
  alto: number,
  color?: Color
};
let rect: Rectangulo = {
  ancho: 3,
  alto: 6,
  color: Color.azul
}

function area (r: Rectangulo): number{
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(`Area del rectángulo: ${areaRect}`);

rect.toString = function (){
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());
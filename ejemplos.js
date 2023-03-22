//forEach() 
/*

var arr =['a','z','e','j'];

arr.forEach(function(element,index,arreglo){
    console.log(element);
    console.log(index);
    console.log(arreglo);
});

var arrNum =[2,4,6,8];

arrNum.forEach(function(element,index,arreglo){
    console.log(element+2);
    
});

//sort()

const arreglonu =[75,19,10,90,25,110];

arreglonu.sort(Comparacion)

console.log(arreglonu);

function Comparacion(a,b){
return a -b
}

//concat

const nombre='edwin';
const apellido='gonzales'

const completo =nombre.concat (apellido,'melquiades');
console.log(completo)


const vocales =['a','e','i'];
const numbers =[1,2,3];
const consonantes=['n','m'];
const vectores=[[1],[2]];

const union=vocales.concat('o','u', consonantes, numbers,vectores);
console.log(union);
*/


//===indexOff()

//const cities=['madrid','valencia','lugo'];

//console.log(cities.indexOf('lugo'));

//includes()
/*
const cities=['madrid','valencia','lugo'];
console.log(cities.includes('bilbao'));
console.log(cities.includes('lugo'));
*/
//join()
/*
let paises=['colombia','peru','venezuela','chile','argentina'];

console.log(paises.join('-'));

//findIndex()

let primos = [7, 5, 11, 3, 2, 19, 17, 23];
console.log(primos);

console.log();

let resultado = primos.findIndex((p) => p % 2 == 0);
console.log(resultado);
console.log(primos[resultado]);

console.log();

resultado = primos.findIndex((p) => p > 15);
console.log(resultado);
console.log(primos[resultado]);

console.log();

resultado = primos.findIndex((p) => p > 15 && p % 2 == 0);
console.log(resultado);
*/

//fill
/*
const array1=[1,2,3,4];

console.log(array1.fill(0,2,4));

console.log(array1.fill(5,1));
console.log(array1.fill(6));

*/

//push
/*
const cities=['madrid','valencia','lugo'];

const total=cities.push('vilbao','junin')
console.log(cities);
console.log(total);
*/

//pop


const cities=['madrid','valencia','lugo'];
/*
const last =cities.pop(cities);

console.log(cities);
console.log(last);
*/

//shift()
/*
const last =cities.shift(cities);

console.log(cities);
console.log(last);*/

//unshift()
/*
const numbers =[1,2,3];

numbers.unshift(0);
numbers.unshift(-1);
numbers.unshift(-2,-3);
console.log(numbers);
*/

//slice()
/*
let lenguaje = 'JavaScript es un lenguaje de programación';

console.log(lenguaje);

console.log();

console.log(lenguaje.slice(0, 10));  
console.log(lenguaje.slice(11)); 

console.log();

console.log(lenguaje.slice(lenguaje.lastIndexOf('p'))); 
console.log(lenguaje.slice(-12));   */

//reverse()
/*
let lenguaje = 'marchetto';

console.log(lenguaje);

console.log();

let lenguajeInvertido = lenguaje.split('').reverse().join('');

console.log(lenguajeInvertido);

*/

//splice()
/*
let colores=['blanco','negro','rojo','verde','azul','gris'];
console.log(colores.length)
console.log(colores);

colores.splice(colores.indexOf('negro'),1);

console.log(colores.length)
console.log(colores);
*/


//lastIndexOf(
/*
let lenguajes=['javascript','php','c','java','php','python','c++','c#'];

console.log(lenguajes.indexOf('c'));
console.log(lenguajes.indexOf('c#'));
console.log(lenguajes.indexOf('python'));
console.log(lenguajes.indexOf('php',2));

console.log(lenguajes.lastIndexOf('php'));
console.log(lenguajes.lastIndexOf('php',2));
*/

//flat() 
/*
const arr =[1,[2,[3,[4,[5]]]]];

/*const res=arr.flat();
const res=arr.flat(3);*/
/*
const res=arr.flat(Infinity);
console.log(res);
*/

//isArray()

/*
const names=['florin','ivan','liam'];
const str='hello word';
const number=17;
console.log(Array.isArray(number));

console.log(Array.isArray(names));*/


//from() 


let numeros = [1, 2, 3, 4, 5];

let numerosMultiplicadosPor2 = Array.from(numeros, (n) => n * 2);

console.log(numeros);   // [1, 2, 3, 4, 5]
console.log(numerosMultiplicadosPor2); // [2, 4, 6, 8, 10]

console.log();

let lenguajes = ['JavaScript', 'Python', 'Java'];
let lenguajesMayusculas = Array.from(lenguajes, (l) => l.toUpperCase());
console.log(lenguajes);
console.log(lenguajesMayusculas);






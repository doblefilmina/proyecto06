//ES5 sintaxis azucarada
function Mostrar () {

}

//ES5 sintaxis Real
var Mostrar = function() {

}

/////////
//ES6 Arrow Function
/*
const Mostrar = function(){
    
} 
=
*/
const Mostrar = () => {

}

/* sintaxis ES6
const Buscar = function (precio) {

}
*/
//arrow function
const Buscar = (precio) =>{

}
//cuando hay solo UN parámetro de entrada se puede sacar el paréntesis
const Buscar = precio =>{

}

// si es una función map, si hay una sola línea de código, y particularmente return, entonces se puede escribir:
/* ORIGINALEMENTE
let productos = objetos.map(function({Nombre, Stock, Precio, Imagen, Marca}){
    return new Producto (Nombre, Stock, Precio, Imagen, Marca)
}
*/
let productos = objetos.map( ({Nombre, Stock, Precio, Imagen, Marca}) => new Producto (Nombre, Stock, Precio, Imagen, Marca) )
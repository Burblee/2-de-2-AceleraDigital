let cad = "hola como estas";
let salida = "";
console.log (cad.charAt (10));
for (let index = cad.lenght-1; index >=0 ; index--) {
    salida += cad.charAt (index);
 }
 console.log (salida);
let buscarCaracter = "o";
let cantidad=0; 
console.log (salida);
for (let index = cad.lenght-1; index >=0 ; index--){
    if (buscarCaracter== cad.charAt (index)){
        cantidad++;
    }
}
console.log (buscarCaracter+ " se repite "+ cantidad + " veces ");
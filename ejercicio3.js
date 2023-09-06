//ejercicio 1//
[10, 2, 30, 4, 5];


const lista = [1, 2, 3, 4, 5];

function sumarPares(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (lista[i] % 2 === 0) {
      suma = suma + numeros[i];
    }
  }
  return suma;
}

console.log(sumarPares(lista));


//ejercicio4//
const diccionario = [hola,botella,banana,pizaron];
functionterminanEnA(diccionario)
{
  const letra = dicionario.every(palabra=palabra.endsWith("a"))
  return letra


}

console.log(terminanEnA(diccionario))


//ejercicio 5//
{
const numero = [-45, 32,-36,-67]

function sortAbsoluteNumbers(lista)
  const listaVacia = [];
  for (let i = 0; i < lista.length; i++) {
     const abs = Math.abs(lista[i]);
     listaVacia.push (abs);

  }

  return listaVacia.sort ((a,b) => a-b);

}
  console.log(sortAbsoluteNumbers(numeros));

//ejercicio 6//
const words =[
"hola", 
"uno",
"pepito ",
"Buenos Aires",
"tres",
"universidad",
"de"

];
const word = "pepito";
function BuscaPalabras (words,wod) {
let lista =[];
const indice = words.indexOf(words)

for(let i = 0; i< words.length; i++) {
   if (words [i].length> indice){

   }
}
console.log(BuscaPalabras(word))
}





const nombresArticulos = ["BANNER","s1", "s2", "s3", "s4", "s5", "s6", "s7", "ad1"]


console.log(nombresArticulos)

nombresArticulos
.toSorted()
.map(convertirANumero)

// forma simplificada
nombresArticulos.map( (articulo) => articulo.length)
// al map le tenemos que pasar una funcion que reciba un parametro y 
// devuelva un valor


// funcion lambda
// const convertirANumero = (section) => {
//   return section.length
// }

// funcion normal
function convertirANumero(articulo){
  // console.log(texto)
  return articulo.length
}

console.log(convertirANumero("BANNER"))

console.log(convertirANumero("s1"))

console.log(convertirANumero("ad1"))
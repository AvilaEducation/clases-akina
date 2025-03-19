// CREACION
// * usamos la palabra <function> para declarar una funcion
// * <saludo> es el nombre de la funcion, 
// los nombres tienen que ser lo mas descriptibles que se pueda
// * usamos parentesis para los parametros y luego llaves
// * dentro de las llave va todo el codigo que queremos ejecutar en la funcion
function saludo(){
    console.log("Hola mundo")
}

// EJECUCION
// para que una funcion se ejecute primero tenemos que llamar, sino no hace nada
// el llamado se hace con el nombre seguido de parentesis
saludo() 

// PARAMETROS
// los parametros con variables internas de la funcion y sirve para pasarle la informacion con la
// que queremos que trabaje
// * los parametros van dentro de los parentesis de la funcion
// * los nombres tienen que ser descriptivos
// * si hay varios parametros se separan por comas
// un parametro
// * podemos agregarle tipado usando los dos puntos, seguido del tipo de dato
function saludar(nombre: string){
    console.log("Hola " + nombre)
}

saludar("Marco") // mensaje final -> "Hola Marco"
saludar("Akina") // mensaje final -> "Hola Akina"

// muchos parametros
function mensajeClima(ciudad: string, temperatura: number){
    console.log(`Hacen ${temperatura} grados en la ciudad de ${ciudad}`)
}

mensajeClima("Buenos Aires", 30) // mensaje final -> "Hacen 30 grados en la ciudad de Buenos Aires"
mensajeClima("Bariloche", 10) // mensaje final -> "Hacen 10 grados en la ciudad de Bariloche"

// RETURN
// se usa cuando queremos que una funcion genera un dato nuevo
// * tiene que ir al final de la funcion
// * corta la ejecucion de la funcion, por lo que todo lo que este debajo del <return> no se ejecuta
function promedio(notas: number[]){
    let sumaNotas = 0
    const cantidadNotas = notas.length
    for(let nota of notas){
        sumaNotas = sumaNotas + nota
    }

    return sumaNotas / cantidadNotas;
    console.log("esto nunca se ejecuta porque quedo despues del return")
}

console.log(promedio([1, 2, 3, 4, 5])) // salida -> 3
console.log(promedio([5, 5, 5])) // salida -> 5
console.log(promedio([10, 8, 9])) // salida -> 9
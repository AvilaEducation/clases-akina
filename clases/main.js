// Tipos de datos
// numeros: numbers
// enteros
    // int (1-1M)
    // long
    // bigint (1-1MM) (1-1M)

// reales (float)
    // float
    // double

// texto: string, char[]
// char = caracter
"laksjdlkas .,- 😊"
"ñ4*asdC" = 57 * 57 * 57 * 57 * 5
"contraseña123"
"0cc175b9c0f1b6a831c399e269772661" == "0cc175b9c0f19Ja831c399e269772661"

"marco"=="marcoaskd"
dinero_billetera > precio_producto

// bool
// true, false

// condicionales y bucles

// condicional
if(dinero_billetera > precio_producto){
    console.log("comprando producto");
    console.log("comprando producto");
    console.log("comprando producto");
    console.log("comprando producto");
}else{
    console.log("dinero insuficiente")
    console.log("dinero insuficiente")
    console.log("dinero insuficiente")
    console.log("dinero insuficiente")
}

console.log("main")
// bucles

// bucle controlado
const animes = [467, 58567]
for (let index = 0; index < animes.length; index++) {
    const id_anime = animes[index];
    // traer datos de la pelicula
    const datos_anime = "https://api.jikan.moe/v4/anime/" + id_anime
    // mostrarlos
    datos_anime.data.title
}

// primera repeticion index = 0
// segunda repeticion index = 1
// tercera repeticion index = 2

// bucle indefinido
while(seguir_jugando == true){
    seguir_jugando = input("desea seguir jugando")
}

let index = 0;
while(index < peliculas.length){
    const pelicula_id = peliculas[index];
    // traer datos de la pelicula
    // mostrarlos

    index++
}

// estructuras de datos
// LISTAS
// indice: numero que se usa para representar un elemento de la lista
                    // 0           // 1            // 2         // 3
const peliculas2 = ["deadpool", "transformers", "ant-man"]
peliculas2[0] // primer elemento de la lista -> "deadpool"
peliculas2[1] // segundo elemento de la lista -> "transformers"
peliculas2[2] // tercer elemento de la lista -> "ant-man"
peliculas2[peliculas2.length - 1] // acceder al ultimo elemento

peliculas2[1] = "ironman"

// DICCIONARIOS - objetivos literal
const diccionarios = {
    "compu": "una computadora es .....",
    "mesa": "que es una mesa...."
}

const akina = {
    "nombre": "akina",
    "edad": 27,
    "celu": 182736,
    "email": "kjahsdjkasd",
}

akina.nombre
// JSON
// jS object notation
const pelicula = {
    alksdj: "asdasd",
    "fecha_estreno": 2024,
    "rating": 2.5,
    "genero": "haklsjdh",
    "en_cartelera": false,
    "director":{
        "nombre": "kasjhd",
        "genero_peliculas": "asdasd"
    }
}

pelicula.genero

const config_app = {
    "nombre" :"asdsa",
    "version":2.4,
    "depencies":[
        {
            "nombre": "kajshd",
            "version": 23.4
        }
    ]
}

// crear un par de json sobre tu mascota
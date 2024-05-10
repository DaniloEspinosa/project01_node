// Modulos que vamos a utilizar
const fs = require('node:fs');
const path = require('node:path');
const pc = require('picocolors');

// Prueba del picocolors
// console.log(pc.bgMagenta("Este texto deberia tener un background magenta"))

// Instrucción que limpia la terminal solo la parte visual
console.clear()

// Verificar si solo hay 2 argumentos en la ejecucion del js
if (process.argv.length == 2) {
    let menu = `Este programa muestra la tabla de multiplicar del numero que elijas\n`
    menu += `Te lo mostrará con el idioma que escojas de los siguientes:\n`
    menu += `cat - es - en\n`
    menu += `Ademas lo grabará en un fichero\n`
    menu += `Ejemplo de uso : ${pc.green("node app.js 3 cat")}\n`
    console.log(menu)
    // Finalizar la aplicacion (algo similar al break)
    process.exit(0)
}
// Falta:
// - Verificar que estén los 2 argumentos requeridos
// -  Verificar el orden de los argumentos
// - Verificar que el número sea mayor que CERO
// - Verificar que el idioma esté en la lista


// Obtener el operador y el idioma
const operador = process.argv[2]
const lang = process.argv[3]

// Obtener el fichero de idiomas
const rutaJson = path.join("config", "languages.json") // Esto le da el formato correspondiente al sistema operativo en el que se ejecuta
const jsonLang = fs.readFileSync(rutaJson, "utf-8")
const langObj = JSON.parse(jsonLang)

// console.log(langObj)  // Verificar el objeto
// console.log(langObj[lang]) // Verificar la seleccion dentro del objeto

// Título de la tabla y el fichero
const title = langObj[lang] + operador

// Definir la cabecera
let header = ("==================================\n")
header += ( title + "\n")
header += ("==================================\n")
console.log(pc.green(header))

// Número límite
const numLimit = 10
let tabla = ""
for (let i = 0; i < numLimit; i++){
    tabla += `\t${operador} x ${i} = ${operador * i}\n`
}

console.log(tabla)

const newTitle = title.split(" ").join("_")
const rutaCarpetas = path.join("txt", lang)

// Verificar si la ruta existe, si no existe la creara
if (!fs.existsSync(rutaCarpetas)) {
    console.log(`la ruta ${rutaCarpetas} no existia`)
    fs.mkdirSync(rutaCarpetas, { recursive: true})
}

const rutaFichero = path.join(rutaCarpetas, newTitle + ".txt")
fs.writeFileSync(rutaFichero, header + tabla, "utf-8")


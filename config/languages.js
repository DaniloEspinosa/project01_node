const fs = require('node:fs');

const languages = {
    "cat": "Taules de multiplicar del ",
    "es": "Tablas de multiplicar del ",
    "en": "Multiplication table of "
}

const lanJSON = JSON.stringify(languages)

fs.writeFile("languages.json", lanJSON, (err) => {
    if (err) throw err
    console.log("The file has been saved!")
})
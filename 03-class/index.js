const {arquivos} = require('../base')
const {texto} = require('../base')
console.log(texto)

const regex1 = /Jo+ão+/gi
console.log(texto.match(regex1))
regex2 = /(jp|JP)(e|E)?(g|G)/g
regex3 = /(jp)(e)?(g)/gi

for(const arquivo of arquivos) {
    const result = arquivo.match(regex2)

    console.log(arquivo, result)
}

for(const arquivo of arquivos) {
    const result2 = arquivo.match(regex3)

    console.log(arquivo, result2, '2')
}
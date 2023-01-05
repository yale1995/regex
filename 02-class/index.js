const {texto} = require('../base');
const regex1 = /(João|Maria)/gi

console.log(texto)
console.log(texto.match(regex1))
console.log(texto.replace(/João|Maria/, 'Felipe'))
console.log(texto.replace(regex1, 'Felipe'))
console.log(texto.replace(regex1, '"$1"'))
console.log(texto.replace(regex1,(input) => input.toUpperCase()))

const {lookahead} = require('../base')

console.log(lookahead)

// console.log(lookahead.match(/.+[^in]active$/gim))

// console.log(lookahead.match(/.+(?=[^in]active)/gim))
// console.log(lookahead.match(/.+(?=inactive)/gim))

// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))
// console.log(lookahead.match(/^(?!.+inactive).+$/gim))

console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))


const {cpfs, cpfs2} = require('../base');

const cpf = '098.901.094-50'

const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g
const regexCPF1 = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/mg
const regexCPF2= /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/g

console.log(cpf.match(regexCPF))
console.log(cpfs.match(regexCPF1))
console.log(cpfs2.match(regexCPF1))
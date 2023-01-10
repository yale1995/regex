const { cpfs, ips } = require('../base');

const regexCPF1 = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g
const regexCPF2 = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g
const regexCPF3 = /(\d{3}\.){2}\d{3}\-\d{2}/g

// 250 - 255 -> 25[0-5]
// 200 - 249 -> 2[0-4][0-9]
// 100 - 199 -> 1[0-9][0-9]
// 0 - 99 -> [0-9][0-9]

const regexIP1 = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d))/g
// /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g

// console.log(cpfs.match(regexCPF1))
// console.log(cpfs.match(regexCPF2))
// console.log(cpfs.match(regexCPF3))
console.log(ips.match(regexIP1))
console.log(ips)

const {html2, html} = require('../base');

// console.log(html2)
// console.log(html2.match(/<(\w+)>.+?<\/\1>/gi))
// console.log(html2.match(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi))
// console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi, '$1'))
// console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi, '$2'))
// console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi, '$3'))
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/gi, '$4'))
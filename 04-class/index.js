const {html} = require('../base');
console.log(html)
console.log(html.match(/<.+>.+<\/.+>/g)) // => greendy
console.log(html.match(/<.+?>.+?<\/.+?>/g)) // => non greendy
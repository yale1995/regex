const regex1 = /Yale/
const regex2 = /Yale/i
const regex3 = /Yale/ig
const name = 'Yale'
const upperCaseName = 'YALE'
const shakedName = 'studant yale'

const regexValidationResult1 = regex1.test(name) // ==> returns true because regex it's equal de string
console.log(regexValidationResult1)

const regexValidationResult2 = regex1.test(shakedName)  // ==> returns false because de regex is not case sensitive
console.log(regexValidationResult2)


const regexValidationResult3 = regex2.test(shakedName)  // ==> returns true because de regex is case sensitive
console.log(regexValidationResult3)

const regexValidationResult4 = regex3.test(shakedName)  // ==> returns true because de regex is case sensitive and global
console.log(regexValidationResult4) 
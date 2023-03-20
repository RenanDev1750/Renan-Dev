let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt ('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('soma:' + sum)
alert('subtração:' + sub)
alert('multiplicação:' + multi)
alert('divisão:' + div)
alert('restDiv:' + restDiv)

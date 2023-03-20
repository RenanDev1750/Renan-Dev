/*
Capturar 2 numeros
e fazer as operações matematicas
de soma, subtração, multiplicação, divisão
e resto da divisão

e para cada operação, mostrar um alerta com o resultado

#Melhorar a logica de programação
- perguntas corretas
- entender o problema
*/
let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma:' + sum)
alert('Subtração:' + sub)
alert('Multiplicação:' + multi)
alert('Divisão:' + div)
alert('restDiv:' + restDiv)
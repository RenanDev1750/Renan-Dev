/*
Solicite 2 numeros, faça a soma deles
e apresente o resultado final ao usuario
Tipo de dado : Number
operador matematico
manipulação de dados
type conversion or type casting
ordem de precedência dos operadores
Number() - Função construtora
*/
alert("Iremos somar 2 números")
let numberOne = prompt("Digite o primerio numero:")
let numberTwo = prompt("Digite o segundo número:")
let result = Number(numberOne) + Number(numberTwo)
alert("Resultado final:" + result)
/* solicitar o nome do aluno e as 3 notas
do bimestre calcular a media daquele aluno
se o aluno passou no bimestre, dar os parabéns

a media positiva, deverá ser maior que 6

se o aluno não passou, dar o motivo pro aluno e dar
o seu melhor na prova de recuperação
    Em ambos os casos, mostre uma mensagem com o nome do aluno 
    e a nota
    */

let student = prompt("qual o nome do(a) aluno(a)")
let n1 = prompt("qual a nota da primeira prova")
let n2 = prompt("qual a nota da segunda prova")
let n3 = prompt("qual a nota da terceira prova")
/*
fazer a media = (n1 + n2 + n3) / 3
*/
let avarage = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = avarage > 6

if (result) {
alert("Parabéns, " + student + " Sua media foi:" + avarage.toFixed(2))
} else {
alert(student + " Estude para sua prova de recuperação! Sua media foi de " + avarage.toFixed(2))
}
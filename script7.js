/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/
const pacientes = [
    {
        nome: "Alex",
        idade: 25,
        peso: 100,
        altura: 1.73,
    },
    {
        nome: "Erika",
        idade: 22,
        peso: 70,
        altura: 1.70,
    },
    {
        nome: "Alessandra",
        idade: 22,
        peso: 70,
        altura: 1.70,
    },
]

const namesPacientes = [];
const idadePacientes = [];
const pesoPacientes = [];
const alturaPacientes = [];

for(let paciente of pacientes){
    namesPacientes.push(paciente.nome)
    idadePacientes.push(paciente.idade)
    pesoPacientes.push(paciente.peso)
    alturaPacientes.push(paciente.altura)
}

for(let index = 0; index < pacientes.length; index++){
    alert(`O paciente(a) ${namesPacientes[index]} tem ${idadePacientes[index]} anos de idade, pesa ${pesoPacientes[index]} kgs e mede ${alturaPacientes[index]} metros.`)
}

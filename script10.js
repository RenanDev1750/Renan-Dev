const studentsList = [
    {
        name: 'José',
        nota1: 10,
        nota2: 5
    },
    {
        name: 'Ricardinho',
        nota1: 5,
        nota2: 3
    },
    {
        name: 'Johnsons',
        nota1: 4,
        nota2: 2
    }
]

function media(students) {
    for (let i = 0; i < students.length; i++) {
        const aluno = students[i];
        const nota1 = aluno.nota1;
        const nota2 = aluno.nota2;
        const name = aluno.name;

        const avarage = (nota1 + nota2) / 2
        let result = avarage > 7

        if(result){
            alert('A média do(a), aluno(a): ' + name + ' é: ' + avarage + '\n Parabéns você foi aprovado!')
            
               } else {
            alert ('A média do(a) , aluno(a) :' + name + 'é: ' + avarage + '\n Não foi dessa vez,' + 'Tente Novamente!')
        }
   

    }
}


media(studentsList)


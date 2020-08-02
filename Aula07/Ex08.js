/* 8) Em uma escola ficou definido que os alunos do 8º ano terão aulas de história e os alunos do 9º terão aulas de física às quartas-feiras. Você deve criar uma função que receba um array de objetos contendo nome e série de cada aluno e atribua a sua respectiva disciplina da quarta-feira. (O array de alunos deve ser criado como você desejar contanto que contenha pelo menos 5 alunos). */

var arrayAlunos = [
    {nome: "Alice", serie: 8},
    {nome: "Bob", serie: 9},
    {nome: "Carol", serie: 8},
    {nome: "Dave", serie: 9},
    {nome: "Eve", serie: 8}
]

/* Para cada aluno do array, verifica se a propriedade "serie" do aluno é 8 ou 9 e atribui a disciplina */
function disciplinaQuarta(array){
    array.forEach( (item) => {
        item.disciplina = (item.serie === 8) ?"historia":
            (item.serie === 9)?"fisica":            null
        })
}

/* Chamada para verificar a função */
disciplinaQuarta(arrayAlunos);
console.log(arrayAlunos)
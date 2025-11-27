// Guia de Exercícios: Imutabilidade e Manipulação de Objetos em JS
// Nível 1: O Básico (Valor vs Referência)
// Conceito: Objetos em JS são passados por referência. Exercício 1:

// 1. Crie um objeto `aluno` com nome e nota.
const aluno = {
    nome: "Luis Andre",
    nota: 8.5
}

// 2. Crie uma variável `novoAluno` e atribua `aluno` a ela.
const novoAluno = aluno

// 3. Altere a nota em `novoAluno`.
novoAluno.nota = 9.5

// 4. Dê `console.log` em ambos. Explique por que o original mudou.
console.log("aluno", aluno.nota)
console.log("novoAluno",novoAluno.nota)
// O objeto original mudou pq o outro objeto não é uma copia dele, ele é uma referência. Quanto alteramos ele, alteramos o objeto original.




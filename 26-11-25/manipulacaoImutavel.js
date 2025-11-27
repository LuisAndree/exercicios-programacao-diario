// Nível 6: Manipulação Imutável (Padrão Redux/React)
// Conceito: Alterar dados criando novos, sem `push`, `pop` ou atribuição direta. Exercício 6: Tenha um array: `const todos = [{id: 1, text: 'Lavar louça', done: false}, {id: 2, text: 'Estudar', done: true}]`. Sem mutar `todos`:

const todos = [{id: 1, text: 'Lavar louça', done: false}, {id: 2, text: 'Estudar', done: true}]

// 1. Adicionar: Crie um novo array com um novo item no final.

const todos2 = [{id: 1, text: 'Lavar louça', done: false}, {id: 2, text: 'Estudar', done: true}, {id:3, text: 'tocar guitarra', done: false}]

// 2. Remover: Crie um novo array removendo o ID 1 (dica: `filter`).

const todos3 = todos2.filter(todo => todo.id !== 1)

// 3. Atualizar: Crie um novo array onde o ID 1 tenha `done: true` (dica: `map` e spread).

const todosAtualizados = todos.map(todo => {
  if (todo.id === 1) {
    // Se for o item que queremos mudar, retorna uma cópia com a propriedade 'done' alterada
    return { ...todo, done: true };
  }
  // Para todos os outros itens, retorna eles como estão
  return todo;
});

console.log("Array Original:", todos);
console.log("Array Atualizado:", todosAtualizados);

// Nível 4: Deep Copy (Cópia Profunda)
// Conceito: Criar uma cópia totalmente independente. Exercício 4:

// 1. Crie um objeto complexo com Datas, Arrays e Objetos aninhados.
const complexObject = {
    date: new Date(),
    array: [1, 2, 3, 4, 5, 6, 7],
    fullName: {
        firstName: "Luis",
        lastName: "Andre"
    }
}

// 2. Método Antigo: Use `JSON.parse(JSON.stringify(obj))`. Note o que acontece com objetos `Date` (viram string).

const copia1 = JSON.parse(JSON.stringify(complexObject))

copia1.array.push(8)
copia1.fullName.firstName = "João"
copia1.date = new Date()

console.log("copia 1",copia1)


// 3. Método Moderno: Use `structuredClone(obj)`.

const copia2 = structuredClone(complexObject)

copia2.array.push(9)
copia2.fullName.firstName = "Andre"
copia2.date = new Date()

console.log("copia 2",copia2)

// 4. Prove que alterar o aninhado da cópia não afeta o original.

// Não altera pois foi feita uma copia das props para um novo objeto.
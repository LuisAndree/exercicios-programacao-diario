// Nível 5: Deep Freeze (Avançado)
// Conceito: Recursividade para congelar tudo. Exercício 5:

const complexObject = {
    metadata: {
        created: new Date(), 
        version: 1.0
    },
    organization: {
        department: {
            name: "Desenvolvimento",
            tags: [1, 2, 3, 4, 5, 6, 7],
            employee: {
                firstName: "Luis",
                lastName: "Andre",
                role: "Intern",
                active: true
            }
        }
    }
};

console.log("Objeto: ", complexObject)


// 1. Crie uma função `deepFreeze(obj)`.

function deepFreeze(obj) {
    Object.freeze(obj)
    // 2. Ela deve verificar se as propriedades são objetos e chamar `deepFreeze` nelas recursivamente antes de congelar o objeto pai.
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] === "object") {
                deepFreeze(obj[prop])
            }
        }
    }
    return obj
}


deepFreeze(complexObject)

// 3. Teste com um objeto de 3 níveis de profundidade.

//complexObject.organization.department.tags.push(8)
complexObject.organization.department.employee.firstName = "João" 
complexObject.metadata.created = new Date() 
complexObject.metadata.version = 2.0
complexObject.organization.department.employee.active = false

console.log("Objeto apos alteração: ", complexObject) 
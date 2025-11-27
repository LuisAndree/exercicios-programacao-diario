// Nível 2: Shallow Copy (Cópia Rasa)
// Conceito: O `Spread Operator (...)` cria um novo objeto, mas mantém referências de objetos aninhados. Exercício 2:

// 1. Crie um objeto `config` com propriedades primitivas e um objeto aninhado `theme: { color: 'dark' }`.

const config = {
    desktop: true,
    mobile: false,
    tablet: false,
    theme: {
        color: "dark"
    }
}

// 2. Crie `cloneConfig` usando `const cloneConfig = { ...config }`.

const cloneConfig = {...config}

// 3. Altere uma propriedade primitiva do clone. (O original não muda).

cloneConfig.desktop = false

// 4. Altere `cloneConfig.theme.color`. 

cloneConfig.theme.color = "light"

// 5. Dê `console.log` em ambos. Explique

console.log("config", config)
console.log("cloneConfig", cloneConfig)

// 5. Verifique o original. Explique o "vazamento" da mutação.

// O Objeto alinhado(propriedade) dentro do objeto cloneConfig mantem a mesma referência do original, logo quando alteramos ele, alteramos a propriedade do objeto config. 
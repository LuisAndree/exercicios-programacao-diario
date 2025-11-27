// Nível 3: Shallow Freezing
// Conceito: `Object.freeze()` impede modificações apenas no nível superior. Exercício 3:

// 1. Pegue o objeto `config` do exercício anterior.

const config = {
    desktop: true,
    mobile: false,
    tablet: false,
    theme: {
        color: "dark"
    }
}

// 2. Aplique `Object.freeze(config)`.

Object.freeze(config)

// 3. Tente alterar uma propriedade de topo. (Deve falhar ou ser ignorado).

config.desktop = false 
console.log(config)

// 4. Tente alterar `config.theme.color`. (Vai funcionar).

config.theme.color = "light"
console.log(config)

// 5. Explique a limitação do congelamento raso.

// Object.freeze() impede modificações apenas no nível superior. No objeto alinhado(prop de config) não acontece o congelamento.
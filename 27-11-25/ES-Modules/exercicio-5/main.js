async function carregarModulo() {
    console.log("Aguardando ação do usuário...");
    
    // Simula uma condição (ex: clique de botão)
    // O arquivo heavyCalc.js só é baixado/lido NESTE momento
    const modulo = await import('./heavyCalc.js');
    
    // O export default fica disponível na propriedade .default do objeto
    const resultado = modulo.default();
    
    console.log(resultado);
}

carregarModulo();
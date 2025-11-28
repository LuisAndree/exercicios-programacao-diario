console.log("Iniciando conexão com DB...");

// O módulo "pausa" aqui por 2 segundos
await new Promise(resolve => setTimeout(resolve, 2000));

export const dbStatus = "Conectado com sucesso!";
console.log("Conexão finalizada no módulo.");
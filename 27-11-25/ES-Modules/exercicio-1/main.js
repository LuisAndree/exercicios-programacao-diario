import { soma, sub } from './math.js'; // Desestruturação obrigatória
import print from './logger.js';       // Importação padrão (nome livre)

const resultadoSoma = soma(10, 5);
const resultadoSub = sub(20, 8);

print(`O resultado da soma é: ${resultadoSoma}`);
print(`O resultado da subtração é: ${resultadoSub}`);
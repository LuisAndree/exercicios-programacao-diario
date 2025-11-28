// 1. Renomeando para evitar colisão de nomes
import { fetchData as fetchV1 } from './api_v1.js';
import { fetchData as fetchV2 } from './api_v2.js';

// 2. Importando tudo como um Namespace (Objeto)
import * as MathUtils from './math.js'; 

// Testando as APIs
console.log(fetchV1()); 
// Saída: Dados recebidos da API Versão 1

console.log(fetchV2()); 
// Saída: Dados recebidos da API Versão 2 (Atualizada)

// Testando o Namespace
// Agora 'soma' não está solta, ela é um método de MathUtils
const resultado = MathUtils.soma(1, 2);
console.log(`Soma via namespace: ${resultado}`);
import { count, increment } from './counter.js';

console.log(`Contador inicial: ${count}`); // 0

increment(); // Executa função lá dentro do counter.js

console.log(`Contador após incremento: ${count}`); // 1
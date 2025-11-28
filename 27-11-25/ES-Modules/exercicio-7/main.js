import { dbStatus } from './db.js';

// Esta linha só roda DEPOIS que o db.js terminar o await dele (2 segundos)
console.log(`Status no Main: ${dbStatus}`);
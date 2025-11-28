// Importamos direto do índice da pasta
// Nota: Em Node puro (sem bundler), você deve usar './utils/index.js'. 
// Em Next.js/React, apenas './utils' funciona.
import { soma, Logger } from './utils/index.js';

const resultado = soma(10, 10);

Logger(`Resultado usando Barrel File: ${resultado}`);
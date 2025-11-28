// 1. Re-exporta TUDO que é nomeado em math.js (soma, sub)
export * from './math.js';

// 2. Re-exporta o DEFAULT de logger.js, transformando em uma exportação NOMEADA "Logger"
export { default as Logger } from './logger.js';
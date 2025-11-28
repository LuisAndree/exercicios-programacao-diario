import { Admin } from './Admin.js';

// Instanciando o Admin
const meuAdmin = new Admin('Dev Intern', 'dev@exemplo.com', 'Sudo/Root');

// Testando
console.log(meuAdmin.info());
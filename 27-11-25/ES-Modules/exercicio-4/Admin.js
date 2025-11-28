import { User } from './User.js';

export class Admin extends User {
    constructor(nome, email, nivel) {
        // Passa nome e email para o construtor do User
        super(nome, email);
        this.nivel = nivel;
    }

    // Sobrescrevendo o método info para adicionar detalhes do admin
    info() {
        // super.info() reutiliza a lógica da classe pai
        return `${super.info()} | Acesso: ${this.nivel}`;
    }
}
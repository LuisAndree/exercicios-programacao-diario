export class User {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    info() {
        return `Usuário: ${this.nome} (${this.email})`;
    }
}
class pessoa {
    nome;
    idade;
    peso;
    constructor(nome, idade, peso) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e peso ${this.peso}kg.`);
    }
};

const enock = new pessoa();

enock.nome = 'Enock';
enock.idade = 19;
enock.peso = 85;

console.log(enock);
enock.descrever();

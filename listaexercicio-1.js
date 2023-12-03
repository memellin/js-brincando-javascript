
const precoCombustivel = 5.50;
const km = 100;
class Carro{
    marca;
    cor;
    combustivelPorKm;

    constructor(marca, cor, combustivelPorKm){
        this.marca = marca;
        this.cor = cor;
        this.combustivelPorKm = combustivelPorKm;
    }
    descrever(){
        console.log(`Este carro é um ${this.marca} ${this.cor} e consome ${this.combustivelPorKm} litros de combustível por quilômetro.`);
    }
    calcularCombustivel(precoCombustivel, km){
        return precoCombustivel * this.combustivelPorKm * km;
    }
}

const carro1 = new Carro('Fiat', 'vermelho', 0.2);
console.log(carro1.calcularCombustivel(precoCombustivel, km));
console.log(carro1);
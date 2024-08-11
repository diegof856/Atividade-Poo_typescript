"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Pessoa {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(altura) {
        this.altura = altura;
    }
    envelhecer() {
        if (this.idade < 21) {
            while (true) {
                this.altura += 0.5;
                this.idade++;
                this.crescer();
                console.log("Voçê é menor que 21 anos voçê crescerá " + 0.5 + " ao ano portanto voçê tem " + this.altura + " de altura");
                if (this.idade === 21) {
                    break;
                }
            }
        }
        else {
            console.log("Voçê é maior do que 21 anos voçê não crescerá mais");
        }
    }
    engordar() {
        console.log("Voçê precisa engordar está muito magro seu peso é de " + this.peso);
    }
    emagrecer() {
        console.log("Voçê precisa emagrecera está acima do peso " + this.peso);
    }
    crescer() {
        console.log("Voçê cresceu");
    }
}
let pessoa = new Pessoa("Diego", 12, 80, 1.75);
pessoa.envelhecer();
if (pessoa.getPeso() >= 100) {
    pessoa.emagrecer();
}
else {
    pessoa.engordar();
}
let entrada = (0, prompt_sync_1.default)();
let nome = entrada("Digite o seu nome: ");
let peso = +entrada("Digite o seu peso: ");
let altura = +entrada("Digite o sua altura: ");
let idade = +entrada("Digite sua idade: ");
let pessoa2 = new Pessoa(nome, idade, peso, altura);
pessoa2.envelhecer();
if (pessoa2.getPeso() >= 100) {
    pessoa2.emagrecer();
}
else {
    pessoa2.engordar();
}

import prompt from 'prompt-sync';
class Pessoa{
   
    private nome: string;
    private idade: number;
    private peso: number;
    private altura: number;
    
    
    constructor(nome: string, idade: number, peso: number, altura: number){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
    public getNome(){
        return this.nome;
    }
    public setNome(nome: string){
        this.nome = nome;
    }
    public getIdade(){
        return this.idade;
    }
    public setIdade(idade: number){
        this.idade = idade;
    }
    public getPeso(){
        return this.peso;
    }
    public setPeso(peso: number){
        this.peso = peso;
    }
    public getAltura(){
        return this.altura;
    }
    public setAltura(altura: number){
        this.altura = altura;
    }

    envelhecer(){
        if(this.idade < 21){
            while(true){
                this.altura += 0.5;
                this.idade++;
                this.crescer();
                console.log("Voçê é menor que 21 anos voçê crescerá "+ 0.5 +" ao ano portanto voçê tem "+ this.altura +" de altura");
                if(this.idade === 21){
                   
                    break;
                }
            }
          
        }else{
             console.log("Voçê é maior do que 21 anos voçê não crescerá mais");
        }
    }
    engordar(){
        console.log("Voçê precisa engordar está muito magro seu peso é de "+ this.peso);
    }
    emagrecer(){
        console.log("Voçê precisa emagrecera está acima do peso "+ this.peso);
    }
    crescer(){
        console.log("Voçê cresceu");
    }

}

let pessoa = new Pessoa("Diego", 12, 80, 1.75);
pessoa.envelhecer();
if(pessoa.getPeso() >= 100){
   pessoa.emagrecer();
}else{
    pessoa.engordar();
}


let entrada = prompt();
let nome = entrada("Digite o seu nome: ");
let peso:number = +entrada("Digite o seu peso: ");
let altura:number = +entrada("Digite o sua altura: ");
let idade:number = +entrada("Digite sua idade: ");
let pessoa2 = new Pessoa(nome, idade, peso, altura);
pessoa2.envelhecer();
if(pessoa2.getPeso() >= 100){
   pessoa2.emagrecer();
}else{
    pessoa2.engordar();
}





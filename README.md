# Atividade-Poo_typescript
# Explicação do Código TypeScript

## Classe `Pessoa`

A classe `Pessoa` representa um indivíduo com propriedades e métodos para gerenciar suas informações pessoais e alterações ao longo do tempo.

### Propriedades

- `nome`: O nome da pessoa.
- `idade`: A idade da pessoa.
- `peso`: O peso da pessoa em quilogramas.
- `altura`: A altura da pessoa em metros.

### Métodos

- **Construtor**
  - `constructor(nome: string, idade: number, peso: number, altura: number)`: Inicializa um novo objeto `Pessoa` com os valores fornecidos para nome, idade, peso e altura.

- **Getters e Setters**
  - `getNome()`: Retorna o nome da pessoa.
  - `setNome(nome: string)`: Define um novo nome para a pessoa.
  - `getIdade()`: Retorna a idade da pessoa.
  - `setIdade(idade: number)`: Define uma nova idade para a pessoa.
  - `getPeso()`: Retorna o peso da pessoa.
  - `setPeso(peso: number)`: Define um novo peso para a pessoa.
  - `getAltura()`: Retorna a altura da pessoa.
  - `setAltura(altura: number)`: Define uma nova altura para a pessoa.

- **Métodos de Alteração**
  - `envelhecer()`: Aumenta a altura e a idade da pessoa se ela tiver menos de 21 anos. A altura aumenta em 0.5 metros a cada ano até que a idade alcance 21 anos. Se a idade for 21 ou mais, exibe uma mensagem informando que a pessoa não crescerá mais.
  - `engordar()`: Exibe uma mensagem informando que a pessoa está abaixo do peso e precisa engordar.
  - `emagrecer()`: Exibe uma mensagem informando que a pessoa está acima do peso e precisa emagrecer.
  - `crescer()`: Exibe uma mensagem genérica informando que a pessoa cresceu.

## Exemplo de Uso

```typescript
import prompt from 'prompt-sync';

// Cria uma instância da classe Pessoa
let pessoa = new Pessoa("Diego", 12, 80, 1.75);

// Faz a pessoa envelhecer
pessoa.envelhecer();

// Verifica o peso da pessoa e exibe a mensagem apropriada
if (pessoa.getPeso() >= 100) {
   pessoa.emagrecer();
} else {
    pessoa.engordar();
}

// Solicita ao usuário informações pessoais e cria uma nova instância da classe Pessoa
let entrada = prompt();
let nome = entrada("Digite o seu nome: ");
let peso: number = +entrada("Digite o seu peso: ");
let altura: number = +entrada("Digite a sua altura: ");
let idade: number = +entrada("Digite sua idade: ");
let pessoa2 = new Pessoa(nome, idade, peso, altura);

// Faz a nova pessoa envelhecer
pessoa2.envelhecer();

// Verifica o peso da nova pessoa e exibe a mensagem apropriada
if (pessoa2.getPeso() >= 100) {
   pessoa2.emagrecer();
} else {
    pessoa2.engordar();
}

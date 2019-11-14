# calculator-testing-challenge :green_heart:

## Visão geral
<p></p>
O objetivo desse desafio foi criar um conjunto simples de testes com a ferramenta Cypress para um aplicativo web simples. O aplicativo Web  testado consiste em:


- Calculadora  front-end em React.

Foram informados casos de testes que deveriam ser realizados, no entanto outros casos de teste foram definidos como forma de cobrir com mais qualidade funcionalidades do sistema.

## Sobre o Cypress

Cypress é uma ferramenta de teste da web incrivelmente poderosa. É capaz de testar qualquer aplicativo da web. Sua arquitetura coloca um corte acima das ferramentas de teste de ponta a ponta semelhantes. Sua experiência de desenvolvedor é a melhor da categoria. E como o Cypress executa seus testes no mesmo contexto que o resto do seu aplicativo, você pode obter velocidade, confiabilidade e depuração que são apenas um sonho distante com ferramentas semelhantes.

Mais em: <https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell>



## Casos de teste


São listados a seguir as principais funcionalidades dos sistema, e casos de teste elaborados e executados referente a funcionalidade:
- Deve ser capaz de fazer cálculos;
	- realizar soma.
	- realizar subtração.
	- realizar multiplicacão.
	- realizar divisão.
	- limpar operaçoes realizadas.
- Deve exibir o nome de usuário quando autenticado;
	- exibir nome usuário autenticado
- Deve efetuar login em um usuário existente;
	- email e senha não informados para login.
	- email não informado para login.
	- senha não informada para login
	- realizar login usuário
- Deve registrar um novo usuário;
	- email e senha não informados para cadastro.
	- email não informado para cadastro.
	- senha não informada para cadastro.
	- registra usuário
- Deve mostrar uma mensagem de erro se houver um erro ao registrar;

## Bugs e sugestões de melhorias

- incluir mensagens informando erros quando:
	- tentar logar/registrar sem inserir email e senha.
	- tentar logar/registrar sem inserir email.
	- tentar logar/registrar sem inserir a senha.
	- tentar logar com usuario ou senha invalidos.
	- tentar registrar com email já cadastrado.
	
## Executando o aplicativo

### Clone o repositório

Execute: `git clone https://github.com/marlo2222/calculator-testing-challenge.git`
### Instale as dependências do projeto

Execute: `npm install` dentro da pasta do repositório clonado.
### Executando o aplicativo

Execute `npm run start` via linha de comando para iniciar o servidor e vá para <https://localhost:8080> no navegador para visualização do aplicativo.
### Executando os testes

O projeto já possui configuração de cypress, para que você possa se preocupar apenas em executar. :smiley:
- Execute os teste com os comando:
	- `npm run cy:open` para executar os testes pelo terminal.
	- `npm run cy:open` para executar via navegador.
	
Caso sujam dúvidas: `marlo_henrique@hotmail.com` :wink:

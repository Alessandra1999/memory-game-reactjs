# Jogo da Memória em React

Este é um projeto de jogo da memória simples desenvolvido com React.js. O jogo apresenta cartas com imagens do anime **Hunter x Hunter**, onde os jogadores devem encontrar pares de cartas correspondentes.

## 🛠️ Funcionalidades

- **Jogar**: Inicie o jogo e comece a encontrar pares de cartas.
- **Reiniciar o Jogo**: Ao finalizar, você pode reiniciar o jogo com um botão para jogar novamente.
- **Feedback Visual**: As cartas são reveladas ao serem clicadas e ficam viradas quando um par é encontrado.

## 🧰 Conceitos de React Utilizados

Este projeto utiliza os seguintes conceitos de React:

- **Componentes Funcionais**: Para criar a interface do jogo.
- **Hooks (useState e useEffect)**: Para gerenciar o estado do jogo e a lógica de contagem de movimentos.
- **Manipulação de Eventos**: Para lidar com cliques nas cartas.
- **Renderização Condicional**: Para exibir mensagens quando o jogo termina.

### Você pode acessá-lo através do link: https://alessandra1999.github.io/memory-game-reactjs/

ou clonar o repositório e rodar o projeto localmente.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) para gerenciar pacotes.
- Um navegador web para rodar o projeto.

## 🚀 Clonando o Repositório

1. Abra o terminal no local onde deseja clonar o repositório.
2. Execute o comando abaixo:

   ```bash
   git clone git@github.com:Alessandra1999/memory-game-reactjs.git

3. Navegue até o diretório do projeto:

  ```bash
  cd memory-game-reactjs

<hr/>

## ▶️ Rodando o Projeto Localmente
Instale as dependências do projeto:

  ```bash
  npm install

Execute o projeto:

  ```bash
  npm start

O projeto será aberto no seu navegador padrão em http://localhost:3000.

## 📄 Estrutura do Projeto
public/: Contém arquivos públicos, como imagens e o index.html.
src/: Contém os componentes do jogo.
components/: Inclui o componente principal do jogo da memória (MemoryGame.jsx).
App.js: O componente principal que renderiza o jogo.
App.css: Estilos globais para o projeto.

## 📷 Demonstração
O jogo da memória apresenta uma interface simples com cartas que podem ser clicadas para revelar imagens, além de um contador de tentativas e um botão para reiniciar o jogo.

## 📝 Como Funciona
Clique em uma carta para revelá-la.
Tente encontrar o par correspondente clicando em outra carta.
O jogo contará suas tentativas.
Quando todos os pares forem encontrados, você terá a opção de jogar novamente clicando no botão "Jogar Novamente".


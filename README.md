# Sistema Autocar
Projeto de Labsoft - 2015

---------------------
Grupo:
---------------------
Eduardo Levy		- xxxxxxx
Filipe Arena		- xxxxxxx
Mayer Levy			- xxxxxxx
Pedro Martinez		- 7630826

---------------------
Como rodar o sistema:
---------------------
1 - Instalar o Node (https://nodejs.org/)
2 - Instalar um servidor mysql (sugerimos o mamp - https://www.mamp.info/en/)
3 - Entrar na pasta do projeto
4 - $ npm install
5 - Rodar o servidor mysql. Verificar se está na porta 3306.
6 - $ node config.js
7 - $ node mockup.js
8 - $ node server.js
9 - Abrir um navegador e escrever localhost:8080

---------------------
FILE STRUCTURE:
---------------------
autocar/
... config.js 			// gera o banco de dados e suas tabelas, com todas regras necessárias
... mockup.js 			// gera os objetos fictícios para facilitar a debugação
... router.js 			// mapeia todas as rotas do sistema
... server.js 			// conecta ao servidor mySQL e gera o servidor localhost:8080
... tests.js 			// realiza os testes do backend para controle de qualidade
... models/
...... <entity>.js 		// define uma classe do banco de dados
... services/
...... <dao>.js 		// define um DAO (Objeto de manipulação do bd)
... public/
...... views/
......... <view>.jade 	// view escrita em jade que será compilada e convertida em html
...... css/
......... styles.css 	// css customizado do próprio sistema
...... libs/
......... <lib>/		// libs que forem necessárias, como bootstrap
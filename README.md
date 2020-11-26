# bxblue-selecao-poketrader
Aplicativo para a seleção da BxBlue.

O aplicativo ficou todo feito com Javascript, HTML e CSS em um único arquivo que contem toda a aplicação. As interações com o banco de dados são feitas via Javascript. O servidor NodeJS foi utilizado apenas para servir esse único arquivo do aplicativo estaticamente.

A regra de justiça é bem simples, que o somatório dos pontos de experiência de cada um não passe de um limite, que é 20% dos pontos do maior somatório. Alguns exemplos: 100 e 80 - troca justa; 100 e 79 - troca injusta; 100 e 110 - troca justa.

Foi utilizado o banco de dados NOSQL 'restdb', que fica na nuvem e permite iterações via HTTP (get, post, delete, put). Foi criada apenas a coleção 'poketrade' nele com os registros de trocas feitas pelo aplicativo. Pela seguinte URL, é possível visualizar o JSON do histórico: 'https://bxbluepoketrader-4fcb.restdb.io/rest/poketrade'.

Não deu para fazer tudo na presente versão, alguns TODOs ficaram pendentes (anotados no HTML).
#

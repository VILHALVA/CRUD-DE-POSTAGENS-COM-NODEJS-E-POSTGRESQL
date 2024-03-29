# CRUD DE POSTAGENS COM NODEJS E POSTGRESQL
👨‍🏫APP BÁSICO DE POSTAGENS (CRUD) COMO O INSTAGRAM (SOMENTE TEXTO) COM O NODEJS E POSTGRESQL.

<img src="./IMAGENS/FOTO_01.png" align="center" width="500"> <br> 
<img src="./IMAGENS/FOTO_02.png" align="center" width="500"> <br> 
<img src="./IMAGENS/FOTO_03.png" align="center" width="500"> <br> 
<img src="./IMAGENS/FOTO_04.png" align="center" width="500"> <br> 
<img src="./IMAGENS/FOTO_05.png" align="center" width="500"> <br> 

## DESCRIÇÃO:
Este aplicativo é uma plataforma para criar, visualizar, editar e excluir (CRUD) postagens. Aqui está uma descrição mais detalhada das funcionalidades:

1. **Criação de Novas Postagens**: Os usuários podem criar novas postagens preenchendo um formulário com um título e conteúdo e enviando-o. Isso é feito através do formulário "Nova Postagem!" na página principal.

2. **Visualização de Todas as Postagens**: Todas as postagens existentes são exibidas em uma tabela na página principal. Cada postagem é exibida com seu ID, título e conteúdo.

3. **Edição de Postagens**: Os usuários podem editar uma postagem existente clicando no botão de edição associado a cada postagem na tabela. Isso os levará a uma página de edição onde podem modificar o título e o conteúdo da postagem.

4. **Exclusão de Postagens**: Os usuários podem excluir uma postagem existente clicando no botão de exclusão associado a cada postagem na tabela. Isso removerá permanentemente a postagem do banco de dados.

5. **Layout Responsivo e Estilizado**: Estilo escuro e bonito foi adicionado ao código HTML, utilizando uma paleta de cores predominantemente escura, com elementos em destaque em tons de vermelho (#ff6f61). As formas dos elementos foram suavizadas com bordas arredondadas, e os botões apresentam uma aparência de destaque quando são hoverados. O formulário e a tabela foram estilizados para ter uma aparência limpa e moderna, com contraste adequado para facilitar a leitura.

## EXECUTANDO O PROJETO:
1. **Configuração do Banco de Dados:**
   - Antes de executar o site, é necessário importar o arquivo `DATABASE.sql`. Se não estiver familiarizado com o processo de importação, [confira este curso](https://github.com/VILHALVA/CURSO-DE-POSTGRESQL) para orientações detalhadas.

2. **Configuração do JS:**
   - Abra o arquivo `./CODIGO/models/db.js` e ajuste as configurações do seu banco de dados nos parâmetros de `sequelize`:

     ```javascript
     database = "postapp";
     username = "seu_usuario";
     usersenha = "sua_senha";
     ```

3. **Instalando as Depêndencias:**
   - Para instalar as dependências listadas no arquivo "package.json", você pode usar o comando `npm install` ou simplesmente `npm i` no terminal. Certifique-se de estar no diretório do seu projeto onde o arquivo "package.json" está localizado. O npm irá ler o arquivo "package.json" e instalar todas as dependências listadas nele. 

   - Aqui está o comando:

   ```bash
   npm install
   ```

   ou

   ```bash
   npm i
   ```

   - Ou se você prefirir, apenas execute esse comando:
   ```bash
   npm install express
   ```

4. **Executando o Aplicativo:**
   - Para subir o servidor, no diretório do seu [projeto](./CODIGO/APP.js), digite o seguinte comando no Terminal/CMD:
   ```bash
   node APP.js
   ```
   - OU:
   ```bash
   nodemon APP.js
   ```

   - Acesse o APP no navegador visitando `http://localhost:8081`.

## NÃO SABE?
- Entendemos que para manipular arquivos em `HTML`, `CSS` e outras linguagens relacionadas, é necessário possuir conhecimento nessas áreas. Para auxiliar nesse aprendizado, oferecemos cursos gratuitos disponíveis:
* [CURSO DE HTML E CSS](https://github.com/VILHALVA/CURSO-DE-HTML-E-CSS)
* [CURSO DE NODEJS](https://github.com/VILHALVA/CURSO-DE-NODEJS)
* [CURSO DE POSTGRESQL](https://github.com/VILHALVA/CURSO-DE-POSTGRESQL)
* [CONFIRA MAIS CURSOS](https://github.com/VILHALVA?tab=repositories&q=+topic:CURSO)

## CREDITOS:
- [PROJETO CRIADO PELO VILHALVA](https://github.com/VILHALVA)
- [PROJETO BASEADO NO "CRUD DE POSTAGENS COM NODEJS E MYSQL"](https://github.com/VILHALVA/CRUD-DE-POSTAGENS-COM-NODEJS-E-MYSQL)





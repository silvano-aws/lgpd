Aplicação Modelo para elaboração de projeto de LGPD com relatórios padronizados
Ao instalar o nodejs tem que alterar a variavel de ambiente path para dizer onde
está instalado o node

Para testar, sair para o terminal (cmd) e digitar node -v e npm -v

Instalar o express e o express generator: 
npm install -g -s express express generator


-g= instala globalmente para todos os projetos  -s = registra a instalação no 


Para configurar o express:

express --view=ejs nome-do-projeto -->ja cria a estrutra de pastas do projeto
conforme abaixo


bin          - onde fica o arqwuivo www de configuração do servidor
node_modules - onde ficam todas as dependencias instaladas automaticamente pelo npm install
public       - arquivos estáticos, tipo imagens, scripts, css
routes       - rotas para requisicoes http://
views        - armazena as pastas de exibicção (html) mas com extensão ejs por causa do view engine ejs 
instalado

depois de tudo instalado para rodar o sistema digitar:
Para preencher o packge.json:
npm init

instalar o HTTP-ERRORS
npm install http-errors --save


npm start ou NODEMON (pacote que monitora alterações nos fontes)
depois digitar: http://localhost:3000/#

O primeiro programa carregado é index.js que fica na pasta routes, em seguida ele chama o arquivo index.ejs passando alguns
parametros

Obs:
O módulo logon.js que não está em uso, é um exemplo de acesso a uma api para retorno de dados


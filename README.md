# Zoo Capivaras - Backend
Este projeto é a parte backend da aplicação Zoo Capivaras, construída para gerenciar informações de capivaras, como nome, idade, peso, status de saúde, habitat, comportamento, dieta e observações. O backend fornece uma API REST interativa que se comunica com o frontend e um banco de dados MySQL para armazenar os dados.

## Tecnologias Utilizadas
* Node.js
* Express
* Cors
* MySQL
* dotenv (para gerenciamento de variáveis de ambiente)

## Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/DeyvissonRobert/zoo-capivaras-backend.git

2. Naveque até a pasta do projeto: 
    ```sh
    cd zoo-capivaras-backend

3. Instale as dependências 
    ```sh
    npm install

Configure as variáveis de ambiente no arquivo .env com os dados de conexão do seu banco de dados MySQL: 

3. Instale as dependências 
    ```sh
    DB_HOST=localhost
    DB_USER=seu_usuario_mysql
    DB_PASSWORD=sua_senha_mysql
    DB_DATABASE=nome_do_banco_de_dados
    PORT=3000

## Uso

1. Inicie o servidor:
   ```sh
   npm start

2. O servidor estará disponível em http://localhost:3000.

## Rotas
### Listar Usuários
* Rota: GET /capivaras
* Descrição: Retorna a lista de todas as capivaras cadastradas.
* Resposta: 200 OK com a lista de capivaras em formato JSON.

### Criar Capivara
* Rota: POST /capivaras
* Descrição: Adiciona uma nova capivara ao banco de dados.
* Requisição:
  ```sh
  {
    "nome": "Capivara Exemplo",
    "idade": 5,
    "peso": 50.0,
    "saude": "Saudável",
    "habitat": "Pantanal",
    "comportamento": "Calmo",
    "dieta": "Gramíneas",
    "observacoes": "Nenhuma"
  }


### Editar Capivara
* Rota: PUT /capivaras/:id
* Descrição: Edita uma capivara existente pelo ID.
* Requisição:
  ```sh
  {
    "nome": "Capivara Atualizada",
    "idade": 6,
    "peso": 55.0,
    "saude": "Saudável",
    "habitat": "Amazônia",
    "comportamento": "Curioso",
    "dieta": "Frutas",
    "observacoes": "Alterado"
  }


### Deletar Usuário
* Rota: DELETE /capivaras/:id
* Descrição: Deleta uma capivara existente pelo ID.
* Resposta: 200 OK com uma mensagem de sucesso.

  
## Banco de Dados MySQL
* O banco de dados MySQL utilizado para o gerenciamento de capivaras segue o seguinte esquema:
  ```sh 
   CREATE DATABASE zoo_capivaras;

  USE zoo_capivaras;

  CREATE TABLE capivaras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    peso FLOAT NOT NULL,
    saude VARCHAR(255) NOT NULL,
    habitat VARCHAR(255) NOT NULL,
    comportamento VARCHAR(255) NOT NULL,
    dieta VARCHAR(255),
    observacoes TEXT
  );


## Estrutura do Projeto
 ```sh
/
├── src/
│   └── app.js          # Código principal do servidor
├── database/
│   └── connection.js   # Conexão com o banco de dados MySQL
├── controllers/
│   └── capivaraController.js # Lógica de negócios para as capivaras
├── .env                # Variáveis de ambiente
├── package.json        # Dependências e scripts do npm
└── README.md           # Documentação do projeto


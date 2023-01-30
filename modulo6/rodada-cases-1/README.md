## DogHero

### Link do case
<https://github.com/petlove/test-backend/wiki/Test-Case>

### Endpoints
- Index:
  - Retorna uma lista com informações de todos os passeios agendados;
  - Se utilizada a filtragem por data, são retornados todos os passeios a partir da data atual.

- Show:
  - Retorna todas as informações de um passeio específico;
  - Se o id passado não corresponder a nenhum passeio agendado, retorna uma mensagem de erro.

- Create:
  - Agenda um passeio a partir das informações fornecidas pelo usuário;
  - Verifica se todas as informações foram passadas, se não, retorna uma mensagem de erro;
  - Verifica o formato das informações passadas e, caso sejam inválidos, retorna uma mensagem de erro;
  - Verifica se os pets escolhidos estão cadastrados no banco de dados, se não, retorna uma mensagem de erro;
  - Verifica se a duração do passeio é válida a partir dos horários de início e fim, se não for, retorna uma mensagem de erro;
  - Calcula o preço do passeio de acordo com a duração e o número de pets.

- Start Walk:
  - Inicia um passeio específico;
  - Verifica se o passeio está cadastrado, se não, retorna uma mensagem de erro;
  - Se o passeio já foi iniciado ou já foi finalizado, retorna uma mensagem de erro.

- Finish Walk:
  - Finaliza um passeio específico;
  - Verifica se o passeio está cadastrado, se não, retorna uma mensagem de erro;
  - Se o passeio ainda não foi iniciado ou já foi finalizado, retorna uma mensagem de erro.

### Utilização
- É necessário instalar as dependências com `npm install`
- E realizar a migração dos dados com `npm run migrations`

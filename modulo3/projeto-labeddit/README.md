### LABEDDIT

### O que funciona
- Tela de Login
	- Visualização de dois inputs, para e-mail e senha, e dois botões, para fazer login e para ir à tela de cadastro;
	- Ambos os inputs são obrigatórios, o input de e-mail só aceita um e-mail válido;
	- Ao preencher o formulário e clicar no botão de login, se as informações inseridas estiverem corretas, o usuário é direcionado à tela com o feed de posts, se as informações estiverem erradas, um alert é mostrado e o usuário não é direcionado a nenhuma tela;
	- Ao clicar no botão de login, uma imagem de carregamento é exibida até que a requisição termine.

- Tela de Cadastro
	- Visualização de três inputs, para nome de usuário, e-mail e senha, e um botão para cadastrar;
	- Todos os três inputs são obrigatórios, o input de e-mail só aceita um e-mail válido, o input de senha só aceita uma senha contendo entre 8 e 30 caracteres;
	- Ao preencher o formulário e clicar no botão de cadastrar, se as informações inseridas estiverem corretas, o usuário é cadastrado e direcionado à tela com o feed de posts, se as informações estiverem erradas, um alert é mostrado e o usuário não é direcionado a nenhuma tela;
	- Ao clicar no botão de cadastrar, uma imagem de carregamento é exibida até que a requisição termine;
	- Header com botão para ir à tela de login.

- Tela do Feed
	- Visualização de dois inputs para criar novo post, para título e conteúdo, botão para criar o post, e cards dos dez posts mais recentes, contendo o nome do usuário que criou a postagem, o conteúdo, o número de votos, com opções para votar, e o número de comentários;
	- Enquanto os posts não são renderizados na tela, uma imagem de carregamento é mostrada;
	- Ao preencher o formulário e clicar no botão de postar, se as informações inseridas estiverem corretas, o novo post é criado e o feed é atualizado para mostrá-lo, se as informações estiverem erradas, um alert é mostrado ao usuário;
	- Ao clicar no botão de postar, uma imagem de carregamento é exibida até que a requisição termine;
	- Ao clicar na seta para cima ao lado do número de votos de um post, uma unidade é somada ao número, ao clicar na seta para baixo, uma unidade é subtraída. Cada usuário só pode votar uma vez em cada post;
	- Ao clicar no ícone ou no número de comentários de um post, o usuário é direcionado à página contendo os comentários daquele post;
	- Header com botão para fazer logout;
	- Ao clicar no botão de logout, o token de autorização é deletado e o usuário é direcionado à tela de login.

- Tela de comentátios do Post
	- Visualização do card do post escolhido, contendo o nome do usuário que criou a postagem, o conteúdo, o número de votos, com opções para votar, e o número de comentários;
	- Input para escrever um comentário e botão de enviar o comentário;
	- Lista dos cards dos comentários do post, contendo o nome do usuário que enviou o comentário, o conteúdo e o número de votos, com opções para votar;
	- Enquanto os comentários não são renderizados na tela, uma imagem de carregamento é mostrada;
	- Caso o post ainda não tenha comentários, uma mensagem é mostrada;
	- Ao preencher o input e clicar no botão de enviar, o comentário é criado com as informações inseridas pelo usuário e a lista de comentários é atualizada para mostrá-lo;
	- Ao clicar no botão de comentar, uma imagem de carregamento é exibida até que a requisição termine;
	- Ao clicar na seta para cima ao lado do número de votos de um comentário, uma unidade é somada ao número, ao clicar na seta para baixo, uma unidade é subtraída. Cada usuário só pode votar uma vez em cada comentário;
 	- Header com botão para fechar a tela do post(voltar ao feed) e botão para fazer logout;
 	- Ao clicar no botão de logout, o token de autorização é deletado e o usuário é direcionado à tela de login.

- Tela de Erro
	- Em caso de o usuário tentar acessar alguma página que não existe, uma mensagem de erro é mostrada.

### O que não funciona
- Demais funcionalidades dos desafios

### Link Surge 
<https://attractive-nation.surge.sh/>

### Imagens
![login](https://user-images.githubusercontent.com/104588339/182050069-9551561d-4869-4824-ab67-8f24d44e12c0.png)
![cadastro](https://user-images.githubusercontent.com/104588339/182050073-cc25f880-90a3-4201-8274-407fc5ba9f6e.png)
![feed](https://user-images.githubusercontent.com/104588339/182050078-6ff1cd37-48e8-4191-a13b-772861780c81.png)
![post](https://user-images.githubusercontent.com/104588339/182050082-0a88dbbc-cffe-44ff-b53d-781f0d1ac49f.png)
![post_comentarios](https://user-images.githubusercontent.com/104588339/182050086-916ae10e-971d-4ecd-a025-aa5e9b790f6e.png)

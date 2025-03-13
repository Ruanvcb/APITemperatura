                                                      Previsão do Tempo | API

Aplicativo web para exibir previsões do tempo utilizando a API OpenWeatherMap. O projeto fornece informações meteorológicas, incluindo temperatura, condição climática e previsão para os próximos dias.

                                                      Tecnologias Utilizadas:
                                                                     
HTML5, CSS3, JavaScript (ES6+)  |  API OpenWeatherMap, Boxicons (para ícones)

                                                      Funcionalidades:

Exibir previsão do tempo atual para uma localização padrão. Permitir ao usuário buscar previsões para outras localizações. Exibir previsão climática para os próximos 4 dias. Atualização dinâmica da interface com informações da API.

                                                      Como Utilizar:

Clone este repositório:

"git clone https://github.com/seu-usuario/previsao-tempo.git"

Navegue até o diretório do projeto:

"cd previsao-tempo"

Abra o arquivo index.html no navegador.

Para buscar a previsão de outra localização, clique em "Buscar Localização" e digite o nome da cidade.

                                                      Configuração da API

Para usar a aplicação corretamente, você precisa de uma chave de API do OpenWeatherMap:

Acesse OpenWeatherMap e crie uma conta.

Obtenha sua chave de API.

Substitua a chave no arquivo logica.js:

const apiKey = 'SUA_CHAVE_AQUI';

                                        Estrutura do Projeto

                                         previsao-tempo/
                                         ├── index.html  # Estrutura principal do site
                                         ├── style.css   # Estilos da interface
                                         ├── logica.js   # Lógica de busca e atualização do tempo
                                         └── README.md   # Documentação do projeto

                                                      Melhorias Futuras:

Implementar geolocalização automática para previsão baseada na localização do usuário. Adicionar suporte para previsão horária detalhada. Criar versão responsiva para melhor usabilidade em dispositivos móveis.

                                                      Contribuição:

Fique à vontade para contribuir! Para isso:

Fork este repositório.

Crie uma branch com sua funcionalidade (git checkout -b minha-feature).

Faça commit das suas mudanças (git commit -m 'Adiciona nova funcionalidade').

Faça push para a branch (git push origin minha-feature).

Abra um Pull Request.

                                                      Licença:

Este projeto é de uso livre e não possui uma licença definida.

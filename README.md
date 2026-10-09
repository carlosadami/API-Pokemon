# Pokédex - Consumindo uma API com JavaScript

## API utilizada

**PokéAPI**: https://pokeapi.co/

É uma API gratuita com informações de Pokémon. Não precisa de cadastro nem de chave.

## Como funciona a aplicação

1. O usuário digita o nome ou o número de um Pokémon (exemplo: `pikachu` ou `25`).
2. Clica no botão **Buscar**.
3. A página mostra a imagem, o nome, o número, o tipo, a altura e o peso do Pokémon.
4. Se o Pokémon não existir, aparece a mensagem "Pokémon não encontrado!".

## Como estou consumindo a API

O consumo acontece no arquivo `script.js`, com o `fetch`:

```javascript
let resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome);
let pokemon = await resposta.json();
```

- `fetch` faz a requisição para a API, usando o endereço `https://pokeapi.co/api/v2/pokemon/` + o nome digitado.
- `await` espera a resposta da API chegar.
- `resposta.json()` transforma a resposta em um objeto JavaScript.
- Depois eu pego os dados do objeto (`pokemon.name`, `pokemon.id`, `pokemon.types`, `pokemon.height`, `pokemon.weight` e a imagem em `pokemon.sprites`) e coloco na tela com `innerHTML`.

## Arquivos

- `index.html`: estrutura da página
- `style.css`: estilo da página
- `script.js`: código que consome a API
- `README.md`: explicação do projeto

## Como executar

Basta abrir o arquivo `index.html` no navegador.

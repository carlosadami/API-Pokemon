// API usada: https://pokeapi.co/

async function buscarPokemon() {
  // Pega o que o usuário digitou
  let nome = document.getElementById("campo").value.toLowerCase();

  // Faz a requisição para a API
  let resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome);

  // Se não encontrar o Pokémon, mostra uma mensagem
  if (resposta.ok == false) {
    document.getElementById("resultado").innerHTML = "Pokémon não encontrado!";
    return;
  }

  // Transforma a resposta em um objeto JavaScript
  let pokemon = await resposta.json();

  // Mostra os dados na tela
  document.getElementById("resultado").innerHTML =
    "<img src='" + pokemon.sprites.other["official-artwork"].front_default + "'>" +
    "<h2>" + pokemon.name + "</h2>" +
    "<p>Número: " + pokemon.id + "</p>" +
    "<p>Tipo: " + pokemon.types[0].type.name + "</p>" +
    "<p>Altura: " + pokemon.height / 10 + " m</p>" +
    "<p>Peso: " + pokemon.weight / 10 + " kg</p>";
}

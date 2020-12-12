fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

const pokemones = './data/pokemon/pokemon.json';
let groupPokemon = '';
fetch(pokemones)
  .then(response => response.json())
  .then(data => {
    console.log(JSON.stringify(data));
    let dataPokedex = data.pokemon;
    //let groupPokemon;
    dataPokedex.forEach(function(element) { 
      return groupPokemon += `<div class="card">
           <img class="card-img-top" src="` + element.img +`" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">` + element.name + ` #` + element.id + `</h5>
              <p class="card-text"> Type: ` + element.type + `</p>
              <p class="card-text"> Weaknesses: ` + element.weaknesses + `</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"> Hatches from egg: ` + element.egg + `</small>
          </div>
        </div>`
    });
    document.getElementById('root').innerHTML = groupPokemon; 
  });


/* esta es una función de ejemplo
/ puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
*/

/* filterData(data, condition)

sortData(data, sortBy, sortOrder)

computeStats(data)
*/


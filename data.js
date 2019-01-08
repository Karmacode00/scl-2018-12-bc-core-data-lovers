<<<<<<< HEAD
=======
const pokemones = './data/pokemon/pokemon.json';
let data = '';
fetch(pokemones)
  .then(response => response.json())
  .then(jsonData => {
    //console.log(JSON.stringify(jsonData));
    showData(jsonData);
    return data = jsonData;
  })
  .catch(error => {
    document.getElementById('root').innerHTML = 'Error: ' + error;
  });
 
const showData = (data) => {
  let groupPokemon = '';
  let dataPokedex = data.pokemon;
    dataPokedex.forEach(function(element) { 
      return groupPokemon += `<div class="card">
           <img class="card-img-top" src=${element.img} alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${element.name} #${element.id}</h5>
              <p class="card-text"> Type: ${element.type.join(', ')}</p>
              <p class="card-text"> Weaknesses: ${element.weaknesses.join(', ')}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"> Hatches from egg: ${element.egg}</small>
          </div>
        </div>`
    });
    document.getElementById('root').innerHTML = groupPokemon;
};

const selectType = document.getElementById('type');

selectType.addEventListener('change', ()=> {
  let condition = selectType.options[selectType.selectedIndex].value;
  //console.log(data);
  let filtered = window.filterType(data.pokemon, condition);
  let filteredPokemon = '';
  //console.log(filtered)
  filtered.forEach(element => {
    return filteredPokemon += `<div class="card">
    <img class="card-img-top" src=${element.img} alt="Card image cap">
   <div class="card-body">
     <h5 class="card-title">${element.name} #${element.id}</h5>
       <p class="card-text"> Type: ${element.type.join(', ')}</p>
       <p class="card-text"> Weaknesses: ${element.weaknesses.join(', ')}</p>
   </div>
   <div class="card-footer">
     <small class="text-muted"> Hatches from egg: ${element.egg}</small>
   </div>
 </div>`
  });
  document.getElementById('root').innerHTML = filteredPokemon;
});

//window.onload = showData();


/* esta es una función de ejemplo
/ puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
*/

/* 

window.filterData = (data, condition) => {
data.sort
}

filterData(data, condition) recibiría la data, y nos retornaría aquellos datos que 
sí cumplan con la condición

sortData(data, sortBy, sortOrder) El primer parámetro, data, nos entrega los datos. 
El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data 
se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere 
ordenar de manera ascendente o descendente.

computeStats(data) nos permitirá hacer cálculos estadísticos básicos para ser
 mostrados de acuerdo a la data proporcionada.
*/

>>>>>>> Andrea/master

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
  let computedPokemon = window.pokemon.computeStats(dataPokedex);
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
    document.getElementById('computed').innerHTML = `${computedPokemon}`;
};

const selectType = document.getElementById('type');

selectType.addEventListener('change', ()=> {
  let condition = selectType.options[selectType.selectedIndex].value;
  let filtered = window.pokemon.filterType(data.pokemon, condition);
  let filteredPokemon = '';
  let computedPokemon = window.pokemon.computeStats(filtered);
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
  document.getElementById('computed').innerHTML = `${computedPokemon}`;
});

const selectAll = document.getElementById('all');

selectAll.addEventListener('click', ()=>{
  showData(data);
});

const sortAlphabeticAsc = document.getElementById('alphabetic');

sortAlphabeticAsc.addEventListener('click', ()=>{
  let sortBy = 'name';
  let sortOrder = 'asc';
  let sorted = window.pokemon.sortData(data.pokemon, sortBy, sortOrder);
  let computedPokemon = window.pokemon.computeStats(sorted);
  let sortedPokemon = '';
  sorted.forEach(element => {
    return sortedPokemon += `<div class="card">
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
  document.getElementById('root').innerHTML = sortedPokemon;
  document.getElementById('computed').innerHTML = `${computedPokemon}`;
});

const sortAlphabeticDes = document.getElementById('reverseAlphabetic');

sortAlphabeticDes.addEventListener('click', ()=>{
  let sortBy = 'name';
  let sortOrder = 'des';
  let sorted = window.pokemon.sortData(data.pokemon, sortBy, sortOrder);
  let computedPokemon = window.pokemon.computeStats(sorted);
  let sortedPokemon = '';
  sorted.forEach(element => {
    return sortedPokemon += `<div class="card">
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
  document.getElementById('root').innerHTML = sortedPokemon;
  document.getElementById('computed').innerHTML = `${computedPokemon}`;
});

const sortNumericAsc = document.getElementById('numericAsc');

sortNumericAsc.addEventListener('click', ()=>{
  let sortBy = 'num';
  let sortOrder = 'asc';
  let sorted = window.pokemon.sortData(data.pokemon, sortBy, sortOrder);
  let computedPokemon = window.pokemon.computeStats(sorted);
  let sortedPokemon = '';
  sorted.forEach(element => {
    return sortedPokemon += `<div class="card">
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
  document.getElementById('root').innerHTML = sortedPokemon;
  document.getElementById('computed').innerHTML = `${computedPokemon}`;
});

const sortNumericDes = document.getElementById('numericDes');

sortNumericDes.addEventListener('click', ()=>{
  let sortBy = 'num';
  let sortOrder = 'des';
  let sorted = window.pokemon.sortData(data.pokemon, sortBy, sortOrder);
  let computedPokemon = window.pokemon.computeStats(sorted);
  let sortedPokemon = '';
  sorted.forEach(element => {
    return sortedPokemon += `<div class="card">
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
  document.getElementById('root').innerHTML = sortedPokemon;
  document.getElementById('computed').innerHTML = `${computedPokemon}`;
});



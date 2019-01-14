global.window = global;
global.assert = require ("chai").assert;
global.POKEMON = require('../src/data/pokemon/pokemon.json');
require('../src/data.js');

const data = global.POKEMON.pokemon;
let filtered = window.pokemon.filterType(data, "Ice");

describe ("data", () => {
  it ("Debería ser un objeto", () => {
    global.assert.equal(typeof window.pokemon,"object");
  });
});

describe ("filterData", () => {
  it("Debería ser una función",() => {
    global.assert.equal(typeof window.pokemon.filterType, "function");
  });
  it(`Debería retornar como segundo pokemon de tipo Dragon a Dragonair`, () => {
    global.assert.equal(window.pokemon.filterType(data,"Dragon")[1].name, "Dragonair");
  });
});

describe ("sortData", () => {
  it("Debería ser una función", () => {
    global.assert.equal(typeof window.pokemon.sortData, "function");
  });

  it ("Debería retornar el número 001 como el primer número ordenado de 1-151", () => {
    global.assert.deepStrictEqual(window.pokemon.sortData (data,"num","asc")[0].num,"001"); 
  });

  it ("Debería retornar el número 001 antes que el 002 con un orden ascendente", () => {
    global.assert.operator(window.pokemon.sortData(data,"num","asc")[0].num, "<", data[1].num);
  });

  it ("Debería retornar el número 151 antes que el 150 con un orden descendente", () => {
    global.assert.operator(window.pokemon.sortData(data,"num","des")[0].num, ">", data[1].num);
  });

  it ("Debería retornar el número 004 como el cuarto número ordenado de 1-151", () => {
    global.assert.deepStrictEqual(window.pokemon.sortData (data,"num","asc")[3].num,"004"); 
  });

  it ("Debería retornar el número 151 como el primer número ordenado de 151-1", () => {
    global.assert.deepStrictEqual(window.pokemon.sortData (data,"num","des")[0].num,"151");
  });

  /*it ("Debería retornar el número 151 como el primer número ordenado de 151-1", () => {
    global.assert.deepStrictEqual(window.pokemon.sortData (data,"num","des")[9].num,"142");
  });*/

  it ("Debería retornar el nombre Abra como el primer nombre ordenado según A-Z", () => { 
    global.assert.deepStrictEqual(window.pokemon.sortData (data,"name", "asc")[0].name, "Abra");
  });

  it ("Debería retornar el nombre Zubat como el primer nombre ordenado según Z-A", () => {
    global.assert.deepStrictEqual(window.pokemon.sortData (data,"name", "des")[0].name, "Zubat");
  });

  it ("Debería retornar el nombre Zapdos como el segundo nombre ordenado según Z-A", () => {
    global.assert.deepStrictEqual(window.pokemon.sortData (data,"name", "des")[1].name, "Zapdos");
  });

  it ("Debería retornar el nombre Bulbasaur antes que Ivysaur con un orden ascendente", () => {
    global.assert.operator(window.pokemon.sortData(data,"name","asc")[0].name, "<", data[1].name);
  });

  it ("Debería retornar el nombre Mew después que Mewtwo con un orden descendente", () => {
    global.assert.operator(window.pokemon.sortData(data,"name","des")[0].name, ">", data[1].name);
  });

describe ("computeStats", () => {
  it("Debería ser una función", () => {
    global.assert.equal(typeof window.pokemon.computeStats, "function");
  });
  it("Debería retornar el número 5 para la suma de los pokemones del tipo Ice/Hielo", () => {
    global.assert.equal(window.pokemon.computeStats (filtered),"5");
  });
});

});
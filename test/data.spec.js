global.window = global;
global.assert = require ("chai").assert;
require('../src/data.js');
require('../src/data/pokemon/pokemon.js');

const data = window.POKEMON.pokemon;
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
    global.assert.equal(window.pokemon.sortData (data,"num"), "1-151"[0].num,"001"); 
  });

  it ("Debería retornar el número 004 como el cuarto número ordenado de 1-151", () => {
    global.assert.equal(window.pokemon.sortData (data,"num"), "1-151"[3].num,"004"); 
  });

  it ("Debería retornar el número 151 como el primer número ordenado de 151-1", () => {
    global.assert.equal(window.pokemon.sortData (data,"num"), "151-1"[0].num,"151");
  });

  it ("Debería retornar el número 148 como el cuarto número ordenado de 151-1", () => {
    global.assert.equal(window.pokemon.sortData (data,"num"), "151-1"[3].num,"148");
  });

  it ("Debería retornar el nombre Abra como el primer nombre ordenado según A-Z", () => { 
    global.assert.equal(window.pokemon.sortData (data,"name"), "A-Z"[0].name, "Abra");
  });

  it("Debería retornar el nombre Aerodactyl como el segundo nombre ordenado según A-Z", () => {
    global.assert.equal(window.pokemon.sortData (data,"name"), "A-Z"[1].name, "Aerodactyl");
  });

  it ("Debería retornar el nombre Zubat como el primer nombre ordenado según Z-A", () => {
    global.assert.equal(window.pokemon.sortData (data,"name"), "Z-A"[0].name, "Zubat");
  })
  it ("Debería retornar el nombre Zapdos como el segundo nombre ordenado según Z-A", () => {
    global.assert.equal(window.pokemon.sortData (data,"name"), "Z-A"[1].name, "Zapdos");
  })

describe ("computeStats", () => {
  it("Debería ser una función", () => {
    global.assert.equal(typeof window.pokemon.computeStats, "function");
  });
  it("Debería retornar el número 5 para la suma de los pokemones del tipo Ice/Hielo", () => {
    global.assert(window.pokemon.computeStats (filtered),"5");
  });
});


});
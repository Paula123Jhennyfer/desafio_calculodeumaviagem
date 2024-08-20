// 1- Preço do combustivel
// 2- gasto médio de um combustivel de carro por km 
// 3- Distância em Km da viagem 

let precoCombustivel = 5.75;
let gastoKm = 20;
let distanciaEmKm = 156;
let kmPorGasolina = distanciaEmKm / gastoKm;
let gastoDaGasolinaEmReais = kmPorGasolina * precoCombustivel;
console.log("O carro vai gastar " + kmPorGasolina.toFixed(2) + " litros de gasolina.");
console.log("O preço da gasolina seria " + gastoDaGasolinaEmReais.toFixed(2) + " Reais");

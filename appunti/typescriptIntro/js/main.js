let nome = "Nicolò";
let cognome = "Galizia";
let eta = 32;
let presenza = true;

let demo = document.querySelector("#demo");

demo.textContent = `Ciao mi presento sono: ${nome} ${cognome}, ho ${eta} anni.`;

class Studente {
  constructor(nome, cognome, mastricola, eta){
    this.nome = nome;
    this.cognome = cognome;
    this.mastricola = mastricola;
    this.eta = eta;
  }
}

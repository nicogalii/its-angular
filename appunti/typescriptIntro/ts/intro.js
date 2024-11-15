// Tipi di dato
// let nomeVar: tipo
var nome = "Nicolò";
var cognome = "Galizia";
var eta = 32;
// eta = "36"; non posso di certo saltare da un dato allaltro
var PI = 3.14;
var materie = [
    "JavaScript",
    "Angular",
    "React",
    "Java"
];
// any - tipo dinamico, cioe puo assumere  qualsiasi tipo io voglia.
// Si usa quando non si sa cosa si sta ricevendo
var corso;
corso = "Web Dev";
corso = 42;
corso = true;
// In questo caso la variabile auto puo assumere 2 tipi
var auto;
auto = "fiat";
auto = true;
var mioAnimaleDom = "scimmia";
var miaMoto = {
    marca: "Kawasaki",
    modello: "zoqwo",
    cilindrata: 56,
    km: 200
};
// Non sono obbligato a dichiarare il tipo. Per cui verrà interpretato
var presentazione = "Ciao mi presento sono: ".concat(nome, " ").concat(cognome, ", ho ").concat(eta, " anni. Ho una motocicletta, ").concat(miaMoto.marca, " ").concat(miaMoto.modello);
console.log(presentazione);

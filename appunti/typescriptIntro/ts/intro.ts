// Tipi di dato
// let nomeVar: tipo
let nome: string = "Nicolò";
let cognome: string = "Galizia";
let eta: number = 32;
// eta = "36"; non posso di certo saltare da un dato allaltro
const PI: number = 3.14;

let materie: string[] = [
  "JavaScript",
  "Angular",
  "React",
  "Java"
];

// any - tipo dinamico, cioe puo assumere  qualsiasi tipo io voglia.
// Si usa quando non si sa cosa si sta ricevendo
let corso: any;
corso = "Web Dev";
corso = 42;
corso = true;

// In questo caso la variabile auto puo assumere 2 tipi
let auto: string | boolean;
auto = "fiat";
auto = true;
// auto = 4; non puo valere number

// tipo custom
type AnimaleDomestico = "scimmia" | "gatto" | boolean;

let mioAnimaleDom: AnimaleDomestico = "scimmia"

type Motocicletta = {
  marca: string,
  modello: string,
  cilindrata: number,
  km: number
}

let miaMoto: Motocicletta = {
  marca: "Kawasaki",
  modello: "zoqwo",
  cilindrata: 56,
  km: 200 
}


// Non sono obbligato a dichiarare il tipo. Per cui verrà interpretato
let presentazione = `Ciao mi presento sono: ${nome} ${cognome}, ho ${eta} anni. Ho una motocicletta, ${miaMoto.marca} ${miaMoto.modello}`;

console.log(presentazione);
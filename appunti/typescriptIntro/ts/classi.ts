// Class, aspetto fondamentale in Angular
class Auto {
  marca: string;
  modello: string;
  cilindrata: number;
  km: number = 0;

  constructor(marca: string, modello: string, cilindrata: number, private isHybrid: boolean) {
    this.marca = marca;
    this.modello = modello;
    this.cilindrata = cilindrata;
  }

  guida(distanza: number){
    this.km += distanza;
  }

  // sto definendo il tipo di restituzione
  accendi(): string{
    return "WROOOOM"
  }

  accediAlleInfo(password:string) {
    if(password === "1234") {
      return "La tua auto è ibrida: " + this.isHybrid;
    } else {
      return "Mi dispiace non posso fornirti le informazioni";
    }
  }
}

let miaAuto = new Auto("Audi", "S3", 2000, true); //Qui viene invocato il costruttore

console.log(miaAuto.marca);
console.log(miaAuto.modello);
console.log(miaAuto.cilindrata);
console.log(miaAuto.accendi());
console.log(miaAuto.accediAlleInfo("pippo"));
console.log(miaAuto.accediAlleInfo("1234"));

class Persona{
  constructor(public nome: string, public cognome: string, private codFisc: string) {
    // Posso anche non specificare la definizione attraverso il this
  }

  presentati(): string {
    return `Ciao mi chiamo ${this.nome} ${this.cognome}, ho il seguente codice fiscale: ${this.codFisc}`;
  }

  accediAlleInfo(username: string, password: string): string {
    if(username === "Nicolò" && password === "abcde"){
      return this.presentati();

    } else {
      return "Credenziali non valide";
    }
  }
}

let persona1 = new Persona("Anna", "B9ianchi", "wsiubgsaero8byvyrsbv");

console.log(persona1.accediAlleInfo("Nicolò", "abcde"))
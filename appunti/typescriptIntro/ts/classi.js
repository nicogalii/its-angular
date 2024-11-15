// Class, aspetto fondamentale in Angular
var Auto = /** @class */ (function () {
    function Auto(marca, modello, cilindrata, isHybrid) {
        this.isHybrid = isHybrid;
        this.km = 0;
        this.marca = marca;
        this.modello = modello;
        this.cilindrata = cilindrata;
    }
    Auto.prototype.guida = function (distanza) {
        this.km += distanza;
    };
    // sto definendo il tipo di restituzione
    Auto.prototype.accendi = function () {
        return "WROOOOM";
    };
    Auto.prototype.accediAlleInfo = function (password) {
        if (password === "1234") {
            return "La tua auto è ibrida: " + this.isHybrid;
        }
        else {
            return "Mi dispiace non posso fornirti le informazioni";
        }
    };
    return Auto;
}());
var miaAuto = new Auto("Audi", "S3", 2000, true); //Qui viene invocato il costruttore
console.log(miaAuto.marca);
console.log(miaAuto.modello);
console.log(miaAuto.cilindrata);
console.log(miaAuto.accendi());
console.log(miaAuto.accediAlleInfo("pippo"));
console.log(miaAuto.accediAlleInfo("1234"));
var Persona = /** @class */ (function () {
    function Persona(nome, cognome, codFisc) {
        this.nome = nome;
        this.cognome = cognome;
        this.codFisc = codFisc;
        // Posso anche non specificare la definizione attraverso il this
    }
    Persona.prototype.presentati = function () {
        return "Ciao mi chiamo ".concat(this.nome, " ").concat(this.cognome, ", ho il seguente codice fiscale: ").concat(this.codFisc);
    };
    Persona.prototype.accediAlleInfo = function (username, password) {
        if (username === "Nicolò" && password === "abcde") {
            return this.presentati();
        }
        else {
            return "Credenziali non valide";
        }
    };
    return Persona;
}());
var persona1 = new Persona("Anna", "B9ianchi", "wsiubgsaero8byvyrsbv");
console.log(persona1.accediAlleInfo("Nicolò", "abcde"));

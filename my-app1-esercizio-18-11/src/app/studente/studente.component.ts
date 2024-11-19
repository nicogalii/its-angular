import { Component } from "@angular/core";

@Component({
  selector: "app-studente",
  standalone:true,
  imports:[],
  templateUrl: "./studente.component.html",
  styleUrl: "./studente.component.css"
})

export class Studente {
  nome: string = "Nicolò";

  constructor() {
    console.log(`Ciao sono lo studente: ${this.nome}`);
  }
}
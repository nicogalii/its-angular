import { Component } from "@angular/core";

@Component({
  selector: "app-docente",
  standalone:true,
  imports:[],
  templateUrl: "./docente.component.html",
  styleUrl: "./docente.component.css"
})

export class Docente {
  nome: string = "Shadi";

  constructor() {
    console.log(`Ciao sono il docente: ${this.nome}`);
  }
}
import { Component } from "@angular/core";

@Component({
  selector: "app-responsabile-corso",
  standalone:true,
  imports:[],
  templateUrl: "./responsabile-corso.component.html",
  styleUrl: "./responsabile-corso.component.css"
})

export class ResponsabileCorso {
  nome: string = "Davide";

  constructor() {
    console.log(`Ciao sono il responsabile del corso: ${this.nome}`);
  }
}
import { Component } from "@angular/core";
import { SecondoComponent } from "../secondo/secondo.component";

@Component({
  selector: "app-primo",
  standalone:true,
  imports:[SecondoComponent],
  templateUrl: "./primo-component.component.html",
  styleUrl: "./primo-component.component.css"
})

export class PrimoComponentComponent {
  sede:string = "Piazza dei mestieri";
  citta: string = "Torino";
  numPartecipanti: number = 28;
  presenza:boolean = true;

  constructor() {
    console.log(`Sono nella sede: ${this.sede}`);
  }

}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { SecondoComponent } from './secondo/secondo.component';

// @Component si chiama Decoration ed è una caratteristica di Typescript
// Il component dfinisce attravero un oggetto JS  come è fatta la classe sottostante e di che "tipo" è
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimoComponentComponent, SecondoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app0-Intro';
  nomeSviluppatore: string = "Nicolò";
  corso: string = "Web Developer";
  presenza: boolean = true;
  sede: string = "Piazza dei mestieri"

  constructor() {
    console.log(`Mi chiamo ${this.nomeSviluppatore}, frequento il corso ${this.corso}, Oggi sono presente: ${this.presenza}. Nella sede di ${this.sede}`);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// @Component si chiama Decoration ed è una caratteristica di Typescript
// Il component dfinisce attravero un oggetto JS  come è fatta la classe sottostante e di che "tipo" è
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app0-Intro';
  nomeSviluppatore: string = "Nicolò";
  corso: string = "Web Developer";
  presenza: boolean = true;

  constructor() {
    console.log(`Mi chiamo ${this.nomeSviluppatore}, frequento il corso ${this.corso}, Oggi sono presente: ${this.presenza}`);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Studente } from './studente/studente.component';
import { Docente } from './docente/docente.component';
import { ResponsabileCorso } from './responsabile-corso/responsabile-corso.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Studente, Docente, ResponsabileCorso],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app1-esercizio-18-11';
}

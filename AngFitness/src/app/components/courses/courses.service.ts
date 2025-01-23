import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Course } from './course/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private httpClient = inject(HttpClient);

  // Metodo generico per recuperare dati
  private fetchCourses(url: string, errorMessage: string) {
    return this.httpClient.get<Course[]>(url).pipe(
      catchError((error) => {
        console.error('Errore durante il recupero dei dati:', error);
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  loadCourses() {
    return this.fetchCourses(
      'http://localhost:3000/courses',
      'Qualcosa è andato storto durante il caricamento dei corsi.'
    );
  }

  // Aggiunge un corso al database
  addCourse(course: Course) {
    return this.httpClient.post('http://localhost:3000/courses', course).pipe(
      catchError((error) => {
        console.error("Errore durante l'aggiunta del corso:", error);
        return throwError(
          () => new Error('Non è stato possibile aggiungere il corso.')
        );
      })
    );
  }

  // Toglie un corso al database
  deleteCourse(course: Course) {
    // Effettua la richiesta DELETE al server per rimuovere il corso
    return this.httpClient
      .delete(`http://localhost:3000/courses/${course.id}`)
      .pipe(
        catchError((error) => {
          console.error("Errore durante l'eliminazione del corso:", error);
          return throwError(
            () => new Error('Non è stato possibile eliminare il corso.')
          );
        })
      );
  }

  updateBooking(course: Course) {
    return this.httpClient.patch<Course>(
      `http://localhost:3000/courses/${course.id}`,
      {
        actualBooking: ++course.actualBooking,
      }
    );
  }
}

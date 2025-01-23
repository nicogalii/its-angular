import { Component, inject, input } from '@angular/core';
import { Course } from '../components/courses/course/course.model';
import { CoursesService } from '../components/courses/courses.service';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-booking.component.html',
  styleUrl: './modal-booking.component.css',
})
export class ModalBookingComponent {
  private coursesService = inject(CoursesService);
  course = input.required<Course>();

  onSubmit(formData: NgForm) {
    const name = formData.value.name;
    const surname = formData.value.surname;
    const email = formData.value.email;
    // log di controllo
    console.log(`fatta prenotazione di ${name} ${surname} ${email}`);

    // controllo aggiuntivo oltre al form diretto nell'html, se il form passato è valido
    if (formData.valid) {
      this.coursesService.updateBooking(this.course()!).subscribe({
        next: (resData) => {
          console.log(
            `put effettuata con successo! ${JSON.stringify(resData)}`
          );
        },
        error: (err) => {
          console.error(
            `Errore durante aggiornamento delle prenotazioni del corso: ${err}`
          );
        },
      });
    }
  }
}

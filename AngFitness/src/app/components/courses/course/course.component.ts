import { Component, inject, input, signal } from '@angular/core';
import { Course } from './course.model';
import { NgForm } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { ModalBookingComponent } from "../../../modal-booking/modal-booking.component";

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [ModalBookingComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  course = input.required<Course>();
  selectedCourse = signal<Course | undefined>(undefined);
  onSubmit(course: Course) {
    this.selectedCourse.set(course);
  }
}

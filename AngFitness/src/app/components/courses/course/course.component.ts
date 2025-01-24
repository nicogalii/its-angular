import { Component, inject, input, output, signal } from '@angular/core';
import { Course } from './course.model';
import { NgForm } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { ModalBookingComponent } from '../../modal-booking/modal-booking.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [ModalBookingComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  course = input.required<Course>();
  selectCourse = output<Course>();

  onSelectCourse(course: Course) {
    this.selectCourse.emit(course);
  }
}

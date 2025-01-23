import { Component, input } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  course = input.required<Course>();

  onClick() {}
}

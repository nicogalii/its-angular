import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from './course/course.model';
import { CourseComponent } from './course/course.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent implements OnInit {
  courses = signal<Course[] | undefined>(undefined);
  isFetching = signal(false);

  private destroyRef = inject(DestroyRef);
  private coursesService = inject(CoursesService);

  ngOnInit() {
    const subscription = this.coursesService.loadCourses().subscribe({
      next: (resData) => {
        this.courses.set(resData);
        this.isFetching.set(true);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}

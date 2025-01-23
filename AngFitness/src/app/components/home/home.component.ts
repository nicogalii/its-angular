import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Course } from '../courses/course/course.model';
import { CoursesService } from '../courses/courses.service';
import { CourseComponent } from '../courses/course/course.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CourseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  courses = signal<Course[] | undefined>(undefined);
  isFetching = signal(false);

  private destroyRef = inject(DestroyRef);
  private coursesService = inject(CoursesService);

  ngOnInit() {
    const subscription = this.coursesService.loadCourses().subscribe({
      next: (resData) => {
        this.courses.set(resData.slice(0, 4));
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

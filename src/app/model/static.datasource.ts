import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  private courses: Course[] = [
    // new Course(
    //   1,
    //   'Algebra I',
    //   'Mathematics',
    //   'Mr. Johnson',
    //   60,
    //   '/assets/images/Mathematics.png'
    // ),
    // new Course(
    //   2,
    //   'Biology',
    //   'Science',
    //   'Ms. Smith',
    //   60,
    //   '/assets/images/Science.png'
    // ),
    // new Course(
    //   3,
    //   'World History',
    //   'Social Studies',
    //   'Ms. Emily',
    //   55,
    //   '/assets/images/Social.png'
    // ),
    // new Course(
    //   4,
    //   'English Literature',
    //   'English',
    //   'Mr.David',
    //   50,
    //   '/assets/images/English.png'
    // ),
    // new Course(
    //   5,
    //   'Vocab Oxford 3000',
    //   'English',
    //   'Ms. Maria',
    //   70,
    //   '/assets/images/English.png'
    // ),
    // new Course(
    //   6,
    //   'Chemistry',
    //   'Science',
    //   'Ms. Sarah',
    //   60,
    //   '/assets/images/Science.png'
    // ),
    // new Course(
    //   7,
    //   'Geometry',
    //   'Mathematics',
    //   'Mr. Michael',
    //   45,
    //   '/assets/images/Mathematics.png'
    // ),
    // new Course(
    //   8,
    //   'Trigonometry',
    //   'Mathematics',
    //   'Mr. Cris',
    //   50,
    //   '/assets/images/Mathematics.png'
    // ),
    // new Course(
    //   9,
    //   'Creative Writing',
    //   'English',
    //   'Ms. Elizabeth',
    //   40,
    //   '/assets/images/English.png'
    // ),
    // new Course(
    //   10,
    //   'Physics',
    //   'Science',
    //   'Mr. Robert',
    //   55,
    //   '/assets/images/Science.png'
    // ),
    // new Course(
    //   11,
    //   'Spanish I',
    //   'Foreign Language',
    //   'Ms. Tony',
    //   60,
    //   '/assets/images/Foreign.png'
    // ),
    // new Course(
    //   12,
    //   'Calculus',
    //   'Mathematics',
    //   'Ms. Carly',
    //   55,
    //   '/assets/images/Mathematics.png'
    // ),
    // new Course(
    //   13,
    //   'Government',
    //   'Social Studies',
    //   'Ms. Madison',
    //   45,
    //   '/assets/images/Social.png'
    // ),
    // new Course(
    //   14,
    //   'French I',
    //   'Foreign Language',
    //   'Mr.Hugo',
    //   60,
    //   '/assets/images/Foreign.png'
    // ),
    // new Course(
    //   15,
    //   'Astronomy',
    //   'Science',
    //   'Ms. Finn',
    //   40,
    //   '/assets/images/Science.png'
    // ),
    // new Course(
    //   16,
    //   'HTML/CSS',
    //   'Technology',
    //   'Ms. Vanda',
    //   60,
    //   '/assets/images/Technology.png'
    // ),
    // new Course(
    //   17,
    //   'Economics',
    //   'Social Studies',
    //   'Mr. Antony',
    //   45,
    //   '/assets/images/Social.png'
    // ),
    // new Course(
    //   18,
    //   'Chineese I',
    //   'Foreign Language',
    //   'Mr. Xue',
    //   60,
    //   '/assets/images/Foreign.png'
    // ),
    // new Course(
    //   19,
    //   'Angular',
    //   'Technology',
    //   'Ms. Vanda',
    //   60,
    //   '/assets/images/Technology.png'
    // ),
    // new Course(
    //   20,
    //   'Java',
    //   'Technology',
    //   'Mr. Lindon',
    //   55,
    //   '/assets/images/Technology.png'
    // ),
  ];

  getAllCourses(): Observable<Course[]> {
    return from([this.courses]);
  }
}

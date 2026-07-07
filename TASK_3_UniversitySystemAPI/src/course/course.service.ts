import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  private courses = [
    {
      id: '101',
      name: 'Advanced Web Technology',
      code: 'CSE401',
    },
    {
      id: '102',
      name: 'Software Engineering',
      code: 'CSE402',
    },
  ];

  getAllCourses() {
    return {
      message: 'All courses fetched successfully',
      data: this.courses,
    };
  }

  getCourseById(id: string) {
    const course = this.courses.find((c) => c.id === id);

    if (!course) {
      return {
        message: 'Course not found',
      };
    }

    return {
      message: 'Course fetched successfully',
      data: course,
    };
  }

  createCourse(course: any) {
    this.courses.push({
      id: String(this.courses.length + 101),
      ...course,
    });

    return {
      message: 'Course created successfully',
      data: course,
    };
  }
}
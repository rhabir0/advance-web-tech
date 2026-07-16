import { Controller, Delete, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Course } from './course.entity';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // GET http://localhost:3000/courses
  @Get()
  findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  // GET http://localhost:3000/courses/:courseName
  @Get(':courseName')
  findByName(@Param('courseName') courseName: string): Promise<Course[]> {
    return this.coursesService.findByName(courseName);
  }

  // DELETE http://localhost:3000/courses/delete/1
  @Delete('delete/:id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.coursesService.remove(id);
  }
}

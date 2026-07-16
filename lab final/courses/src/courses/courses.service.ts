import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.coursesRepository.find({ order: { id: 'ASC' } });
  }

  findByName(courseName: string): Promise<Course[]> {
    return this.coursesRepository
      .createQueryBuilder('course')
      .where('LOWER(course.courseName) = LOWER(:courseName)', { courseName })
      .orderBy('course.id', 'ASC')
      .getMany();
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.coursesRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException(`Course with id ${id} was not found`);
    }

    return { message: `Course with id ${id} deleted successfully` };
  }
}

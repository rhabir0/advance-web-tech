import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'course_name', length: 150 })
  courseName: string;

  @Column('int')
  credit: number;

  @Column({ length: 150 })
  department: string;
}

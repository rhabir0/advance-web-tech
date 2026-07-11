import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  productName!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price!: number;

  @Column()
  quantity!: number;

  @Column()
  category!: string;

  @Column({
    default: true,
  })
  isActive!: boolean;
}

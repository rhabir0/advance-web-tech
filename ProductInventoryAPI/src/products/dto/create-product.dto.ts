import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productName!: string;

  @IsNumber()
  @IsPositive()
  price!: number;

  @IsNumber()
  @IsPositive()
  quantity!: number;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

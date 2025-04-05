import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateAssignmentDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  maxScore: number;
}

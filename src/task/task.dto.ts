import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

class TaskDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  readonly description: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}

export { TaskDTO };

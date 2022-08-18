import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { resolve } from 'path';
import { TaskDTO } from './task.dto';
import { TaskService } from './task.service';

@Controller('app/v1/task')
class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post()
  create(@Body() taskDTO: TaskDTO) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('Something was wrong'), 15000);
    });
    // return this.taskService.create(taskDTO);
  }
  @Get()
  findAll() {
    return this.taskService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.taskService.update(id, taskDTO);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}

export { TaskController };

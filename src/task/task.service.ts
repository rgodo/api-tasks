import { Injectable } from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { ITask } from './task.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  tasks: ITask[] = [];
  create(taskDTO: TaskDTO): ITask {
    const task: ITask = {
      id: uuidv4(),
      ...taskDTO,
    };
    this.tasks.push(task);
    return task;
  }
  findAll(): ITask[] {
    return this.tasks;
  }
  findOne(id: string): ITask {
    const findedTask: ITask = this.tasks.find((task) => {
      return task.id === id;
    });
    return findedTask;
  }
  update(id: string, taskDTO: TaskDTO): ITask {
    const newTask: ITask = { id, ...taskDTO };
    this.tasks.map((task) => {
      task.id === id ? newTask : task;
    });
    return newTask;
  }
  delete(id: string): ITask[] {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }
}

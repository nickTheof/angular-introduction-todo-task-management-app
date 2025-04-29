import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}

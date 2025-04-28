import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task: Task | undefined;
  @Output() selectId = new EventEmitter<string>();

  onCompleteTask() {
    return this.selectId.emit(this.task?.id);
  }
}

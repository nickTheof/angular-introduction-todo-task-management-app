import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { DUMMY_TASKS } from '../../DUMMY_TASKS';
import { NewTaskComponent } from '../new-task/new-task.component';
import { NewTask } from '../../shared/interfaces/new-task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name: string | undefined;
  isAddingTask = false;

  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((el) => el.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((el) => el.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
}

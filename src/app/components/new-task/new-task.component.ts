import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId,
    );
    this.close.emit();
  }
}

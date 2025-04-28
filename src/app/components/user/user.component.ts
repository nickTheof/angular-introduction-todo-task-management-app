import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../shared/interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user: User | undefined;
  @Input({ required: true }) selected: boolean | undefined;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}

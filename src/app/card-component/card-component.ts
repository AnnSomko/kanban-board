import { Component, input, output } from '@angular/core';
import { Task } from '../task.type';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {
  data = input.required<Task>();
  delete = output<string>();

  onDeleteTask() {
    this.delete.emit(this.data()?.id)
  }
}

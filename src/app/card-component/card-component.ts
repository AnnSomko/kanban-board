import { Component, input } from '@angular/core';
import { Task } from '../task.type';

@Component({
  selector: 'app-card-component',
  imports: [],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {
  data = input<Task>();
}

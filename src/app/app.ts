import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from "./board-component/board-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kanban-board');
}

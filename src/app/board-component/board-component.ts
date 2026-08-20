import { Component } from '@angular/core';
import { ColumnComponent } from "../column-component/column-component";

@Component({
  selector: 'app-board-component',
  imports: [ColumnComponent],
  templateUrl: './board-component.html',
  styleUrl: './board-component.css',
})
export class BoardComponent {}

import { Component, computed, inject, input, signal } from '@angular/core';
import { CardComponent } from "../card-component/card-component";
import { TaskFormComponent } from '../task-form-component/task-form-component';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-column-component',
  imports: [CardComponent, TaskFormComponent],
  templateUrl: './column-component.html',
  styleUrl: './column-component.css',
})
export class ColumnComponent {
  title = input<string>('');
  status = input<'todo' | 'in-progress' | 'done'>();
  isModalOpen = signal<boolean>(false);
  taskService = inject(TaskService);

  filteredTasks = computed(() => {
    const allTasks = this.taskService.tasks();
    const columnStatus = this.status();

    return allTasks.filter(task => task.status === columnStatus);
  })

  onCreateTask(event: Event): any {
    this.isModalOpen.set(true);
  }
  
  onCloseModal() {
    this.isModalOpen.set(false);
  }
}

import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../task.type';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-task-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form-component.html',
  styleUrl: './task-form-component.css',
})
export class TaskFormComponent {
  close = output();
  taskService = inject(TaskService);


  taskForm = new FormGroup ({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl('', { nonNullable: true }),
    author: new FormControl('', { nonNullable: true }),
    status: new FormControl<'todo' | 'in-progress' | 'done'>('todo', { nonNullable: true })
  }
)

  onSubmit() {
    this.taskService.addTask(this.taskForm.getRawValue())
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }
}

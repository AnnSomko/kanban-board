import { Injectable, signal } from "@angular/core";
import { Task } from "../task.type";

@Injectable ({
    providedIn: 'root'
})
export class TaskService {
    tasks = signal<Task[]>([]);

    addTask(task: Omit<Task, 'id'>) {
        const newTask: Task = {
            ...task,
            id: Date.now().toString()
        }
        this.tasks.update(currentTasks => [...currentTasks, newTask]);
    }
}
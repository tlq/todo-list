import { Component } from '@angular/core';
import {TaskService} from "./services/task-service/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private tasks: any;
  constructor(private taskService: TaskService){
  this.taskService.getTasks().then(data =>{
    this.tasks = data;
  })
  }
}

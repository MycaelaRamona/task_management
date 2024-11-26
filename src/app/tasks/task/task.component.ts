import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  //@Output() complete = new EventEmitter<string>(); //por isso tenho <string> devido ao evento que emito!

  private tasksService = inject(TasksService);

  onCompleteTask(){
    //this.complete.emit(this.task.id); //se aqui estou emitindo um evento, eu coloco o tipo desse evento no meu            EventEmitter<string>

    //Aqui eu usso o metodo criado no serviço:
    this.tasksService.removeTask(this.task.id);
  }

}

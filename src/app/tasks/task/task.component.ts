import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>(); //por isso tenho <string> devido ao evento que emito!

  onCompleteTask(){
    this.complete.emit(this.task.id); //se aqui estou emitindo um evento, eu coloco o tipo desse evento no meu            EventEmitter<string>
  }

}

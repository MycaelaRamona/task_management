import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //quando eu uso o required true eu estou garatindo que o ! receberá de fato uma string
  @Input({required: true}) user!: User; //aqui o meu tipo é a intefece que criei.
  //{
    // id: string;
    // name: string;
    // avatar: string;
  //};
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}

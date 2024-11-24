import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //quando eu uso o required true eu estou garatindo que o ! receberá de fato uma string
  @Input({required: true}) user!: {
    id: string,
    name: string,
    avatar: string;
  };

  @Output() select = new EventEmitter();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}

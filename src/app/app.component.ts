import { Component } from '@angular/core';

//import { HeaderComponent } from './header/header.component';
//import { UserComponent } from './user/user.component';
//import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  //standalone: true, //Desativei para uso do NgModule.
  //imports: [HeaderComponent, UserComponent, TasksComponent], //Idem.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectUserId ?: string;

  get selectUser(){
    return this.users.find((user)=> user.id === this.selectUserId);
  }

  onSelectUser(id: string ){
    this.selectUserId = id;
  }

}

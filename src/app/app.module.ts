import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [AppComponent], //aqui eu só declaro componentes não standalone!
  bootstrap: [AppComponent],
  //Aqui posso importar componentes autônomos (standalone)
  //Nota: Todo aplicativo ao usar o Angular Module precisa usar o BrowserModule.
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent]
})
export class AppModule {}

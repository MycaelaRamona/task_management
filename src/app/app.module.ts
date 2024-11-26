import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shered.module';
import { TasksModule } from './tasks/tasks.module';


@NgModule({
  //aqui eu só declaro componentes não standalone!:
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  //Aqui posso importar componentes autônomos (standalone)
  //Nota: Todo aplicativo ao usar o Angular Module precisa usar o BrowserModule.
  imports: [
    BrowserModule,
    DatePipe, //Não necessáriamente preciso declara O DatePipe aqui pois ele faz parte do paconte BrowserModule
    SharedModule,
    TasksModule
  ]
})
export class AppModule { }

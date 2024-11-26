// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// bootstrapApplication(AppComponent).catch((err) => console.error(err));

//Desative o codigo assima para o uso do AppModule. O código comentado faz uso do standalone!
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


platformBrowserDynamic().bootstrapModule(AppModule);

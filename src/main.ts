import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)  // starting comp.. not starting module >> no mod here
  .catch((err) => console.error(err));

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes) , provideHttpClient()]    //provide how to instantiate services u wanna use // lazy loading >> no instantiation before your first use for service      // s.s
};

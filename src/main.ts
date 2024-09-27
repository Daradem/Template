import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/application/config';
import { AppComponent } from './app/presenters/components/home/home';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

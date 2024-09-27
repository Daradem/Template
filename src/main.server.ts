import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/presenters/components/home/home';
import { config } from './app/application/config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

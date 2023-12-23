import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// No seu arquivo JavaScript ou TypeScript principal
import 'bootstrap/dist/css/bootstrap.min.css';


import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

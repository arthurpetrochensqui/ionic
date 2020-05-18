/*
O arquivo main.ts contem a logica para inicial do Ionic app. Na produção 
ambiente. O metodo enableProdMode é invocado para habilitar modo produção Angular
para melhorar performance.
*/
import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [AppComponent, TimeAgoPipe],
  entryComponents: [],
  imports:
   [
     BrowserModule,
     //O modulo importado IonicModule.forRoot() é um array de propriedades
     // importadado é a diferença entre modulos angular normal e modulos Ionic. O metodo
     // IonicModule.forRoot() marca com certeza que provedor de serviços,componentes e diretivas
     //do Ionic Angular são fornecidos quando o modulo é carregado. Esses componentes
     // e diretivas pode ser usado em qualquer lugar no modulo.
     IonicModule.forRoot(),
     AppRoutingModule,
     //BrowserAnimationsModule
     
   ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
  O modulo importado IonicModule.forRoot() é um array de propriedades
  importadado é a diferença entre modulos angular normal e modulos Ionic. O metodo
  IonicModule.forRoot() marca com certeza que provedor de serviços,componentes e diretivas
  do Ionic Angular são fornecidos quando o modulo é carregado. Esses componentes
  e diretivas pode ser usado em qualquer lugar no modulo.
  AppComponent e o componente raiz do app, então neste array de propriedades iniciais para iniciar o app Ionic.
  
*/
/*
  Declara o componente principal do app. No decorador @Component, a propriedade
  templateUrl é define para o app.component.html. A função construtor declara um
  parametro publico platform do tipo Platform. Injetor Angular cria a instancia
  da Platform a fornece ele quando este componente é instaciado.
  O metodo ready() da Platform retorna uma promessa que é resolvido quando a platform estiver
  pronto para uso. Aqui é definido o stylo da status bar e oculta o splash screen.

*/
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

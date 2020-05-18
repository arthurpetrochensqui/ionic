import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pages = [
    {
      title: 'Schedule',
      url: '../schedule'
    },
    {
      title: 'Recipes',
      url: '../recipes'
    },
    {
      title: 'Login',
      url: '../login'
    }
  ];

  selectedPath = '';
  constructor(private router: Router, private menu: MenuController) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  
  ngOnInit() {
  }

}
